import { Geist, DM_Sans } from "next/font/google";
import "./globals.css";
import HeroPage from "./Hero/Page";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const dm_sans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900' , '1000'],
  display: 'swap'
});

export const metadata = {
  title: "White Stone_Dentist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Logo.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${geistSans.variable} ${dm_sans.variable} antialiased`}
      >
        <HeroPage/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
