import React from "react";

export default function Experience() {
    return (
        <div>
            <h1 className="text-4xl font-bold mb-6">Experience</h1>

            <section className="mb-8">
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-2xl font-semibold">Sivers Photonics</h2>
                    <small className="text-gray-600">July 2022 - Present</small>
                </div>
                <p className="text-lg font-medium mb-2">Software Engineer</p>
                <p className="text-gray-600 mb-4">
                    Developed full-stack CAD automation software for efficient design of advanced
                    DFB lasers.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>
                        Built the internal software for Sivers that now handles the majority of CAD
                        automation processes and yielding a notable reduction of over{" "}
                        <strong>50%</strong> in product design and creation timelines. This
                        enhancement has significantly improved operational efficiency and customer
                        satisfaction.
                    </li>
                    <li>Contributed to the development of advanced photonics technology.</li>
                    <li>
                        Utilized GitHub Actions to automate CI/CD workflows, enabling continuous
                        integration, deployment, and automated testing. This ensured consistent
                        quality checks, rapid feedback on code changes, and a reliable development
                        pipeline.
                    </li>
                </ul>
            </section>

            <section className="mb-8">
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-2xl font-semibold">GDSFactory</h2>
                    <small className="text-gray-600">February 2025 - Present</small>
                </div>
                <p className="text-lg font-medium mb-2">Software Engineer Intern</p>
                <p className="text-gray-600">Worked on open source GDSII manipulation software</p>
            </section>

            <section className="mb-8">
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-2xl font-semibold">JP Morgan</h2>
                    <small className="text-gray-600">July - September 2025</small>
                </div>
                <p className="text-lg font-medium mb-2">Software Engineer Intern</p>
                <p className="text-gray-600">Scheduled to begin a summer internship.</p>
            </section>

            <section className="mb-8">
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-2xl font-semibold">Glasgow University Software Service</h2>
                    <small className="text-gray-600">October 2024 - Present</small>
                </div>
                <p className="text-lg font-medium">Software Engineer</p>
            </section>

            <section className="mb-8">
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-2xl font-semibold">JP Morgan</h2>
                    <small className="text-gray-600">April 2024</small>
                </div>
                <p className="text-lg font-medium mb-2">Spring Insights Intern</p>
                <p className="text-gray-600">
                    Acquired knowledge in software engineering at JP Morgan through practical
                    workshops, expert panels, and networking.
                </p>
            </section>
        </div>
    );
}
