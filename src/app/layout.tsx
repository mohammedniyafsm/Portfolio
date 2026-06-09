import "./globals.css";
import Background from "@/components/Background";
import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <Theme appearance="dark">
          <Background />
          {children}
        </Theme>
      </body>
    </html>
  );
}