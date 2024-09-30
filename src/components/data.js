import coronaArabia from "../assets/corona-arabia-project.jpg";
import rickMorty from "../assets/rick-morty-project.jpg";
import shopCo from "../assets/shop-co-project.png";

const data = [
  {
    id: 1,
    projectImg: shopCo,
    projectAlt: "Shop Co Ecommerce app",
    projectTitle: "Shop Co Ecommerce",
    projectDescription:
      "An e-commerce platform for electronic products . Shop Co offers a comprehensive shopping experience with user authentication, product search, add-to-cart functionality, detailed product pages, and filtering options.",
    techStack:
      "Tech stack: React - TypeScript - Tailwind CSS - Redux Toolkit - Vite",
    linkLive: "https://shop-co-app.vercel.app/",
    linkGithub: "https://github.com/Sherifjrr/ecommerce-app/",
  },
  {
    id: 2,
    projectImg: rickMorty,
    projectAlt: "rick and morty app",
    projectTitle: "Rick and Morty Characters",
    projectDescription:
      "Search engine for the Rick and Morty cartoon show characters",
    techStack: "Tech stack: React Js – Tailwind CSS",
    linkLive: "https://rickandmortycharctersv2.netlify.app/",
    linkGithub: "https://github.com/Sherifjrr/rick-and-morty-characters-V2",
  },
  {
    id: 3,
    projectImg: coronaArabia,
    projectAlt: "Corona Arabia app",
    projectTitle: "Corona Arabia",
    projectDescription: "Corona numbers in Arabic countries with dynamic UI",
    techStack: "Tech Stack: JavaScript ES6+ - CSS(Sass) – HTML",
    linkLive: "https://coronarabia.netlify.app",
    linkGithub: "https://github.com/Sherifjrr/corona-arabia",
  },
];

export default data;
