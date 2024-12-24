import React, { useEffect } from "react";
import "./App.css";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Service from "./components/service/service";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            // Update URL without refreshing the page
            window.history.pushState(null, "", `#${sectionId}`);
          }
        });
      },
      { threshold: 0.6 } // Trigger when 60% of the section is visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      // Cleanup observer
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="app">
      {/* Homepage Section */}
      <section id="Homepage" className="section" aria-label="Homepage Section">
        <Navbar />
        <Hero />
      </section>

      {/* Services Section */}
      <section id="Services" className="section" aria-label="Services Section">
        <Service type="services" />
      </section>

      {/* Portfolio Section */}
      <section id="Portfolio" className="section" aria-label="Portfolio Section">
        <Service type="portfolio" />
        <Portfolio/>
      </section>
      <Portfolio/>
      {/* Contact Section */}
      <section id="Contact" className="section" aria-label="Contact Section">
        <Contact/>
      </section>
 {/* About Section
      <section id="About" className="about" aria-label="Contact Section">
        <h1>About us</h1>
      </section> */}
    </div>
  );
}

export default App;
