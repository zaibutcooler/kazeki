import AboutSection from "@/components/landing/sections/AboutSection";
import ContactSupportSection from "@/components/landing/sections/ContactSupportSection";
import LandingFooter from "@/components/landing/sections/LandingFooter";
import LandingNavbar from "@/components/landing/sections/LandingNavbar";
import FreelanceFeaturesSection from "@/components/landing/sections/FreelanceFeaturesSection";
import HeroSection from "@/components/landing/sections/HeroSection";
import TapeSection from "@/components/landing/sections/TapeSection";

export default function LandingPage() {
  return (
    <main>
      <LandingNavbar />

      <section className="flex justify-center">
        <div className="container w-full md:w-[800px] lg:w-[1000px] px-2 md:px-4">
          <HeroSection />
        </div>
      </section>
      <TapeSection />
      <section className="flex justify-center">
        <div className="container w-full md:w-[800px] lg:w-[1000px] px-2 md:px-4">
          <AboutSection />
          {/* <JobSeekingSection /> */}
          <FreelanceFeaturesSection />
          <ContactSupportSection />
        </div>
      </section>
      <LandingFooter />
    </main>
  );
}
