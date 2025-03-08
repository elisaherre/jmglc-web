"use client";

import { Inter } from "next/font/google";
import "./globals.css";

// Components
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { LanguageProvider } from "./context/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
