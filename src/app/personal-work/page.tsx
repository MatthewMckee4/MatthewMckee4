import React from "react";
import Section from "@/components/Section";
import Project from "@/components/Project";
import ExternalLink from "@/components/ExternalLink";

export default function PersonalWork() {
    return (
        <div>
            <h1 className="text-4xl font-bold mb-6">Personal Work</h1>

            <Project
                title="GDSR"
                date="Aug 2024 - Present"
                description="Created a GDSII manipulation python package written in Rust"
                links={[{ text: "Github", href: "https://github.com/MatthewMckee4/gdsr" }]}
            />

            <Project
                title="ReviewIt"
                date="Aug 2023 - Dec 2023"
                description="Developed a MERN stack Music Rating website that interacts with Spotify API"
                links={[
                    {
                        text: "Frontend",
                        href: "https://github.com/MatthewMckee4/Music-Rating-Frontend",
                    },
                    {
                        text: "Backend",
                        href: "https://github.com/MatthewMckee4/Music-Rating-Backend",
                    },
                ]}
            />

            <Section title="Open Source Contributions" date="Nov 2023 - Present">
                <p className="text-muted-foreground mb-4">
                    Over 3000 contributions in the past year
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>
                        <ExternalLink href="https://github.com/astral-sh/ruff">Ruff</ExternalLink>{" "}
                        (Contributor)
                    </li>
                    <li>
                        <ExternalLink href="https://github.com/gdsfactory/kfactory">
                            KFactory
                        </ExternalLink>{" "}
                        (Maintainer)
                    </li>
                    <li>
                        <ExternalLink href="https://github.com/gdsfactory/gdsfactory">
                            GDSFactory
                        </ExternalLink>{" "}
                        (Maintainer)
                    </li>
                    <li>Python Typing (Contributor)</li>
                </ul>
            </Section>
        </div>
    );
}
