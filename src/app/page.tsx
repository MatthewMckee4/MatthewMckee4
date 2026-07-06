export default function Home() {
    return (
        <>
            <h1 className="text-4xl font-bold mb-2">
                About Me - Matthew McKee
            </h1>

            <div className="text-muted-foreground">
                <p className="mb-4">
                    Member of Technical Staff on the coding team at micro1,
                    working on human data for frontier AI models.
                </p>
                <p className="mb-4">
                    Some of the projects I have been working on are:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Karva, a Python test framework, written in Rust.</li>
                    <li>ty, a Python type checker, written in Rust.</li>
                </ul>
            </div>
        </>
    );
}
