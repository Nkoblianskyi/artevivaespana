import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import CookieConsent from "@/components/cookie-consent"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ArteViva - Museos de España",
  description: "Descubre los mejores museos de España con ArteViva",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <CookieConsent />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

