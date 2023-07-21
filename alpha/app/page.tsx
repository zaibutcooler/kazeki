import AboutSection from "@/components/landing/AboutSection";
import ContactSupportSection from "@/components/landing/ContactSupportSection";
import LandingFooter from "@/components/landing/LandingFooter";
import LandingNavbar from "@/components/landing/LandingNavbar";
import FreelanceFeaturesSection from "@/components/landing/FreelanceFeaturesSection";
import JobSeekingSection from "@/components/landing/JobSeekingSection";
import RootSection from "@/components/landing/RootSection";

export default function LandingPage() {
  return (
    <main className="flex justify-center">
      <div className="container w-full md:w-[800px] lg:w-[1000px]">
        <LandingNavbar />
        <RootSection />
        <AboutSection />
        <JobSeekingSection />
        <FreelanceFeaturesSection />
        <ContactSupportSection />
        <LandingFooter />
      </div>
    </main>
  );
}
