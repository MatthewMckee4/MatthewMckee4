export default function Home() {
    return (
        <>
            <h1 className="text-4xl font-bold  mb-2">About Me - Matthew McKee</h1>

            <div className="space-y-6 text-gray-600">
                <p>
                    I am currently in my 3rd year at Glasgow University studying Computing Science
                    and Mathematics.
                </p>

                <p>
                    I am a Software Engineer at Sivers Photonics, working on an in-house software. I
                    am also a Software Engineer at GDSFactory, working on open and closed source
                    software. I am also a Software Engineer at the University of Glasgow for GUSS,
                    currently not working on a project.
                </p>

                <div>
                    <p className="mb-4">
                        In my free time, I enjoy working on Python packages, including:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Ruff, a tool for linting and formatting Python code.</li>
                        <li>GDSR, a tool for intuitive manipulation of GDSII files.</li>
                    </ul>
                </div>
            </div>
        </>
    );
}
