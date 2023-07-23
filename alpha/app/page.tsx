import AboutSection from "@/components/landing/sections/AboutSection";
import ContactSupportSection from "@/components/landing/sections/ContactSupportSection";
import LandingFooter from "@/components/landing/sections/LandingFooter";
import LandingNavbar from "@/components/landing/sections/LandingNavbar";
import FreelanceFeaturesSection from "@/components/landing/sections/FreelanceFeaturesSection";
import JobSeekingSection from "@/components/landing/sections/JobSeekingSection";
import HeroSection from "@/components/landing/sections/HeroSection";

export default function LandingPage() {
  return (
    <main className="flex justify-center">
      <div className="container w-full md:w-[800px] lg:w-[1000px]">
        <LandingNavbar />
        <HeroSection />
        <AboutSection />
        <JobSeekingSection />
        <FreelanceFeaturesSection />
        <ContactSupportSection />
        <LandingFooter />
      </div>
    </main>
  );
}
