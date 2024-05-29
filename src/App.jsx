import "./App.css";
import Services from "./Components/Features";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import LoginSignup from "./Components/Signup";
import Navbar from "./Components/Navbar";
import Testimonial from "./Components/Testimonials";
import LoginPage from "./Components/LoginPage";

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Services/>
      <Testimonial/>
      <Footer/>
      <LoginSignup/>
      <LoginPage/>
    </>
  );
}

export default App;
