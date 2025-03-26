"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const jobs = [
    {
        date: "July 2022 - Present",
        title: "Software Engineer",
        company: "Sivers Photonics",
    },
    {
        date: "February 2025 - Present",
        title: "Software Engineer",
        company: "gdsfactory",
    },
];

export default function Timeline() {
    const [selectedJob, setSelectedJob] = useState<number | null>(null);

    return (
        <div className="flex flex-col items-center p-8">
            <h1 className="text-2xl font-bold mb-6">Work Experience</h1>
            <div className="relative w-full max-w-lg">
                <div className="absolute left-1/2 h-full w-1 bg-gray-300 transform -translate-x-1/2"></div>
                {jobs.map((job, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedJob(index)}
                        className="relative flex items-center mb-6 cursor-pointer"
                    >
                        <div className="w-4 h-4 bg-blue-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                        <div className="ml-8 bg-white shadow-md p-4 rounded-lg">
                            <p className="text-lg font-semibold">
                                {job.company}
                            </p>
                            <p className="text-sm text-gray-600">{job.title}</p>
                            <p className="text-sm text-gray-500">{job.date}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
            {selectedJob !== null && (
                <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold">
                        {jobs[selectedJob].company}
                    </h2>
                    <p className="text-lg">{jobs[selectedJob].title}</p>
                    <p className="text-gray-600">{jobs[selectedJob].date}</p>
                </div>
            )}
        </div>
    );
}
