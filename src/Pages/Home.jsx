import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Menu from "../components/Menu/Menu";
import FeaturedItems from "../components/FeaturedItems/featuredItems";
import Reviews from "../components/Reviews/Reviews";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <FeaturedItems />
      <Menu />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;