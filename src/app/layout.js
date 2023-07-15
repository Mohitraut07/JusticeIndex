"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import React, { createContext } from "react";

const inter = Inter({ subsets: ["latin"] });
const VerifiedContext = createContext(false);

export const metadata = {
  title: "Justic Index",
  description: "We are watching you",
};

export default function RootLayout({ children }) {
  const [isVerify, setIsVerify] = React.useState(false);
  return (
    <VerifiedContext.Provider value={{ isVerify, setIsVerify }}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </VerifiedContext.Provider>
  );
}

export { VerifiedContext };
