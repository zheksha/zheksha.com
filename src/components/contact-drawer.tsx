import { useEffect, useMemo, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Field, FieldContent, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email."),
  topic: z.string().optional(),
  message: z
    .string()
    .min(20, "Message should be at least 20 characters.")
    .max(2000, "Message should be under 2000 characters."),
  botField: z.string().optional(),
})

type ContactFormValues = z.infer<typeof formSchema>

const DRAFT_KEY = "contact-draft"
const TOPIC_OPTIONS = ["Project inquiry", "Recruiter", "Collaboration", "Speaking", "Other"]

export function ContactDrawer() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
    setValue,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      topic: "",
      message: "",
      botField: "",
    },
  })

  const messageValue = watch("message")
  const draftValues = watch()

  useEffect(() => {
    const stored = localStorage.getItem(DRAFT_KEY)
    if (!stored) return

    try {
      const parsed = JSON.parse(stored) as Partial<ContactFormValues>
      Object.entries(parsed).forEach(([key, value]) => {
        setValue(key as keyof ContactFormValues, value ?? "")
      })
    } catch {
      localStorage.removeItem(DRAFT_KEY)
    }
  }, [setValue])

  useEffect(() => {
    const timeout = setTimeout(() => {
      localStorage.setItem(DRAFT_KEY, JSON.stringify(draftValues))
    }, 300)

    return () => clearTimeout(timeout)
  }, [draftValues])

  const characterCount = useMemo(() => messageValue?.length ?? 0, [messageValue])

  const onSubmit = async (values: ContactFormValues) => {
    if (values.botField) return

    setStatus("submitting")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })

      if (!response.ok) {
        throw new Error("Submission failed")
      }

      setStatus("success")
      localStorage.removeItem(DRAFT_KEY)
      reset()
    } catch {
      setStatus("error")
    }
  }

  useEffect(() => {
    if (status === "success" || status === "error") {
      const timeout = setTimeout(() => {
        setStatus("idle")
      }, 5000)

      return () => clearTimeout(timeout)
    }
  }, [status])

  return (
    <Drawer direction="bottom">
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className="w-full border-accent/30 bg-accent/[0.06] text-foreground hover:bg-accent/[0.12] hover:border-accent/50 transition-colors font-mono text-[11px] tracking-wide uppercase"
        >
          Get In Touch
        </Button>
      </DrawerTrigger>
      <DrawerContent className="flex flex-col data-[vaul-drawer-direction=bottom]:max-h-[92dvh] md:data-[vaul-drawer-direction=bottom]:max-h-[60vh]">
        <DrawerHeader className="shrink-0">
          <DrawerTitle>Get in touch</DrawerTitle>
          <DrawerDescription>
            Typically replies within 24 hours. Your email is safe.
          </DrawerDescription>
        </DrawerHeader>
        <form
          className="no-scrollbar min-h-0 flex-1 overflow-y-auto px-6 pb-2"
          name="contact"
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="sr-only">
            Don’t fill this out if you’re human:
            <input tabIndex={-1} autoComplete="off" {...register("botField")} name="bot-field" />
          </label>

          <div className="flex flex-col gap-5">
            {status === "success" && (
              <div className="rounded-none border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-xs text-emerald-300">
                Thanks! Your message is on its way. I’ll reply soon.
              </div>
            )}

            {status === "error" && (
              <div className="rounded-none border border-red-500/30 bg-red-500/10 px-3 py-2 text-xs text-red-300">
                Something went wrong. Please try again.
              </div>
            )}

            <Field>
              <FieldLabel>Full name</FieldLabel>
              <FieldContent>
                <Input placeholder="John Doe" {...register("name")} aria-invalid={!!errors.name} />
                {errors.name && (
                  <FieldDescription className="text-destructive">
                    {errors.name.message}
                  </FieldDescription>
                )}
              </FieldContent>
            </Field>

            <Field>
              <FieldLabel>Email</FieldLabel>
              <FieldContent>
                <Input
                  type="email"
                  placeholder="john.doe@example.com"
                  {...register("email")}
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <FieldDescription className="text-destructive">
                    {errors.email.message}
                  </FieldDescription>
                )}
              </FieldContent>
            </Field>

            <Field>
              <FieldLabel>Topic (optional)</FieldLabel>
              <FieldContent>
                <select
                  {...register("topic")}
                  className="border-input focus-visible:border-ring focus-visible:ring-ring/50 dark:bg-input/30 h-9 w-full rounded-none border bg-transparent px-3 text-xs transition-colors focus-visible:ring-1"
                >
                  <option value="">Select a topic</option>
                  {TOPIC_OPTIONS.map((topic) => (
                    <option key={topic} value={topic}>
                      {topic}
                    </option>
                  ))}
                </select>
              </FieldContent>
            </Field>

            <Field>
              <div className="flex items-center justify-between">
                <FieldLabel>Message</FieldLabel>
                <span className="text-[10px] text-muted-foreground">{characterCount}/2000</span>
              </div>
              <FieldContent>
                <Textarea
                  rows={4}
                  placeholder="What would you like to build together?"
                  {...register("message")}
                  aria-invalid={!!errors.message}
                />
                {errors.message && (
                  <FieldDescription className="text-destructive">
                    {errors.message.message}
                  </FieldDescription>
                )}
              </FieldContent>
            </Field>

            <p className="text-xs text-muted-foreground">
              By sending this message, you agree that I may store your email to reply.
            </p>
          </div>
        </form>
        <DrawerFooter className="shrink-0">
          <Button
            type="submit"
            form="contact"
            disabled={status === "submitting"}
            onClick={handleSubmit(onSubmit)}
          >
            {status === "submitting" ? "Sending..." : "Send message"}
          </Button>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
