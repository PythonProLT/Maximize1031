"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, inquiryType: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible.",
    })

    setIsSubmitting(false)
    setFormData({
      name: "",
      email: "",
      phone: "",
      inquiryType: "",
      message: "",
    })
  }

  return (
    <section id="contact" className="bg-white py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-teal-900 sm:text-4xl">Contact Us</h2>
          <p className="mb-10 text-lg text-gray-600">
            Ready to start your exchange? Our team of exchange specialists is here to help.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <div className="rounded-xl bg-teal-50 p-8">
              <h3 className="mb-6 text-2xl font-bold text-teal-900">Get In Touch</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-teal-100">
                    <Phone className="h-5 w-5 text-teal-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-teal-900">Phone</h4>
                    <p className="text-gray-600">(800) 555-1031</p>
                    <p className="text-gray-600">Monday - Friday, 9am - 5pm EST</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-teal-100">
                    <Mail className="h-5 w-5 text-teal-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-teal-900">Email</h4>
                    <p className="text-gray-600">exchanges@maximize1031.com</p>
                    <p className="text-gray-600">support@maximize1031.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-teal-100">
                    <MapPin className="h-5 w-5 text-teal-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-teal-900">Office</h4>
                    <p className="text-gray-600">123 Financial District</p>
                    <p className="text-gray-600">New York, NY 10004</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-lg bg-teal-800 p-6 text-white">
                <h4 className="mb-3 text-xl font-semibold">Schedule a Consultation</h4>
                <p className="mb-4 text-teal-100">
                  Book a free 30-minute consultation with one of our exchange specialists to discuss your specific situation.
                </p>
                <Button className="w-full bg-white text-teal-800 hover:bg-teal-100">Book Appointment</Button>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="rounded-xl border border-gray-200 p-8 shadow-sm">
              <h3 className="mb-6 text-2xl font-bold text-teal-900">Send Us a Message</h3>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="inquiryType">Inquiry Type</Label>
                  <Select value={formData.inquiryType} onValueChange={handleSelectChange}>
                    <SelectTrigger id="inquiryType">
                      <SelectValue placeholder="Select an inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">New Exchange</SelectItem>
                      <SelectItem value="active">Active Exchange</SelectItem>
                      <SelectItem value="question">General Question</SelectItem>
                      <SelectItem value="fee">Fee Quote</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-teal-700 hover:bg-teal-800" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
