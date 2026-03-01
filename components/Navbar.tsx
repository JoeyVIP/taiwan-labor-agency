'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          z-index: 1000;
        }

        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.25rem 1.5rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        .logo {
          font-family: 'Oswald', sans-serif;
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--color-primary);
          letter-spacing: 0.05em;
        }

        .nav-links {
          display: none;
          gap: 2.5rem;
          list-style: none;
        }

        .nav-links li a {
          font-weight: 500;
          color: var(--color-text);
          position: relative;
          padding-bottom: 0.25rem;
        }

        .nav-links li a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--color-accent);
          transition: width 0.3s ease;
        }

        .nav-links li a:hover::after {
          width: 100%;
        }

        .hamburger {
          display: flex;
          flex-direction: column;
          gap: 0.375rem;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
        }

        .hamburger span {
          width: 1.75rem;
          height: 2px;
          background: var(--color-primary);
          transition: all 0.3s ease;
        }

        .hamburger.active span:nth-child(1) {
          transform: rotate(45deg) translate(0.5rem, 0.5rem);
        }

        .hamburger.active span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.active span:nth-child(3) {
          transform: rotate(-45deg) translate(0.5rem, -0.5rem);
        }

        .mobile-menu {
          position: fixed;
          top: 4.5rem;
          left: 0;
          right: 0;
          background: white;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transform: translateY(-100%);
          opacity: 0;
          transition: all 0.3s ease;
          pointer-events: none;
        }

        .mobile-menu.active {
          transform: translateY(0);
          opacity: 1;
          pointer-events: all;
        }

        .mobile-menu ul {
          list-style: none;
          padding: 1.5rem;
        }

        .mobile-menu li {
          border-bottom: 1px solid var(--color-border);
        }

        .mobile-menu li:last-child {
          border-bottom: none;
        }

        .mobile-menu a {
          display: block;
          padding: 1rem 0;
          font-weight: 500;
          color: var(--color-text);
        }

        @media (min-width: 768px) {
          .nav-links {
            display: flex;
          }

          .hamburger {
            display: none;
          }

          .navbar-container {
            padding: 1.25rem 3rem;
          }
        }
      `}</style>

      <nav className="navbar">
        <div className="navbar-container">
          <Link href="/" className="logo">
            南部人力仲介
          </Link>

          <ul className="nav-links">
            <li><Link href="/">首頁</Link></li>
            <li><Link href="/services">服務項目</Link></li>
            <li><Link href="/about">關於我們</Link></li>
            <li><Link href="/cases">成功案例</Link></li>
            <li><Link href="/contact">聯絡我們</Link></li>
          </ul>

          <button
            className={`hamburger ${isOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="選單"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
        <ul>
          <li><Link href="/" onClick={() => setIsOpen(false)}>首頁</Link></li>
          <li><Link href="/services" onClick={() => setIsOpen(false)}>服務項目</Link></li>
          <li><Link href="/about" onClick={() => setIsOpen(false)}>關於我們</Link></li>
          <li><Link href="/cases" onClick={() => setIsOpen(false)}>成功案例</Link></li>
          <li><Link href="/contact" onClick={() => setIsOpen(false)}>聯絡我們</Link></li>
        </ul>
      </div>
    </>
  )
}
