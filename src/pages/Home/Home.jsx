import React from 'react'
import Navbar from '../../components/Navbar'
import HeroSection from '../../components/HeroSection'
import ClientsSection from '../../components/ClientsSection'
import FeaturesOverview from '../../components/FeaturesOverview'
import AboutSection from '../../components/AboutSection'
import SecuritySection from '../../components/SecuritySection'
import ComprehensiveFeatures from '../../components/ComprehensiveFeatures'
import Testimonials from '../../components/Testimonials'
import CTASection from '../../components/CTASection'
import Footer from '../../components/Footer'
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles.app}>
      <Navbar />
      <HeroSection />
      <ClientsSection />
      <FeaturesOverview />
      <AboutSection />
      <SecuritySection />
      <ComprehensiveFeatures />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  )
}
