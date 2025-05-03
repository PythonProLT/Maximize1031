"use client"

import type React from "react"
import Link from "next/link"
import { useState } from "react"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"

export default function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyDetails: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Information Submitted",
      description: "A Maximize 1031 representative will contact you shortly.",
    })

    setIsSubmitting(false)
    setFormData({
      name: "",
      email: "",
      phone: "",
      propertyDetails: "",
    })
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-teal-50 to-white py-20 md:py-32">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-teal-900 sm:text-5xl md:text-6xl">
                Your Trusted 1031 Exchange Service
              </h1>
              <p className="text-xl text-gray-600">
                Maximize 1031 is a qualified intermediary that helps you defer taxes and reinvest more of your equity
                when selling investment property.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-teal-600" />
                <span className="text-gray-700">We handle your entire 1031 exchange process</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-teal-600" />
                <span className="text-gray-700">Secure escrow services for your proceeds</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-teal-600" />
                <span className="text-gray-700">IRS-compliant documentation and timelines</span>
              </div>
            </div>

            <div className="pt-4">
              <Link href="/get-started">
                <Button className="group bg-teal-700 text-lg hover:bg-teal-800" size="lg">
                  Start Your Exchange
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
