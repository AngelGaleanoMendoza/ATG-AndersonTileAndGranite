import { siteContent } from "./site-content.js";
import { catalog } from "./catalog-data.js";
import { initCatalog } from "./catalog.js";
import { Header } from "./components/Header.js";
import { Hero } from "./components/Hero.js";
import { CatalogSearch } from "./components/CatalogSearch.js";
import { Portfolio } from "./components/Portfolio.js";
import { ProjectShowcase } from "./components/ProjectShowcase.js";
import { Testimonials } from "./components/Testimonials.js";
import { Philosophy } from "./components/Philosophy.js";
import { Founder } from "./components/Founder.js";
import { Process } from "./components/Process.js";
import { ContactBand } from "./components/ContactBand.js";
import { Footer } from "./components/Footer.js";

const App = () => `
  ${Header(siteContent.navigation)}
  <main>
    ${Hero(siteContent.hero, catalog.categories)}
    ${CatalogSearch({ ...siteContent.catalogSearch, categories: catalog.categories, total: catalog.items.length })}
    ${ProjectShowcase(siteContent.showcase)}
    ${Portfolio(siteContent.portfolio, catalog)}
    ${Testimonials(siteContent.testimonials)}
    ${Philosophy(siteContent.philosophy)}
    ${Founder(siteContent.founder)}
    ${Process(siteContent.process)}
    ${ContactBand(siteContent.contact)}
  </main>
  ${Footer(siteContent.footer)}
`;

document.querySelector("#app").innerHTML = App();
initCatalog(catalog);
