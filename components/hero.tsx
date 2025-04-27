"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
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
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
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
              <Button className="group bg-teal-700 text-lg hover:bg-teal-800" size="lg">
                Start Your Exchange
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Card className="w-full max-w-md border-teal-100 shadow-lg">
              <CardContent className="p-6">
                <div className="mb-6 text-center">
                  <h2 className="text-2xl font-bold text-teal-900">Begin Your 1031 Exchange</h2>
                  <p className="text-gray-600">
                    Fill out the form below and our exchange coordinators will contact you
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="propertyDetails">Property Details</Label>
                    <Textarea
                      id="propertyDetails"
                      name="propertyDetails"
                      placeholder="Tell us about the property you're selling and your timeline"
                      value={formData.propertyDetails}
                      onChange={handleChange}
                      rows={3}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-teal-700 hover:bg-teal-800"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Information"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
