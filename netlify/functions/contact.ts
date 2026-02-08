type ContactPayload = {
  name?: string
  email?: string
  topic?: string
  message?: string
  botField?: string
}

function jsonResponse(statusCode: number, body: Record<string, unknown>) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }
}

function isAllowedOrigin(origin: string | undefined) {
  if (!origin) return true
  if (process.env.NETLIFY_DEV === "true" || process.env.NODE_ENV !== "production") {
    return origin.startsWith("http://localhost:") || origin.startsWith("http://127.0.0.1:")
  }

  const allowed = [
    process.env.URL,
    process.env.DEPLOY_PRIME_URL,
    process.env.DEPLOY_URL,
  ].filter(Boolean) as string[]
  return allowed.some((allowedOrigin) => origin.startsWith(allowedOrigin))
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

async function sendTelegramMessage(payload: ContactPayload) {
  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID
  if (!token || !chatId) {
    throw new Error("Missing Telegram environment variables.")
  }

  const message = [
    "New portfolio inquiry",
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    payload.topic ? `Topic: ${payload.topic}` : "",
    "",
    payload.message ?? "",
  ]
    .filter(Boolean)
    .join("\n")

  const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
    }),
  })

  if (!response.ok) {
    throw new Error("Failed to send Telegram message.")
  }
}


export const handler = async (event: {
  httpMethod: string
  headers: Record<string, string | undefined>
  body: string | null
}) => {
  if (event.httpMethod !== "POST") {
    return jsonResponse(405, { error: "Method not allowed." })
  }

  if (!isAllowedOrigin(event.headers.origin)) {
    return jsonResponse(403, { error: "Forbidden origin." })
  }

  if (!event.body) {
    return jsonResponse(400, { error: "Missing request body." })
  }

  let payload: ContactPayload
  try {
    payload = JSON.parse(event.body) as ContactPayload
  } catch {
    return jsonResponse(400, { error: "Invalid JSON payload." })
  }

  if (payload.botField) {
    return jsonResponse(200, { ok: true })
  }

  const name = payload.name?.trim() ?? ""
  const email = payload.email?.trim() ?? ""
  const message = payload.message?.trim() ?? ""

  if (!name || name.length < 2) {
    return jsonResponse(400, { error: "Name is required." })
  }

  if (!email || !isValidEmail(email)) {
    return jsonResponse(400, { error: "Valid email is required." })
  }

  if (message.length < 20 || message.length > 2000) {
    return jsonResponse(400, { error: "Message length is invalid." })
  }

  try {
    await sendTelegramMessage({ ...payload, name, email, message })
    return jsonResponse(200, { ok: true })
  } catch {
    return jsonResponse(500, { error: "Message delivery failed." })
  }
}
