import React from 'react'

export default function PersonalWork() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">Personal Work</h1>

      <section className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-2xl font-semibold">GDSR</h2>
          <small className="text-gray-600">Aug 2024 - Present</small>
        </div>
        <p className="text-gray-600 mb-2">Created a GDSII manipulation python package written in Rust</p>
        <a 
          href="https://github.com/MatthewMckee4/gdsr" 
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </section>

      <section className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-2xl font-semibold">ReviewIt</h2>
          <small className="text-gray-600">Aug 2023 - Dec 2023</small>
        </div>
        <p className="text-gray-600 mb-2">Developed a MERN stack Music Rating website that interacts with Spotify API</p>
        <div className="space-x-4">
          <a 
            href="https://github.com/MatthewMckee4/Music-Rating-Frontend" 
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Frontend
          </a>
          <a 
            href="https://github.com/MatthewMckee4/Music-Rating-Backend" 
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Backend
          </a>
        </div>
      </section>

      <section>
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-2xl font-semibold">Open Source Contributions</h2>
          <small className="text-gray-600">Nov 2023 - Present</small>
        </div>
        <p className="text-gray-600 mb-4">Over 3000 contributions in the past year</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <a 
              href="https://github.com/astral-sh/ruff" 
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ruff
            </a> (Contributor)
          </li>
          <li>
            <a 
              href="https://github.com/gdsfactory/kfactory" 
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              KFactory
            </a> (Maintainer)
          </li>
          <li>
            <a 
              href="https://github.com/gdsfactory/gdsfactory" 
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GDSFactory
            </a> (Maintainer)
          </li>
          <li>Python Typing (Contributor)</li>
        </ul>
      </section>
    </div>
  )
} 