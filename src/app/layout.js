import { Inter } from "next/font/google";
import * as React from "react";
import {NextUIProvider} from "@nextui-org/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SoSage Library",
  description: "SoSage Library task",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NextUIProvider>
          {children}
          </NextUIProvider>
      </body>
    </html>
  );
}
