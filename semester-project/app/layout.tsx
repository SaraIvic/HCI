import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar/Navbar";
import Footer from "./_components/Footer/Footer";

const pages = [
  { title: "Home", path: "/" },
  { title: "About Us", path: "/aboutUs" },
  { title: "Adoption", path: "/adoption" },
  { title: "Contact Us", path: "/contactUs" },
  { title: "Get Involved", path: "/getInvolved" },
];
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Animal Shelter",
  description: "We're on a mission to rescue and rehome animals in need.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar pages={pages} />
        {children}
        <Footer pages={pages} />
      </body>
    </html>
  );
}
