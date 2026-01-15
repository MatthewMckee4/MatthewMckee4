export default function Home() {
    return (
        <>
            <h1 className="text-4xl font-bold  mb-2">About Me - Matthew McKee</h1>

            <div className="space-y-6 text-muted-foreground">
                <p>
                    I am currently in my 4th year at Glasgow University studying Computing Science
                    and Mathematics.
                </p>

                <p>I am a Software Engineer at Sivers Photonics, working on in-house software.</p>

                <div>
                    <p className="mb-4">In my free time, I enjoy writing Rust and Python.</p>
                    <p className="mb-4">Some of the projects I have been working on are:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Karva, a Python test framework, written in Rust.</li>
                        <li>Seal, an extremely fast release management tool, written in Rust.</li>
                        <li>ty, a Python type checker, written in Rust.</li>
                        <li>GDSR, a tool for intuitive manipulation of GDSII files.</li>
                    </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                    <h2 className="text-2xl font-bold mb-4">Resume</h2>
                    <p className="mb-4">
                        My resume is available below. It is updated frequently and concisely
                        reflects my skills and experience.
                    </p>
                    <a
                        href="/assets/resume.pdf"
                        download="Matthew_Mckee_Resume.pdf"
                        className="inline-flex items-center px-4 py-2 bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground rounded-md transition-colors text-sm font-medium"
                    >
                        <svg
                            className="w-4 h-4 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                        </svg>
                        Resume
                    </a>
                </div>
            </div>
        </>
    );
}
