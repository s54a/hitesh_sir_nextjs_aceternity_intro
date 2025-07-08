import HeroSection from "@/components/HeroSection";
import { HomeGridBackground as GridBackground } from "@/components/GridBackground";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import MusicSchoolTestimonials from "@/components/MusicSchoolTestimonials";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";

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
      <Instructors />
      <Footer />
    </main>
  );
};
export default page;
