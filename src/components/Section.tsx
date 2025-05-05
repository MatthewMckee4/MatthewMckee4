"use client";

import React from "react";

interface SectionProps {
    title: string;
    date: string;
    children: React.ReactNode;
    className?: string;
}

const Section = ({ title, date, children, className = "" }: SectionProps) => {
    return (
        <section className={`mb-8 ${className}`}>
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-2xl font-semibold">{title}</h2>
                <small className="text-muted-foreground">{date}</small>
            </div>
            {children}
        </section>
    );
};

export default Section;
