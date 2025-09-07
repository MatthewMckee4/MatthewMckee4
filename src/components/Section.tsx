"use client";

import React from "react";
import DatedTitle from "./DatedTitle";

interface SectionProps {
    title: string;
    date: string;
    children: React.ReactNode;
    className?: string;
}

const Section = ({ title, date, children, className = "" }: SectionProps) => {
    return (
        <section className={`mb-8 ${className}`}>
            <DatedTitle title={title} date={date} />
            {children}
        </section>
    );
};

export default Section;
