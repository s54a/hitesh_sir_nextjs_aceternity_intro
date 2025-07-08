import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";

const page = () => {
  return (
    <main className="bg-grid-white/[0.02] min-h-screen bg-black/[0.96] antialiased">
      <HeroSection />
      <FeaturedCourses />
    </main>
  );
};
export default page;
