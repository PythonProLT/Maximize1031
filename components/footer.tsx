import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-teal-900 text-white">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-bold">Maximize 1031</h3>
            <p className="mb-4 text-teal-100">
              A qualified intermediary service specializing in 1031 exchanges. We help property owners defer taxes and build wealth through compliant exchanges.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-teal-300">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-teal-300">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-teal-300">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-teal-300">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-teal-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-teal-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="hover:text-teal-300">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-teal-300">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-teal-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-teal-300">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-teal-300">
                  Delayed Exchanges
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-teal-300">
                  Reverse Exchanges
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-teal-300">
                  Improvement Exchanges
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-teal-300">
                  Multi-Property Exchanges
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-teal-300">
                  DST/TIC Investments
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-teal-300">
                  Exchange Documentation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold">Newsletter</h3>
            <p className="mb-4 text-teal-100">
              Subscribe to our newsletter for the latest updates on 1031 exchanges, tax law changes, and investment opportunities.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full rounded-l-md border-0 bg-teal-800 px-4 py-2 text-white placeholder-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-300"
              />
              <button className="rounded-r-md bg-teal-600 px-4 py-2 hover:bg-teal-500">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Subscribe</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-teal-800 pt-8">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="text-sm text-teal-300">
              © {new Date().getFullYear()} Maximize 1031. All rights reserved.
            </div>
            <div className="flex space-x-4 text-sm text-teal-300 md:justify-end">
              <Link href="#" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-white">
                Cookie Policy
              </Link>
            </div>
          </div>
          <div className="mt-4 text-xs text-teal-400">
            <p>
              Maximize 1031 is not a tax advisor. This material has been prepared for informational purposes only, and is not intended to provide, and should not be relied on for, tax, legal, or accounting advice. Consult your own tax, legal, and accounting advisors before engaging in any transaction.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
