import Navbar from "./components/navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Home />
        <About />
        <Projects />
        <Certificates />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;