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

export function PrivacyDrawer() {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <a className="hover:text-foreground transition-colors" href="#privacy">
          Privacy Policy
        </a>
      </DrawerTrigger>
      <DrawerContent className="">
        <DrawerHeader>
          <DrawerTitle>Privacy Policy</DrawerTitle>
          <DrawerDescription>Last updated: January 2026</DrawerDescription>
        </DrawerHeader>
        <div className="no-scrollbar overflow-y-auto px-4 space-y-4 text-sm leading-relaxed">
          <p>
            We respect your privacy and are committed to protecting any information you choose to
            share while using this website or application.
          </p>

          <p>
            <strong>Information we collect:</strong> We may collect basic usage data such as browser
            type, device information, pages visited, and time spent on the site. If you contact us
            directly, we may receive your name, email address, and any message content you provide.
          </p>

          <p>
            <strong>How we use your information:</strong> Your data is used only to operate,
            maintain, and improve this website, respond to inquiries, and analyze performance. We do
            not sell, rent, or trade your personal data.
          </p>

          <p>
            <strong>Cookies & analytics:</strong> This site may use cookies or privacy-friendly
            analytics tools to understand usage patterns and improve performance. You can disable
            cookies in your browser at any time.
          </p>

          <p>
            <strong>Data security:</strong> We follow industry best practices to protect your
            information, including encryption and secure storage where applicable. However, no
            system can be 100% secure.
          </p>

          <p>
            <strong>Third-party services:</strong> This site may link to external services. We are
            not responsible for the privacy practices of third-party websites.
          </p>

          <p>
            <strong>Your rights:</strong> You may request access to, correction of, or deletion of
            your personal data at any time by contacting us.
          </p>

          <p>
            <strong>Policy updates:</strong> This policy may be updated from time to time. Changes
            will be reflected on this page.
          </p>
        </div>

        <DrawerFooter>
          <span className="text-xs text-muted-foreground">
            Questions? Contact: zheksha@gmail.com
          </span>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
