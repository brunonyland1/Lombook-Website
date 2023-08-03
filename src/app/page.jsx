import About from "./components/About";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Subscribe from "./components/Subscribe";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Articles />
      <Subscribe />
      <Footer />
    </main>
  );
}
