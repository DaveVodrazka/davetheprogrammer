import { BackgroundEffect } from "./components/BackgroundEffect";
import { Footer, Header, Section } from "./components/Layout";
import { AboutMe, Skills } from "./components/Sections";
import { Projects } from "./components/Sections/Projects";

const App = () => {
  return (
    <div className="relative h-dvh snap-y snap-mandatory overflow-y-scroll">
      <BackgroundEffect />
      <Header />
      <Section id="about-me" className="flex justify-center items-center">
        <AboutMe />
      </Section>
      <Section id="technologies" className="flex justify-center items-center">
        <Skills />
      </Section>
      <Section id="projects" className="flex justify-center items-center">
        <Projects />
      </Section>
      <Footer />
    </div>
  );
};

export default App;
