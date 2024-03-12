import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Future Project",
  description: "Helps to provide the api",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={`${inter.className} overflow-x-hidden overflow-y-scroll no-scrollbar bg-gradient-to-r from-[#030014] via-[#2a2542] to-[#030014]`} >{children}</body>
    </html>
  );
}
