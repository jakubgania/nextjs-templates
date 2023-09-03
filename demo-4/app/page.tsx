import TopSection from "./top-section"
import DescriptionSection from "./description-section"
import InformationSection from "./information-section"
import ContactSection from "./contact-section"
import ExperienceSection from "./experience-section"
import TechnologiesSection from "./technologies-section"
import ProjectsSection from "./projects-section"
import LinksSection from "./links-section"
// import HobbiesSection from "./hobbies-section"
import HobbiesSectionV2 from "./hobbies-section-v2"
import GallerySection from "./gallery-section"
import SocialMediaSection from "./social-media-section"
import Footer from "./footer"

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto p-4 sm:p-3 md:p-2 font-mono">
      <TopSection />
      <DescriptionSection />
      <InformationSection />
      <ContactSection />
      <ExperienceSection />
      <TechnologiesSection />
      <ProjectsSection />
      <LinksSection />
      {/* <HobbiesSection /> */}
      <HobbiesSectionV2 />
      <GallerySection />
      <SocialMediaSection />
      <Footer />
    </main>
  )
}
