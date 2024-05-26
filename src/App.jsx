import "./App.css";
import Services from "./Components/Features";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Testimonial from "./Components/Testimonials";

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Services/>
      <Testimonial/>
      <Footer/>
    </>
  );
}

export default App;
