import { DollarSign, TrendingUp, Clock, BarChart3 } from "lucide-react"

export default function Benefits() {
  return (
    <section className="bg-teal-50 py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-teal-900 sm:text-4xl">
            Why Choose Maximize 1031?
          </h2>
          <p className="mb-10 text-lg text-gray-600">
            As your qualified intermediary, we ensure your exchange is handled properly from start to finish.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl bg-white p-6 shadow-md transition-all hover:shadow-lg">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-100">
              <DollarSign className="h-6 w-6 text-teal-700" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-teal-900">Tax Deferral</h3>
            <p className="text-gray-600">
              Our exchange process helps you defer capital gains taxes when properly executed according to IRS
              guidelines.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-md transition-all hover:shadow-lg">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-100">
              <TrendingUp className="h-6 w-6 text-teal-700" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-teal-900">Streamlined Process</h3>
            <p className="text-gray-600">
              Our exchange coordination minimizes paperwork and helps you navigate the identification period
              effectively.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-md transition-all hover:shadow-lg">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-100">
              <Clock className="h-6 w-6 text-teal-700" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-teal-900">Deadline Management</h3>
            <p className="text-gray-600">
              We track critical deadlines and provide timely reminders to help your exchange stay compliant with IRS
              timeframes.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-md transition-all hover:shadow-lg">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-teal-100">
              <BarChart3 className="h-6 w-6 text-teal-700" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-teal-900">Exchange Flexibility</h3>
            <p className="text-gray-600">
              We can facilitate various types of exchanges including delayed, reverse, improvement, and multi-property
              exchanges.
            </p>
          </div>
        </div>

        <div className="mt-16 overflow-hidden rounded-xl bg-white shadow-lg">
          <div className="grid md:grid-cols-2">
            <div className="bg-teal-800 p-8 text-white md:p-12">
              <h3 className="mb-4 text-2xl font-bold">The Financial Impact</h3>
              <p className="mb-6 text-teal-100">
                See how a 1031 exchange can potentially increase your investment power compared to a traditional sale.
              </p>

              <div className="space-y-4">
                <div className="rounded-lg bg-teal-700 p-4">
                  <h4 className="mb-2 font-semibold">Traditional Sale</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>Sale Price:</div>
                    <div className="text-right">$500,000</div>
                    <div>Original Purchase:</div>
                    <div className="text-right">$300,000</div>
                    <div>Capital Gains:</div>
                    <div className="text-right">$200,000</div>
                    <div>Taxes (20%):</div>
                    <div className="text-right">-$40,000</div>
                    <div className="font-semibold">Reinvestment Power:</div>
                    <div className="text-right font-semibold">$460,000</div>
                  </div>
                </div>

                <div className="rounded-lg bg-teal-600 p-4">
                  <h4 className="mb-2 font-semibold">With 1031 Exchange</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>Sale Price:</div>
                    <div className="text-right">$500,000</div>
                    <div>Original Purchase:</div>
                    <div className="text-right">$300,000</div>
                    <div>Capital Gains:</div>
                    <div className="text-right">$200,000</div>
                    <div>Taxes Deferred:</div>
                    <div className="text-right">$40,000</div>
                    <div className="font-semibold">Reinvestment Power:</div>
                    <div className="text-right font-semibold">$500,000</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <h3 className="mb-4 text-2xl font-bold text-teal-900">Our Exchange Services</h3>
              <p className="mb-6 text-gray-600">
                As your qualified intermediary, we provide essential services to facilitate your exchange.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-800">
                    ✓
                  </span>
                  <div>
                    <span className="font-semibold text-teal-900">Exchange Documentation:</span>
                    <p className="text-gray-600">
                      We prepare the required legal documents including exchange agreements and assignments.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <span className="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-800">
                    ✓
                  </span>
                  <div>
                    <span className="font-semibold text-teal-900">Secure Fund Handling:</span>
                    <p className="text-gray-600">
                      Your exchange proceeds are held in segregated, FDIC-insured accounts with detailed tracking.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <span className="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-800">
                    ✓
                  </span>
                  <div>
                    <span className="font-semibold text-teal-900">Closing Coordination:</span>
                    <p className="text-gray-600">
                      We work with your closing agents, attorneys, and other parties to facilitate the transactions.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <span className="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-800">
                    ✓
                  </span>
                  <div>
                    <span className="font-semibold text-teal-900">Compliance Guidance:</span>
                    <p className="text-gray-600">
                      We provide guidance on IRS requirements and deadlines to help your exchange stay compliant.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
