import Image from "next/image";
import ServicesPage from "./Services/Page";
import AboutPage from "./About/Page";
import TeamPage from "./Team/Page";
import TestimonialPage from "./Testimonial/Page";

export default function Home() {
  return (
  <div className="w-full h-auto overflow-hidden">
  <ServicesPage/>
  <AboutPage/>
  <TeamPage/>
  <TestimonialPage/>
  </div>
  );
}
