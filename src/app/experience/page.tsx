import type React from "react";

export default function Experience() {
    return (
        <div>
            <h1 className="text-4xl font-bold mb-6">Experience</h1>

            <ExperienceSection
                workplace="xAI"
                positions={[
                    {
                        date: "April 2026 - Present",
                        role: "Human Data Team Lead",
                        content: (
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>
                                    Managed hundreds of tutors supporting
                                    evaluations of state-of-the-art coding
                                    models.
                                </li>
                                <li>
                                    Built an internal platform for measuring and
                                    tracking tutor quality and throughput.
                                </li>
                                <li>
                                    Helped define operational workflows for
                                    reviewing tutor performance and improving
                                    evaluation quality.
                                </li>
                            </ul>
                        ),
                    },
                    {
                        date: "January 2026 - April 2026",
                        role: "Software Engineer Specialist",
                        content: (
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>
                                    Designed and built evaluations for
                                    state-of-the-art coding models.
                                </li>
                                <li>
                                    Created coding tasks and rubrics to measure
                                    model performance on realistic software
                                    engineering workflows.
                                </li>
                            </ul>
                        ),
                    },
                ]}
            />

            <ExperienceSection
                workplace="JP Morgan"
                positions={[
                    {
                        date: "July - September 2025",
                        role: "Software Engineer Intern",
                        content: (
                            <p className="text-muted-foreground">
                                Worked on type checking and developer tools for
                                a large codebase
                            </p>
                        ),
                    },
                ]}
            />

            <ExperienceSection
                workplace="GDSFactory"
                positions={[
                    {
                        date: "February 2025 - January 2026",
                        role: "Software Engineer Intern",
                        content: (
                            <>
                                <p className="text-muted-foreground mb-4">
                                    Working on open source GDSII manipulation
                                    software for designing chips.
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                    <li>
                                        Guided one of the largest and most
                                        beneficial changes to our open source
                                        Python package.
                                    </li>
                                    <li>
                                        <p className="mb-2">
                                            Worked on improving the user
                                            experience of closed-source software
                                            including and using:
                                        </p>
                                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                            <li>Vscode extensions</li>
                                            <li>AWS</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Helped maintain very high code quality
                                        and user engagement of open source
                                        tools.
                                    </li>
                                </ul>
                            </>
                        ),
                    },
                ]}
            />

            <ExperienceSection
                workplace="Sivers Photonics"
                positions={[
                    {
                        date: "July 2022 - Present",
                        role: "Software Engineer",
                        content: (
                            <>
                                <p className="text-muted-foreground mb-4">
                                    Developed full-stack CAD automation software
                                    for efficient design of advanced DFB lasers.
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                    <li>
                                        Built the internal software for Sivers
                                        that now handles the majority of CAD
                                        automation processes and yielding a
                                        notable reduction of over{" "}
                                        <strong>50%</strong> in product design
                                        and creation timelines. This enhancement
                                        has significantly improved operational
                                        efficiency and customer satisfaction.
                                    </li>
                                    <li>
                                        Contributed to the development of
                                        advanced photonics technology.
                                    </li>
                                    <li>
                                        Utilized GitHub Actions to automate
                                        CI/CD workflows, enabling continuous
                                        integration, deployment, and automated
                                        testing. This ensured consistent quality
                                        checks, rapid feedback on code changes,
                                        and a reliable development pipeline.
                                    </li>
                                </ul>
                            </>
                        ),
                    },
                ]}
            />

            <ExperienceSection
                workplace="Glasgow University Software Service"
                positions={[
                    {
                        date: "October 2024 - January 2026",
                        role: "Software Engineer",
                        content: (
                            <p className="text-muted-foreground">
                                Developed and maintained software for the
                                university{"'"}s software service.
                            </p>
                        ),
                    },
                ]}
            />

            <ExperienceSection
                workplace="JP Morgan"
                positions={[
                    {
                        date: "April 2024",
                        role: "Spring Insights Intern",
                        content: (
                            <p className="text-muted-foreground">
                                Acquired knowledge in software engineering at JP
                                Morgan through practical workshops, expert
                                panels, and networking.
                            </p>
                        ),
                    },
                ]}
            />
        </div>
    );
}

interface ExperiencePosition {
    date: string;
    role: string;
    content: React.ReactNode;
}

interface ExperienceSectionProps {
    workplace: string;
    positions: ExperiencePosition[];
}

const ExperienceSection = ({
    workplace,
    positions,
}: ExperienceSectionProps) => {
    return (
        <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">{workplace}</h2>
            {positions.map(({ date, role, content }) => (
                <div className="mb-4" key={`${role}-${date}`}>
                    <div className="flex justify-between items-center mb-2">
                        <p className="text-lg font-medium">{role}</p>
                        <small className="text-muted-foreground">{date}</small>
                    </div>
                    {content}
                </div>
            ))}
        </section>
    );
};
