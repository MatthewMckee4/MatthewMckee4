"use client";

import React from "react";
import Section from "./Section";
import ExternalLink from "./ExternalLink";

interface ProjectProps {
    title: string;
    date: string;
    description: string;
    links?: Array<{
        text: string;
        href: string;
    }>;
}

const Project = ({ title, date, description, links }: ProjectProps) => {
    return (
        <Section title={title} date={date}>
            <p className="text-gray-600 mb-2">{description}</p>
            {links && (
                <div className="space-x-4">
                    {links.map((link, index) => (
                        <ExternalLink key={index} href={link.href}>
                            {link.text}
                        </ExternalLink>
                    ))}
                </div>
            )}
        </Section>
    );
};

export default Project;
