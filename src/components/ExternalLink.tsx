"use client";

import React from "react";

interface ExternalLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

const ExternalLink = ({ href, children, className = "" }: ExternalLinkProps) => {
    return (
        <a
            href={href}
            className={`text-muted-foreground hover:underline ${className}`}
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </a>
    );
};

export default ExternalLink;
