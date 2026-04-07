import React from "react";
import Section from "@/components/Section";
import Project from "@/components/Project";
import ExternalLink from "@/components/ExternalLink";

export default function PersonalWork() {
    return (
        <div>
            <h1 className="text-4xl font-bold mb-6">Personal Work</h1>

            <Project
                title="Karva"
                description="An extremely fast Python test framework, written in Rust."
                links={[
                    { text: "GitHub", href: "https://github.com/karva-dev/karva" },
                    { text: "Docs", href: "https://karva-dev.github.io/karva/" },
                ]}
            />

            <Project
                title="GDSR"
                description="GDSII manipulation, written in Rust."
                links={[
                    { text: "GitHub", href: "https://github.com/MatthewMckee4/gdsr" },
                    { text: "Docs", href: "https://matthewmckee4.github.io/gdsr/" },
                ]}
            />

            <Project
                title="Seal"
                description="An extremely fast release management tool, written in Rust."
                links={[
                    { text: "GitHub", href: "https://github.com/karva-dev/seal" },
                    { text: "Docs", href: "https://matthewmckee4.github.io/seal/" },
                ]}
            />

            <Project
                title="Kount"
                description="An extremely fast line counter for files, written in Rust."
                links={[
                    { text: "GitHub", href: "https://github.com/karva-dev/kount" },
                    { text: "Docs", href: "https://karva-dev.github.io/kount/" },
                ]}
            />

            <Project
                title="Action Format"
                description="An opinionated GitHub action formatter."
                links={[{ text: "GitHub", href: "https://github.com/karva-dev/action-format" }]}
            />

            <Project
                title="Unsoundness Checker"
                description="A tool for reporting possible typing unsoundness in Python."
                links={[
                    {
                        text: "GitHub",
                        href: "https://github.com/MatthewMckee4/unsoundness-checker",
                    },
                    {
                        text: "Docs",
                        href: "https://matthewmckee4.github.io/unsoundness-checker/",
                    },
                ]}
            />

            <Project
                title="Cram"
                description="A flashcard app with Typst-powered card rendering, written in Rust."
                links={[
                    { text: "GitHub", href: "https://github.com/MatthewMckee4/cram" },
                    { text: "Docs", href: "https://matthewmckee4.github.io/cram/" },
                ]}
            />

            <Project
                title="Pydantic Explain"
                description="Human-readable error messages for Pydantic validation errors."
                links={[
                    {
                        text: "GitHub",
                        href: "https://github.com/MatthewMckee4/pydantic-explain",
                    },
                    {
                        text: "Docs",
                        href: "https://matthewmckee4.github.io/pydantic-explain/",
                    },
                ]}
            />

            <Section title="Open Source Contributions">
                <p className="text-muted-foreground">
                    Over 4000 contributions in the past year. Top public contributor to{" "}
                    <ExternalLink href="https://github.com/astral-sh/ty">ty</ExternalLink>, an
                    extremely fast Python type checker written in Rust.
                </p>
            </Section>
        </div>
    );
}
