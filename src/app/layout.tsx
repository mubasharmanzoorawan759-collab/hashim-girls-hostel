import type { Metadata } from "next"
import { Syne, Source_Sans_3, Geist_Mono } from "next/font/google"
import "./globals.css"
import { hostel } from "@/lib/hostel"

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
})

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: `${hostel.name} | Girls Hostel in Upper Chattar, Muzaffarabad`,
  description: `${hostel.tagline} Call or WhatsApp ${hostel.phoneDisplay}. Email ${hostel.email}. ${hostel.addressOneLine}`,
  openGraph: {
    title: hostel.name,
    description: hostel.tagline,
    type: "website",
  },
}

const RootLayout = ({ children }: LayoutProps<"/">) => {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${sourceSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}

export default RootLayout
