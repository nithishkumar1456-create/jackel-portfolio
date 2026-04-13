import HeroImage from "/assets/hero-new.jpeg";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools13 from "/assets/tools/firebase.png";
import Tools14 from "/assets/tools/html.png";
import Tools15 from "/assets/tools/css.png";
import Tools17 from "/assets/tools/php.png";
import Tools19 from "/assets/tools/mysql.png";

// New Tool Icons
import DjangoIcon from "/assets/tools/icons8-django-50.png";
import FlaskIcon from "/assets/tools/icons8-flask-64.png";
import SupabaseIcon from "/assets/tools/icons8-supabase-48.png";
import RedisIcon from "/assets/tools/icons8-redis-80.png";
import MongoDBIcon from "/assets/tools/icons8-mongodb-24.png";
import KaliIcon from "/assets/tools/icons8-kali-linux-100.png";
import RestAPIIcon from "/assets/tools/icons8-rest-api-80.png";

// Additional Tool Icons
import AIIcon from "/assets/tools/ai.png";
import BootstrapIcon from "/assets/tools/bootstrap.png";
import FigmaIcon from "/assets/tools/figma.png";
import LinuxIcon from "/assets/tools/icons8-linux-48.png";
import ViteIcon from "/assets/tools/vite.png";
import FramerIcon from "/assets/tools/icons8-framer-24.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools7,
    nama: "Node.js",
    ket: "Backend Runtime",
    dad: "100",
  },
  {
    id: 2,
    gambar: DjangoIcon,
    nama: "Django",
    ket: "Python Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: FlaskIcon,
    nama: "Flask",
    ket: "Python Microframework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools19,
    nama: "MySQL",
    ket: "Database",
    dad: "400",
  },
  {
    id: 5,
    gambar: SupabaseIcon,
    nama: "Supabase",
    ket: "Backend as a Service",
    dad: "500",
  },
  {
    id: 6,
    gambar: MongoDBIcon,
    nama: "MongoDB",
    ket: "NoSQL Database",
    dad: "600",
  },
  {
    id: 7,
    gambar: RedisIcon,
    nama: "Redis",
    ket: "Caching & Pub/Sub",
    dad: "700",
  },
  {
    id: 8,
    gambar: RestAPIIcon,
    nama: "REST APIs",
    ket: "System Architecture",
    dad: "800",
  },
  {
    id: 9,
    gambar: KaliIcon,
    nama: "Kali Linux",
    ket: "Cybersecurity",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools8,
    nama: "GitHub",
    ket: "Version Control",
    dad: "1000",
  },
  {
    id: 11,
    gambar: ViteIcon,
    nama: "Vite",
    ket: "Build Tool",
    dad: "1100",
  },
  {
    id: 12,
    gambar: FigmaIcon,
    nama: "Figma",
    ket: "Design Tool",
    dad: "1200",
  },
  {
    id: 13,
    gambar: BootstrapIcon,
    nama: "Bootstrap",
    ket: "CSS Framework",
    dad: "1300",
  },
  {
    id: 14,
    gambar: LinuxIcon,
    nama: "Linux",
    ket: "Operating System",
    dad: "1400",
  },
  {
    id: 15,
    gambar: AIIcon,
    nama: "AI Tools",
    ket: "Productivity",
    dad: "1500",
  },
];

import Proyek1 from "/assets/proyek/HoneyBadger POS System architecture poster.png";
import Proyek2 from "/assets/proyek/Asset Harmony backend system poster.png";
import Proyek3 from "/assets/proyek/Premium security at your fingertips.png";
import Proyek4 from "/assets/proyek/Reindeer app_ healthy meals and tech.png";
import Proyek5 from "/assets/proyek/ChatGPT Image Apr 8, 2026, 11_39_24 AM.png";
import Proyek6 from "/assets/proyek/Addax platform_ chemical safety insights.png";

export const listProyek = [
  {
    id: 1,
    image: Proyek1,
    title: "HoneyBadger POS System",
    subtitle: "Scalable backend system for POS operations...",
    fullDescription: "A scalable backend system for POS operations handling inventory, billing, and real-time transactions. Built with Django, MySQL, and Supabase, it features real-time stock updates and a secure authentication system, all containerized with Docker for seamless deployment.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/nithishkumar1456-create/honeybadger.com",
    dad: "100",
  },
  {
    id: 2,
    image: Proyek2,
    title: "Asset Harmony Backend",
    subtitle: "Backend system for asset management...",
    fullDescription: "A robust backend system for asset management featuring subscription-based workflows and Razorpay payment integration. Leveraging Django, MySQL, and Supabase, this project ensures secure and efficient tracking of organizational assets.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/nithishkumar1456-create/asset-harmony-backend",
    dad: "200",
  },
  {
    id: 3,
    image: Proyek3,
    title: "Hedgehog.com",
    subtitle: "Full-stack web application with multi-database architecture...",
    fullDescription: "A full-stack web application that integrates multiple databases (MongoDB Atlas, MySQL) and utilizes Redis for caching to ensure high performance. The project demonstrates a containerized approach to modern web architecture.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/nithishkumar1456-create/hedgehog.com",
    dad: "300",
  },
  {
    id: 4,
    image: Proyek4,
    title: "Reindeer Full Stack",
    subtitle: "Frontend-backend integration focusing on scalable design...",
    fullDescription: "A full-stack application that focuses on the seamless integration between React frontend and Django/Node.js backend. It highlights secure API designs and scalable system architecture.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/nithishkumar1456-create/reindeer-full-stack",
    dad: "400",
  },
    {
    id: 5,
    image: Proyek5,
    title: "Raccoon Prototype",
    subtitle: "Experimental backend architecture for scalable APIs...",
    fullDescription: "An experimental backend architecture prototype focusing on modular design and scalable API structures. It serves as a blueprint for high-concurrency systems and microservices.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/nithishkumar1456-create/Raccoon_prototype",
    dad: "500",
  },
  {
    id: 6,
    image: Proyek6,
    title: "Addax.com",
    subtitle: "Foundational web application for backend integration...",
    fullDescription: "A foundational web application demonstrating core web development principles and efficient backend integration. It serves as a showcase for building clean, maintainable, and responsive web solutions.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/nithishkumar1456-create/addax.com",
    dad: "600",
  },
];
