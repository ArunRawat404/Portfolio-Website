import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
// import Clients from './sections/Clients';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

const App = () => {
  return (
    <main className="mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      {/* <Clients /> */}
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}

export default App;