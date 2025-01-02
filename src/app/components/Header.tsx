'use client'
import Link from 'next/link'
import React from 'react'
import { useState } from "react"
import logo from '../../../Public/logo.png'
import Image from 'next/image'


export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
        <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="relative group"
          >
            <div className="absolute -inset-1  rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200" />
            <span className="relative text-2xl font-bold bg-clip-text text-transparent ">
              <Image src={logo} alt="logo" className="w-40" />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Team', 'Project', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="relative text-gray-300 hover:text-white transition-colors group py-2"
              >
                <span>{item}</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative group p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200" />
            <div className="relative flex flex-col justify-center items-center w-6 h-6">
              <span
                className={`w-full h-0.5 bg-white transform transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-white my-1 transition-all duration-300 ${
                  isOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-white transform transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col space-y-4 py-6">
            {['Home', 'About', 'Team', 'Project', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="relative text-gray-300 hover:text-white transition-colors group py-2 px-4"
                onClick={() => setIsOpen(false)}
              >
                <span className="relative z-10">{item}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
    </div>
  )
}
