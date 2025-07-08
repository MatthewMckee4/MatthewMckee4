import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Matthew McKee",
    description: "Personal website of Matthew McKee",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="dark">
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/hack-font@3.3.0/build/web/hack.css"
                />
            </head>
            <body className={`${inter.className} bg-nord-0 text-nord-4 min-h-screen`}>
                <Navigation />
                <main className="max-w-4xl mx-auto px-4 py-6 min-h-[calc(100vh-140px)]">
                    {children}
                </main>
            </body>
        </html>
    );
}
