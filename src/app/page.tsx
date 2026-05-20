export default function Home() {
    return (
        <>
            <h1 className="text-4xl font-bold mb-2">
                About Me - Matthew McKee
            </h1>

            <div className="text-muted-foreground">
                <p className="mb-4">
                    Human Data Team Lead at xAI. Studying Computing Science and
                    Mathematics at The University of Glasgow. I enjoy writing
                    Rust and Python.
                </p>
                <p className="mb-4">
                    Some of the projects I have been working on are:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Karva, a Python test framework, written in Rust.</li>
                    <li>
                        Seal, an extremely fast release management tool, written
                        in Rust.
                    </li>
                    <li>ty, a Python type checker, written in Rust.</li>
                    <li>
                        GDSR, a tool for intuitive manipulation of GDSII files.
                    </li>
                </ul>
            </div>
        </>
    );
}
