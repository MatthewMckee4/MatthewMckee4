'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navigation = () => {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <nav className="max-w-3xl mx-auto px-4 py-6">
      <div className="flex gap-4">
        <Link 
          href="/" 
          className={`${isActive('/') ? 'text-blue-800 font-semibold' : 'text-blue-600'} hover:underline`}
        >
          About Me
        </Link>
        <Link 
          href="/experience" 
          className={`${isActive('/experience') ? 'text-blue-800 font-semibold' : 'text-blue-600'} hover:underline`}
        >
          Experience
        </Link>
        <Link 
          href="/education" 
          className={`${isActive('/education') ? 'text-blue-800 font-semibold' : 'text-blue-600'} hover:underline`}
        >
          Education
        </Link>
        <Link 
          href="/personal-work" 
          className={`${isActive('/personal-work') ? 'text-blue-800 font-semibold' : 'text-blue-600'} hover:underline`}
        >
          Personal Work
        </Link>
      </div>
    </nav>
  )
}

export default Navigation 