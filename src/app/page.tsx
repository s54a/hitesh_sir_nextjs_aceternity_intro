import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import MusicSchoolTestimonials from "@/components/MusicSchoolTestimonials";
import { HomeGridBackground as GridBackground } from "@/components/GridBackground";
import UpcomingWebinars from "@/components/UpcomingWebinars";

const page = () => {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased">
      <GridBackground>
        <HeroSection />
      </GridBackground>
      <FeaturedCourses />
      <WhyChooseUs />
      <MusicSchoolTestimonials />
      <UpcomingWebinars />
    </main>
  );
};
export default page;
