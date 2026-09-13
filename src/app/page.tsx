import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Work from "./components/Work";
import Services from "./components/Services";
import Candidate from "./components/Candidate";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Marquee />
      <Work />
      <Services />
      <Candidate />
      <Footer />
    </main>
  );
}
