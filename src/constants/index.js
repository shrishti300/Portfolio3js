import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  kickdrum,
  daostruct,
  myequation,
  sih,
  sdh,
  ibe,
  eks
} from "../assets";
import Portfolio from "../assets/Portfolioimg.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Data Structures Algorithm",
    icon: backend,
  },
  {
    title: "Competetive programmer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "kickdrum",
    icon: kickdrum,
    iconBg: "#383E56",
    date: "currently working",
    points: [
      "Worked on many different kinds of mini-project like stock market management, Highlights etc",
      "Developed a feature-rich Hotel Booking System using Vite-React, Material UI, and Bootstrap for the frontend, combined with Java and Spring Boot for backend functionalities and AWS cloud services",
      " Leveraged AWS services, including EC2, Elastic Beanstalk, Cloudfront, API Gateway, DynamoDB, S3, SES,SNS, Lambda etc. for architecture deployment, data storage, emails and serverless computing.",
       "Skilled in Docker utilization, developing CI/CD pipelines, and employing orchestration tools like Kubernetes",]
  },
  {
    title: "Product Lead and Frontend Intern",
    company_name: "DAOStruct",
    icon: daostruct,
    iconBg: "#383E56",
    date: "Jan 2023 -  Sep 2023",
    points: [
      "Handled the technical side of the product and researched on DAOs and web APIs",
      "Experience developing fully responsive frontend that seamlessly adapt across different browsers ",
      "TechStack: React.JS, TailwindCSS, JavaScript, Restful API, MaterialUI GIT, JIRA, Jest, React testing library",
    ],
  },
  {
    title: "Software Developer",
    company_name: "MyEquation",
    icon: myequation,
    iconBg: "#E6DEDD",
    date: "July 2021 - September 2021",
    points: [
      "Worked on TechAnalogy website and local packages such as emailing package",
      "TechStack - React.js, TypeScript, TailwindCSS, Express.js,Node.js ",
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Hotel Booking system ",
    description:
      "Developed a feature-rich Hotel Booking System, with functionality such as locate hotels nearby, live cab booking, email functionality for ratings and promotions ",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "AWS",
        color: "green-text-gradient",
      },
      {
        name: "CSS/SASS",
        color: "pink-text-gradient",
      },
      {
        name: "Cypress",
        color: "blue-text-gradient",
      },
      {
        name: "Material UI",
        color: "green-text-gradient",
      },
    ],
    image: ibe,
    source_code_link: "https://github.com/shrishti300/IBE-FRONTEND/",
  },
  {
    name: "Three-Tier Architecture for application deployment on EKS ",
    description:
      "Implemented end-to-end DevOps integration for a web application, leveraging Terraform for infrastructure provisioning, Docker for containerization",
    tags: [
      {
        name: "Docker",
        color: "blue-text-gradient",
      },
      {
        name: "Jenkins and ArgoCD",
        color: "green-text-gradient",
      },
      {
        name: "AWS",
        color: "pink-text-gradient",
      },
      {
        name: "Kubernetes",
        color: "blue-text-gradient",
      },
      {
        name: "Prometheus / Grafana",
        color: "green-text-gradient",
      },
    ],
    image: eks,
    source_code_link: "https://github.com/shrishti300/assignment-eks-new/",
  },
  {
    name: "Event Management portal",
    description:
      "Web-based platform that allows users to organize, book venue and send invitation through one platform .",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Graphql",
        color: "blue-text-gradient",
      },
      {
      name: "AWS",
      color: "green-text-gradient",
    },
    ],
    image: sih,
    source_code_link: "https://github.com/Team-Envision-Alpha/SW-I17-Frontend",
  },
  {
    name: "Moving vehicle number plate detection",
    description:
      "Web application that enables users to get information of a moving vehicle by scanning through their camerase ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: sdh,
    source_code_link: "https://github.com/shrishti300/Code_reapers/tree/master",
  },
  {
    name: "Portfolio Website Using three.js ",
    description:
      "My portfolio website using three.js, tailwindCSS and React.js. It has information about my work experience and projects ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "Material UI",
        color: "green-text-gradient",
      },
    ],
    image: Portfolio,
    source_code_link: "https://github.com/shrishti300/Portfolio3js",
  },
  
];

export { services, technologies, experiences, testimonials, projects };