import Header from "@/components/header"
import Hero from "@/components/hero"
import AboutUs from "@/components/about-us"
import HowItWorks from "@/components/how-it-works"
import Benefits from "@/components/benefits"
import ContactSection from "@/components/contact-section"
import Faq from "@/components/faq"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <Benefits />
        <AboutUs />
        <HowItWorks />
        <Faq />
        <ContactSection />
        <Footer />
      </main>
    </>
  )
}
