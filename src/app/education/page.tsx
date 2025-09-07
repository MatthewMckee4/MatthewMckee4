import DatedTitle from "@/components/DatedTitle";
import React from "react";

export default function Education() {
    return (
        <div>
            <h1 className="text-4xl font-bold mb-6">Education</h1>

            <section className="mb-8">
                <DatedTitle title="University of Glasgow" date="2022 - 2026" />

                <p className="text-lg font-medium mb-4">
                    Bachelors of Science, Computing Science and Mathematics
                </p>

                <div>
                    <CourseList
                        title="4th Year courses"
                        courses={[
                            "Advanced Systems Programming",
                            "Programming Languages",
                            "Functional Programming",
                            "Software Engineering Release Practices",
                            "Differential Geometry",
                            "Galois Theory",
                            "Topics in Algebra",
                            "Algebraic & Geometric Topology",
                            "Individual Project: Creating a tool for reporting possible typing unsoundness in Python",
                        ]}
                    />
                </div>
                <CourseList
                    title="3rd Year courses"
                    courses={[
                        "Systems Programming",
                        "Database Systems",
                        "Networked Systems",
                        "Data Fundamentals",
                        "Professional Software Development",
                        "Algebra",
                        "Complex Analysis",
                        "Metric Spaces and Basic Topology",
                        "Analysis of Differentiation and Integration",
                    ]}
                />
            </section>
            <br />
            <section className="mb-8">
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-2xl font-semibold">Jordanhill School</h2>
                    <small className="text-muted-foreground">2016 - 2022</small>
                </div>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>AAAB at Advanced Higher</li>
                    <li>AAAAA at Higher</li>
                </ul>
            </section>
        </div>
    );
}

interface CourseListProps {
    title: string;
    courses: string[];
}

const CourseList = ({ title, courses }: CourseListProps) => {
    return (
        <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                {courses.map((course, index) => (
                    <li key={index}>{course}</li>
                ))}
            </ul>
        </div>
    );
};
