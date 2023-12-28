import Banner from '@/components/Banner'
import Branding from '@/components/Branding'
import FAQ from '@/components/FAQ'
import FeatureListSection from '@/components/FeatureListSection'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Intro from '@/components/Intro'
import Reviews from '@/components/Reviews'
import Section from '@/components/Section'
import SolutionsSection from '@/components/SolutionsSection'

export default function Home() {
  return (

    <div>

      <Header />
      <Banner />
      {/* <Branding /> */}
      <Intro />
      <Section />
      <SolutionsSection />
      <FeatureListSection />
      <Reviews />
      <FAQ />
      <Footer />

    </div>
  )
}
