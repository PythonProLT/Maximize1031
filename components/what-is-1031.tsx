import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WhatIs1031() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-teal-900 sm:text-4xl">What is a 1031 Exchange?</h2>
          <p className="mb-10 text-lg text-gray-600">
            Understanding the basics of a 1031 exchange is the first step to making informed decisions about your
            investment property.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-xl bg-teal-50 p-8 shadow-md">
            <h3 className="mb-4 text-2xl font-bold text-teal-900">The Basics</h3>
            <p className="mb-4 text-gray-700">
              A 1031 exchange, named after Section 1031 of the Internal Revenue Code, allows investors to defer capital
              gains taxes when selling an investment property and purchasing a similar "like-kind" property.
            </p>
            <p className="mb-4 text-gray-700">
              <strong>Important:</strong> Only properties held for investment or business purposes qualify. Your primary
              residence does not qualify for a 1031 exchange.
            </p>
            <p className="text-gray-700">
              This tax strategy helps investors preserve more of their equity for reinvestment, potentially building
              greater wealth over time through continued property exchanges.
            </p>
          </div>

          <div className="rounded-xl bg-teal-50 p-8 shadow-md">
            <h3 className="mb-4 text-2xl font-bold text-teal-900">How It Works</h3>
            <p className="mb-4 text-gray-700">
              When selling your investment property, instead of receiving the proceeds directly, the funds are held by a
              qualified intermediary (like Maximize 1031) until you're ready to purchase your replacement property.
            </p>
            <p className="mb-4 text-gray-700">
              This temporary "storage" of your sale proceeds is crucial - if you receive the funds personally, the
              exchange will be disqualified and taxes will be due immediately.
            </p>
            <p className="text-gray-700">
              The IRS requires that you identify potential replacement properties within 45 days and complete the
              purchase within 180 days of selling your original property.
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-xl bg-teal-800 p-8 text-center text-white md:p-12">
          <h3 className="mb-4 text-2xl font-bold">Key Benefits of a 1031 Exchange</h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-teal-700 p-6">
              <h4 className="mb-2 text-xl font-semibold">Tax Deferral</h4>
              <p className="text-teal-100">
                Defer federal capital gains taxes, which can range from 15-20%, plus the potential 3.8% Net Investment
                Income Tax, allowing you to reinvest what would have been paid in taxes.
              </p>
            </div>
            <div className="rounded-lg bg-teal-700 p-6">
              <h4 className="mb-2 text-xl font-semibold">Wealth Building</h4>
              <p className="text-teal-100">
                Use the full proceeds from your property sale to purchase a more valuable property, potentially
                increasing your returns and building wealth over time.
              </p>
            </div>
            <div className="rounded-lg bg-teal-700 p-6">
              <h4 className="mb-2 text-xl font-semibold">Portfolio Diversification</h4>
              <p className="text-teal-100">
                Exchange one property for multiple properties or vice versa to better diversify or consolidate your
                investments based on your financial goals.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <Button className="bg-white text-teal-800 hover:bg-teal-100" size="lg">
              Learn More About Our Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
