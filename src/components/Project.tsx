import React from "react";
import ExternalLink from "./ExternalLink";

interface ProjectProps {
    title: string;
    description: string;
    links?: Array<{
        text: string;
        href: string;
    }>;
}

const Project = ({ title, description, links }: ProjectProps) => {
    return (
        <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            <p className="text-muted-foreground mb-2">{description}</p>
            {links && (
                <div className="space-x-4">
                    {links.map((link, index) => (
                        <ExternalLink key={index} href={link.href}>
                            {link.text}
                        </ExternalLink>
                    ))}
                </div>
            )}
        </section>
    );
};

export default Project;
