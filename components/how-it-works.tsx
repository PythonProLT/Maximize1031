import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-teal-900 sm:text-4xl">
            How Our Exchange Process Works
          </h2>
          <p className="mb-10 text-lg text-gray-600">
            Maximize 1031 handles the key steps of your exchange to help ensure compliance with IRS regulations.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-teal-200 md:left-1/2 md:-ml-0.5"></div>

          {/* Step 1 */}
          <div className="relative mb-16">
            <div className="md:flex md:items-center">
              <div className="mb-6 flex md:mb-0 md:w-1/2">
                <div className="relative z-10 mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-teal-600 text-white md:absolute md:right-0 md:mr-0 md:translate-x-1/2">
                  <span className="text-lg font-bold">1</span>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-md md:mr-8">
                  <h3 className="mb-2 text-xl font-bold text-teal-900">Exchange Planning</h3>
                  <p className="text-gray-600">
                    Contact us before listing your investment property. We'll discuss your exchange strategy and prepare
                    the necessary documentation.
                  </p>
                </div>
              </div>
              <div className="hidden md:block md:w-1/2"></div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative mb-16">
            <div className="md:flex md:items-center">
              <div className="hidden md:block md:w-1/2"></div>
              <div className="mb-6 flex md:mb-0 md:w-1/2">
                <div className="relative z-10 mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-teal-600 text-white md:absolute md:left-0 md:mr-0 md:-translate-x-1/2">
                  <span className="text-lg font-bold">2</span>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-md md:ml-8">
                  <h3 className="mb-2 text-xl font-bold text-teal-900">Exchange Agreement</h3>
                  <p className="text-gray-600">
                    We prepare your exchange agreement and assignment documents before your closing date.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative mb-16">
            <div className="md:flex md:items-center">
              <div className="mb-6 flex md:mb-0 md:w-1/2">
                <div className="relative z-10 mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-teal-600 text-white md:absolute md:right-0 md:mr-0 md:translate-x-1/2">
                  <span className="text-lg font-bold">3</span>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-md md:mr-8">
                  <h3 className="mb-2 text-xl font-bold text-teal-900">Property Sale</h3>
                  <p className="text-gray-600">
                    We coordinate with your closing agent. Sale proceeds come directly to our secure escrow accounts,
                    never passing through your hands to maintain tax-deferred status.
                  </p>
                </div>
              </div>
              <div className="hidden md:block md:w-1/2"></div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="relative mb-16">
            <div className="md:flex md:items-center">
              <div className="hidden md:block md:w-1/2"></div>
              <div className="mb-6 flex md:mb-0 md:w-1/2">
                <div className="relative z-10 mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-teal-600 text-white md:absolute md:left-0 md:mr-0 md:-translate-x-1/2">
                  <span className="text-lg font-bold">4</span>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-md md:ml-8">
                  <h3 className="mb-2 text-xl font-bold text-teal-900">Property Identification</h3>
                  <p className="text-gray-600">
                    Within 45 days, you identify potential replacement properties using one of the IRS identification
                    rules (3-property, 200%, or 95% rule). We provide the proper identification forms.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="relative">
            <div className="md:flex md:items-center">
              <div className="mb-6 flex md:mb-0 md:w-1/2">
                <div className="relative z-10 mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-teal-600 text-white md:absolute md:right-0 md:mr-0 md:translate-x-1/2">
                  <span className="text-lg font-bold">5</span>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-md md:mr-8">
                  <h3 className="mb-2 text-xl font-bold text-teal-900">Exchange Completion</h3>
                  <p className="text-gray-600">
                    We transfer your exchange funds to purchase your replacement property within the 180-day exchange
                    period. Any funds not used toward the purchase may be subject to capital gains tax.
                  </p>
                </div>
              </div>
              <div className="hidden md:block md:w-1/2"></div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link href="/get-started">
            <Button className="bg-teal-700 hover:bg-teal-800" size="lg">
              Start Your Exchange
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
