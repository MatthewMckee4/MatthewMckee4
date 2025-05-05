"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
}

function NavLink({ href, children }: NavLinkProps) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link href={href} className={`${isActive ? "font-bold" : "text-gray-600"} hover:underline`}>
            {children}
        </Link>
    );
}

export default function Navigation() {
    return (
        <nav className="max-w-3xl mx-auto px-4 py-6">
            <div className="flex justify-between items-center">
                <div className="flex gap-4">
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/experience">Experience</NavLink>
                    <NavLink href="/education">Education</NavLink>
                    <NavLink href="/personal-work">Personal Work</NavLink>
                </div>
                <a
                    href="https://github.com/matthewmckee4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80"
                >
                    <Image
                        src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                        alt="GitHub Profile"
                        width={32}
                        height={32}
                        className="rounded-full"
                    />
                </a>
            </div>
        </nav>
    );
}
