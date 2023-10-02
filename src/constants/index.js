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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  angular,
  django,
  postgresql,
  next,
  c,
  gpt,
  numpy,
  pandas,
  tensorflow,
  opencv,
  bash,
  python,
  docker,
  java,
} from "../assets";
import icc from "../assets/images/icc.jpg";
import sass from "../assets/tech/sass.png";
import fastchat from "../assets/images/FastChat.png";
import imdb from "../assets/images/Imdb.jpg";
import newsweb from "../assets/images/NewsWebApp.png";
import natours from "../assets/images/Natours.png";
import vaidya from "../assets/images/Vaidya.jpeg";
import jobbie from "../assets/images/Jobbie.jpg";
import crux from "../assets/images/cruxlabs_logo.jpg";
import mapit from "../assets/images/mapit_ai_logo.jpg";

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
    title: "Machine Learning & Deep Learning",
    icon: web,
  },
  {
    title: "Full Stack Development",
    icon: mobile,
  },
  {
    title: "Programming",
    icon: backend,
  },
  {
    title: "Large Language Models",
    icon: creator,
  },
];

const technologies = [
  { name: "C++", icon: c },
  { name: "Java", icon: java },
  // { name: "Python", icon: python },
  { name: "NumPy", icon: numpy },
  { name: "Pandas", icon: pandas },
  { name: "TensorFlow", icon: tensorflow },
  { name: "GPT-3.5 & GPT-4", icon: gpt },
  { name: "OpenCV", icon: opencv },
  // { name: "Docker", icon: docker },
  // { name: "Git", icon: git },
  // {
  //   name: "JavaScript",
  //   icon: javascript,
  // },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Sass",
  //   icon: sass,
  // },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Next JS",
    icon: next,
  },
];

const experiences = [
  {
    title: "React FrontEnd Developer",
    company_name: "LightStone Technologies, ITC",
    icon: mapit,
    iconBg: "#fff",
    // iconBg: "#383E56",
    date: "Sept 2023 - Present",
    points: [
      "Learnt and practiced agile development practices and design thinking, Indoor positioning systems and their utility.",
      "Improved and added features to company’s website from scratch using React.JS, Django, PostgreSQL.",
      "Used React framework on client side with help of MUI to view the data fetched from backend through axios.",
      "Implemented Redux for Global State management, Firebase for authentication and React Router for routing.",
      "Integrated with third party Map displaying server, Leaflet for managing all the floor plans and beacons present.",
    ],
  },

  {
    title: "Web Convener",
    company_name: "Institute Cultural Council, IITB",
    icon: icc,
    iconBg: "#fff",
    // iconBg: "#E6DEDD",
    date: "April 2022 - April 2023",
    points: [
      "Designing the pages of 13 ICC clubs along with ICC websites such as Profile Portals, Athena with Client",
      "using HTML,CSS,JS and managing backend using Node.js and Express.js, which is used by whole IIT Bombay.",
      "Setting up a MongoDB - NoSQL database to store information such as Club Events and User Information.",
      "Working with council of 18 to organise large scale Cultural Events at IIT Bombay,more than 5000 people.",
    ],
  },
  {
    title: "Founding Engineer",
    company_name: "Crux",
    icon: crux,
    iconBg: "#282828",
    date: "Dec 2022 - Jan 2023",
    points: [
      "Learnt and practiced agile development practices and design thinking, Indoor positioning systems and their utility.",
      "Improved and added features to company’s website from scratch using React.JS, Django, PostgreSQL.",
      "Used React framework on client side with help of MUI to view the data fetched from backend through axios.",
      "Implemented Redux for Global State management, Firebase for authentication and React Router for routing.",
      "Integrated with third party Map displaying server, Leaflet for managing all the floor plans and beacons present.",
    ],
  },
];

const projects = [
  {
    name: "Jobbie",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
    ],
    image: jobbie,
    source_code_link: "https://github.com/ravindramohith/Jobbie-jobsPortal",
  },
  {
    name: "Operation Vaidya",
    description:
      "A mobile app, developed using React Native with Expo and Android Studio. It allows logged-in users to book appointments, view their appointment history, and access advanced features such as generating prescriptions and estimating waiting periods. The app is designed responsively using Flexbox and incorporates Redux Toolkit for state management",
    tags: [
      {
        name: "ReactNative",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "ExpressJS",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: vaidya,
    source_code_link: "https://github.com/Ravindra-Mohith/Vaidya-app",
  },
  {
    name: "News Web Application",
    description:
      "A web app, developed using Angular framework which provides a responsive interface for displaying news. It utilizes the newsapi.org API to extract data and uses RxJS Observables to subscribe to the data in the service. Each component receives data through dependency injection from the service, enabling the display of relevant information. The app incorporates URL paths for seamless navigation between pages using Angular router.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
    ],
    image: newsweb,
    source_code_link: "https://github.com/ravindramohith/Angular-news-web-app",
  },
  {
    name: "IMDB API Clone",
    description:
      "An API clone that can fetch comprehensive information about movies. This API should allow users to add and delete movie reviews, as well as rate movies. Ultimately, the API will provide statistics and data about the movies",
    tags: [
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
    ],
    image: imdb,
    source_code_link: "https://github.com/ravindramohith/IMDB-API_clone",
  },
  {
    name: "FastChat",
    description:
      "A terminal app, developed using Python Socket Programming and enables real-time encrypted communication between clients. It supports end-to-end encryption using RSA and allows clients to connect through IP addresses. The app includes a group chat feature with an admin who can add or remove participants. Users can send messages and images in both private and group chats, all of which are encrypted. The app also incorporates login and signup functionality, storing user information in a PostgreSQL database, and implements server load balancing.",
    tags: [
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "SocketProgramming",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
    ],
    image: fastchat,
    source_code_link: "https://github.com/Ravindra-Mohith/FastChat",
  },
  {
    name: "Natours API",
    description:
      "An API, built using Node.js and the Express framework, serving as the server-side. It enables CRUD operations on a database through REST APIs. The API uses Mongoose to connect to the database and create schemas for user, tour, and review models, with data stored in MongoDB. Advanced features such as JWT authorization and granting access to admin-specific functionalities are implemented. The API also supports additional functionalities like sorting, pagination, filtering, and limiting fields through query parameters.",
    tags: [
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "ExpressJS",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: natours,
    source_code_link: "https://github.com/ravindramohith/Natours-server",
  },
];

export { services, technologies, experiences, projects };
