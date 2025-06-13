import Image from "next/image";
import ServicesPage from "./Services/Page";
import AboutPage from "./About/Page";
import TeamPage from "./Team/Page";

export default function Home() {
  return (
  <>
  <ServicesPage/>
  <AboutPage/>
  <TeamPage/>
  </>
  );
}
