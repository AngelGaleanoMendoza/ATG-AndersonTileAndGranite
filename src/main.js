import { siteContent } from "./site-content.js";
import { Header } from "./components/Header.js";
import { Hero } from "./components/Hero.js";
import { ProjectShowcase } from "./components/ProjectShowcase.js";
import { Testimonials } from "./components/Testimonials.js";
import { Process } from "./components/Process.js";
import { ContactBand } from "./components/ContactBand.js";
import { Footer } from "./components/Footer.js";

const App = () => `
  ${Header(siteContent.navigation)}
  <main>
    ${Hero(siteContent.hero)}
    ${ProjectShowcase(siteContent.showcase)}
    ${Testimonials(siteContent.testimonials)}
    ${Process(siteContent.process)}
    ${ContactBand(siteContent.contact)}
  </main>
  ${Footer(siteContent.footer)}
`;

document.querySelector("#app").innerHTML = App();
