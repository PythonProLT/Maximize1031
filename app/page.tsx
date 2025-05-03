import Header from "@/components/header"
import Hero from "@/components/hero"
import Benefits from "@/components/benefits"
import WhatIs1031 from "@/components/what-is-1031"
import AboutUs from "@/components/about-us"
import HowItWorks from "@/components/how-it-works"
import Faq from "@/components/faq"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <Benefits />
        <WhatIs1031 />
        <AboutUs />
        <HowItWorks />
        <Faq />
        <ContactSection />
        <Footer />
      </main>
    </>
  )
}
