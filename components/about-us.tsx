import { Building, Shield, FileText, Scale } from "lucide-react"

export default function AboutUs() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-teal-900 sm:text-4xl">About Maximize 1031</h2>
          <p className="mb-10 text-lg text-gray-600">
            I am a qualified intermediary service specializing in facilitating 1031 exchanges to help property owners
            defer capital gains taxes.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-teal-50 p-6 text-center shadow-sm transition-all hover:shadow-md">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-100">
              <Building className="h-6 w-6 text-teal-700" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-teal-900">Qualified Intermediary</h3>
            <p className="text-gray-600">
              We act as the neutral third party required by IRS regulations to facilitate your 1031 exchange.
            </p>
          </div>

          <div className="rounded-lg bg-teal-50 p-6 text-center shadow-sm transition-all hover:shadow-md">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-100">
              <FileText className="h-6 w-6 text-teal-700" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-teal-900">Documentation Experts</h3>
            <p className="text-gray-600">
              We prepare all necessary exchange documents to ensure your transaction meets IRS requirements.
            </p>
          </div>

          <div className="rounded-lg bg-teal-50 p-6 text-center shadow-sm transition-all hover:shadow-md">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-100">
              <Scale className="h-6 w-6 text-teal-700" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-teal-900">Regulatory Compliance</h3>
            <p className="text-gray-600">
              We stay current with IRS regulations to ensure your exchange follows all required guidelines and
              timelines.
            </p>
          </div>

          <div className="rounded-lg bg-teal-50 p-6 text-center shadow-sm transition-all hover:shadow-md">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-100">
              <Shield className="h-6 w-6 text-teal-700" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-teal-900">Secure Escrow Services</h3>
            <p className="text-gray-600">
              Your exchange funds are held in segregated, FDIC-insured accounts with detailed tracking and reporting.
            </p>
          </div>
        </div>

        <div className="mt-16 rounded-xl bg-teal-900 p-8 text-white md:p-12">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-2xl font-bold">Our Mission</h3>
              <p className="text-teal-100">
                At Maximize 1031, our mission is to provide secure, compliant, and efficient 1031 exchange services that
                help our clients preserve wealth and achieve their investment goals through tax-deferred exchanges.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-2xl font-bold">Our Values</h3>
              <ul className="space-y-2 text-teal-100">
                <li className="flex items-start">
                  <span className="mr-2 text-teal-300">•</span>
                  <span>Integrity in every transaction</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-teal-300">•</span>
                  <span>Transparency throughout the process</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-teal-300">•</span>
                  <span>Education to empower our clients</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-teal-300">•</span>
                  <span>Excellence in service and results</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
