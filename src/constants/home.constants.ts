import { Linkedin, Github } from "lucide-react";

export const skills = [
  { name: "UI/UX Design", icon: "✏️" },
  { name: "React & TypeScript", icon: "⚛️" },
  { name: "Design Systems", icon: "🎨" },
  { name: "Figma & Prototyping", icon: "🎭" },
  { name: "Tailwind CSS", icon: "🎯" },
  { name: "User Research", icon: "🔍" },
];

export const projects = [
  {
    id: 1,
    title: "HMI Monitoring Interface",
    description:
      "A real-time monitoring kiosk designed to bridge industrial PLC data with a clean, functional user interface.",
    tags: ["React", "C#", "MQTT"],
    bgColor: "from-orange-100 to-amber-100",
    initials: "HM",
    details: {
      year: "2025 - Current",
      role: "Full-Stack Developer",
      challenge:
        "Designed an intuitive HMI kiosk UI for small screens, connecting real-time PLC data to a streamlined monitoring interface.",
      solution:
        "Utilized reusable components for visual consistency and implemented tabs and dropdowns to organize complex data without cluttering the interface.",
      results: [
        "Improved data readability on small displays",
        "Seamless real-time PLC synchronization",
        "Simplified navigation for industrial operators",
      ],
      technologies: ["React", "TypeScript", "C#", "MQTT", "Windows Services"],
      link: "#",
    },
  },
  {
    id: 2,
    title: "Coffee Leaf Disease Detector",
    description:
      "A mobile application for detecting diseases in Excelsa and Robusta coffee leaves using computer vision.",
    tags: ["React Native", "FastAPI", "Python", "YOLOv10", "Docker", "AWS EC2"],
    bgColor: "from-green-100 to-emerald-100 dark:from-green-900 dark:to-emerald-900",
    initials: "CD",
    details: {
      year: "2024",
      role: "Developer",
      challenge:
        "Develop an accessible mobile solution to accurately identify diseases in coffee plants and provide real-time results.",
      solution:
        "Built a React Native Expo app connected to a Python FastAPI backend, utilizing a YOLOv10 model for high-precision leaf analysis.",
      results: [
        "Real-time disease detection in the field",
        "Optimized inference via FastAPI",
        "Scalable deployment using Docker on AWS EC2",
      ],
      technologies: ["React Native", "FastAPI", "Python", "YOLOv10", "Docker", "AWS EC2"],
      link: "#",
    },
  },
  {
    id: 3,
    title: "IoT Smart Parking System",
    description:
      "A real-time parking management solution that tracks slot availability using IoT sensors and a web-based dashboard.",
    tags: ["React", "Express.js", "Node.js", "ESP32", "C++", "REST API"],
    bgColor: "from-purple-100 to-indigo-100 dark:from-purple-900 dark:to-indigo-900",
    initials: "PS",
    details: {
      year: "2024",
      role: "Full-Stack Developer",
      challenge:
        "Develop a system to monitor parking occupancy in real-time and provide users with instant availability updates.",
      solution:
        "Integrated ESP32 microcontrollers with ultrasonic sensors to detect vehicle presence, transmitting data via an Express API to a live React dashboard.",
      results: [
        "Real-time synchronization across devices",
        "Simplified remote monitoring for administrators",
        "Scalable deployment on cloud-based servers",
      ],
      technologies: ["React", "Express.js", "Node.js", "ESP32", "C++", "REST API"],
      link: "#",
    },
  },
  {
    id: 4,
    title: "Academic Project Showcase",
    description:
      "A high-performance landing page built to present academic research with a focus on modern UI and smooth interactions.",
    tags: ["Next.js", "Framer Motion", "Shadcn UI"],
    bgColor: "from-rose-100 to-pink-100 dark:from-rose-900 dark:to-pink-900",
    initials: "AP",
    details: {
      year: "2023",
      role: "Frontend Developer",
      challenge:
        "Create a professional digital presence for academic work that balances dense information with an engaging, modern aesthetic.",
      solution:
        "Developed using Next.js and Shadcn UI for a polished component library, utilizing Framer Motion to create subtle, purposeful animations.",
      results: [
        "Received satisfactory marks for design and functionality",
        "Optimized Core Web Vitals",
        "Highly responsive layout across all devices",
      ],
      technologies: ["Next.js", "TypeScript", "Framer Motion", "Shadcn UI", "Tailwind CSS"],
      link: "#",
    },
  },
];

export const experiences = [
  {
    id: 1,
    company: "Bakers' Fair",
    position: "Software Engineer",
    duration: "2025 - Present",
    type: "Full-time",
    description: "Developed a web-based HMI system using React and C# ASP.NET",
    highlights: [
      "Integrated the system with PLC-controlled manufacturing machines to digitally read and write their statuses",
      "Built and deployed Windows Services to run MQTT brokers",
      "Designed interfaces for the HMI",
    ],
    technologies: ["React", "TypeScript", "C#", "Windows Services"],
    color: "from-orange-500 to-yellow-500",
  },
  {
    id: 2,
    company: "Codebility",
    position: "Frontend Developer",
    duration: "2024 - 2025",
    type: "Internship",
    description:
      "Built a web-based financial tracker using Next.js, ensuring efficient state management and a clean layout for personal finances.",
    highlights: [
      "Designed charts and tables for better visualization",
      "Used Supabase for authentication and database",
    ],
    technologies: ["Next.js", "Node.js", "Supabase"],
    color: "from-violet-500 to-blue-500",
  },
];

export const socials = [
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/jl-centeno" },
  { name: "GitHub", icon: Github, url: "https://github.com/ajcent" },
];
