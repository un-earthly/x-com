import Banner from '@/components/Banner'
import Branding from '@/components/Branding'
import CreativeSection from '@/components/CreativeSection'
import FeatureListSection from '@/components/FeatureListSection'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Intro from '@/components/Intro'
import ReverseSection from '@/components/ReverseSection'
import Section from '@/components/Section'
import Image from 'next/image'

export default function Home() {
  return (

    <div>

      <Header />
      <Banner />
      <Branding />
      <Intro />
      {/* <CreativeSection /> */}
      <Section />
      <FeatureListSection />
      <Section />
      <Footer />

    </div>
  )
}
