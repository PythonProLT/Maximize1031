import Link from "next/link"
import { Building } from "lucide-react"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-teal-100 bg-white/95 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-teal-600 text-white">
            <Building className="h-6 w-6" />
          </div>
          <span className="text-xl font-bold text-teal-900">Maximize 1031</span>
        </Link>

        <nav className="hidden md:flex">
          <ul className="flex items-center gap-6">
            <li>
              <Link href="#about" className="text-sm font-medium text-gray-600 hover:text-teal-700">
                About
              </Link>
            </li>
            <li>
              <Link href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-teal-700">
                How It Works
              </Link>
            </li>
            <li>
              <Link href="#faq" className="text-sm font-medium text-gray-600 hover:text-teal-700">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-sm font-medium text-gray-600 hover:text-teal-700">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/get-started"
            className="hidden rounded-md bg-teal-600 px-4 py-2 text-sm font-medium text-white hover:bg-teal-700 md:inline-flex"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  )
}
