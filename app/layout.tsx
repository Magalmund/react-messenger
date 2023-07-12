import './globals.css'
import {Inter} from 'next/font/google'
import ToasterContext from "@/app/context/ToasterContext";
import React from "react";
import AuthContext from "@/app/context/AuthContext";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'React Messenger',
    description: 'React messenger project',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <AuthContext>
            <ToasterContext/>
            {children}
        </AuthContext>
        </body>
        </html>
    )
}
