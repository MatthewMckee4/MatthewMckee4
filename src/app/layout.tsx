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
            <body className={`${inter.className} bg-nord-0 text-nord-4 min-h-screen`}>
                <Navigation />
                <main className="max-w-3xl mx-auto px-4 py-6">{children}</main>
            </body>
        </html>
    );
}
