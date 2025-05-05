import React from 'react'

export default function Education() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">Education</h1>

      <section className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-2xl font-semibold">University of Glasgow</h2>
          <small className="text-gray-600">2022 – 2026</small>
        </div>
        <p className="text-lg font-medium mb-4">Bachelors of Science, Computing Science and Mathematics</p>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">3rd Year courses</h3>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li>Systems Programming</li>
            <li>Database Systems</li>
            <li>Networked Systems</li>
            <li>Data Fundamentals</li>
            <li>Professional Software Development</li>
            <li>Algebra</li>
            <li>Complex Analysis</li>
            <li>Metric Spaces and Basic Topology</li>
            <li>Analysis of Differentiation and Integration</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">4th Year courses</h3>
          <p className="text-gray-600">To be updated</p>
        </div>
      </section>

      <section className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-2xl font-semibold">Jordanhill School</h2>
          <small className="text-gray-600">2016 - 2022</small>
        </div>
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>AAAB at Advanced Higher</li>
          <li>AAAAA at Higher</li>
        </ul>
      </section>
    </div>
  )
} 