import Link from "next/link"
import { Mail, Phone, MapPin, ArrowLeft, ExternalLink } from "lucide-react"

export default function GetStarted() {
  return (
    <div className="container mx-auto px-4 py-16 md:px-6">
      <div className="mb-8">
        <Link href="/" className="inline-flex items-center text-teal-600 hover:text-teal-700">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </div>

      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-teal-900 sm:text-4xl">
            Get Started with Your 1031 Exchange
          </h1>
          <p className="text-lg text-gray-600">
            Fill out our exchange request form and our team will contact you to discuss your exchange needs.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-3">
            <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
              <h2 className="mb-6 text-2xl font-bold text-teal-900">Exchange Request Form</h2>

              <div className="rounded-lg border-2 border-dashed border-gray-200 bg-gray-50 p-8 text-center">
                <div className="mb-6">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100">
                    <ExternalLink className="h-8 w-8 text-teal-600" />
                  </div>
                  <h3 className="mb-2 text-lg font-medium text-gray-900">Complete Your Exchange Request</h3>
                  <p className="mb-6 text-gray-600">
                    Our secure form will open in a new window where you can provide your information to get started with
                    your 1031 exchange.
                  </p>
                </div>

                <a
                  href="https://maximize1031.cliogrow.com/intake/5713ce3d1d85aa2bf1f82f8d8451052e"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-teal-600 px-6 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                >
                  Open Exchange Request Form
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>

                <p className="mt-4 text-sm text-gray-500">
                  The form will open in a new tab so you can easily return to our website when finished.
                </p>
              </div>

              <div className="mt-6 text-sm text-gray-500">
                <p>
                  By submitting this form, you agree to our{" "}
                  <Link href="#" className="text-teal-600 hover:underline">
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="text-teal-600 hover:underline">
                    Terms of Service
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="rounded-xl bg-teal-50 p-8">
              <h2 className="mb-6 text-2xl font-bold text-teal-900">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-teal-100">
                    <Phone className="h-5 w-5 text-teal-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-teal-900">Phone</h3>
                    <p className="text-gray-600">(310) - 980 - 4902</p>
                    <p className="text-gray-600">Monday - Friday, 9am - 5pm PST</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-teal-100">
                    <Mail className="h-5 w-5 text-teal-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-teal-900">Email</h3>
                    <p className="text-gray-600">info@maximize1031.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-teal-100">
                    <MapPin className="h-5 w-5 text-teal-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-teal-900">Office</h3>
                    <p className="text-gray-600">2108 N ST STE N</p>
                    <p className="text-gray-600">Sacramento, CA 95816</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-3 text-lg font-semibold text-teal-900">What to Expect</h3>
                <p className="text-gray-600">
                  After submitting your information, one of our exchange specialists will contact you within 1 business
                  day to discuss your specific needs and guide you through the next steps of the exchange process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
