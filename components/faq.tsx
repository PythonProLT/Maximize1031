"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Faq() {
  const [openItem, setOpenItem] = useState<string | null>("item-1")

  const faqs = [
    {
      id: "item-1",
      question: "What is Maximize 1031?",
      answer:
        "Maximize 1031 is a qualified intermediary service that facilitates 1031 exchanges. We act as the independent third party required by IRS regulations to hold exchange funds and help ensure compliance with exchange requirements.",
    },
    {
      id: "item-2",
      question: "What are the timeframes for completing an exchange?",
      answer:
        "IRS regulations require that you identify potential replacement properties within 45 days of selling your property. You must then complete the purchase of one or more of these properties within 180 days of the sale. We provide deadline tracking throughout the process.",
    },
    {
      id: "item-3",
      question: "What types of properties qualify for a 1031 exchange?",
      answer:
        "Properties held for investment or business purposes qualify for 1031 exchanges. This includes rental properties, commercial real estate, land, and certain business assets. Your primary residence does not qualify for a 1031 exchange. Vacation homes have special rules and may qualify only if they've been primarily held as rental properties.",
    },
    {
      id: "item-4",
      question: "How are exchange funds protected?",
      answer:
        "We hold exchange funds in segregated accounts at established financial institutions. We maintain detailed tracking of your funds and provide regular statements for transparency and security. Ask about the specific financial institutions we work with and their insurance coverage for your exchange funds.",
    },
    {
      id: "item-5",
      question: "What happens if I don't use all my exchange funds?",
      answer:
        "Any exchange funds not used to acquire replacement property will be returned to you at the end of the exchange period. This unused portion, known as 'boot,' will be subject to capital gains tax. Boot can also include mortgage relief or other non-like-kind property received in the exchange. We can discuss strategies to minimize or eliminate boot when possible.",
    },
    {
      id: "item-6",
      question: "How much does a 1031 exchange service cost?",
      answer:
        "Our exchange service includes documentation preparation, fund handling, and coordination services throughout your 180-day exchange period. We offer transparent pricing with no hidden fees. Contact us for a specific quote based on your exchange needs.",
    },
    {
      id: "item-7",
      question: "What are the rules for identifying replacement properties?",
      answer:
        "The IRS provides three rules for identifying replacement properties: 1) Three-Property Rule: Identify up to three properties of any value. 2) 200% Rule: Identify any number of properties as long as their total value doesn't exceed 200% of the sold property's value. 3) 95% Rule: Identify any number of properties of any value, but you must acquire properties totaling at least 95% of the total value of all identified properties.",
    },
    {
      id: "item-8",
      question: "Are state taxes also deferred in a 1031 exchange?",
      answer:
        "While federal capital gains taxes are deferred in a properly executed 1031 exchange, state tax treatment varies. Many states follow federal rules and allow deferral, but some states have their own requirements or may not recognize 1031 exchanges. We recommend consulting with a tax professional about your specific state tax situation.",
    },
  ]

  return (
    <section id="faq" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-teal-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mb-10 text-lg text-gray-600">
            Get answers to common questions about 1031 exchanges and our services.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion
            type="single"
            collapsible
            value={openItem || undefined}
            onValueChange={(value) => setOpenItem(value)}
          >
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="border-b border-teal-100">
                <AccordionTrigger className="py-4 text-left text-lg font-semibold text-teal-900 hover:text-teal-700">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-4 pt-1 text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="mb-6 text-gray-600">
            Have more questions? We're here to help with your 1031 exchange questions.
          </p>
          <Button className="bg-teal-700 hover:bg-teal-800">Contact Us</Button>
        </div>
      </div>
    </section>
  )
}
