import { FiMessageSquare } from "react-icons/fi";
import { GiFlatPlatform } from "react-icons/gi";
import { HiTemplate } from "react-icons/hi";
import { MdOnlinePrediction } from "react-icons/md";
import { FaHandshakeAngle } from "react-icons/fa6";
import { SiGoogleanalytics } from "react-icons/si";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "Paul Terner",
    company: "Tech Innovations Ltd.",
    image: user1,
    text: "I am highly impressed with the professionalism and dedication of the team. Their innovative solutions have significantly contributed to the success of our project.",
  },
  {
    user: "Emma Wilson",
    company: "Digital Frontier Solutions",
    image: user2,
    text: "Working with this team has been a pleasure. Their commitment to excellence and problem-solving skills have exceeded our expectations.",
  },
  {
    user: "Andrew Brown",
    company: "NextGen Technologies",
    image: user3,
    text: "I am extremely satisfied with the services provided. The team's attention to detail and ability to deliver results beyond our expectations have been remarkable.",
  },
  {
    user: "Max Smith",
    company: "InnovateX",
    image: user4,
    text: "It's been a game-changer working with this company. Their dedication and innovative approach have helped us achieve our goals faster than we anticipated.",
  },
  {
    user: "John Davis",
    company: "CodeCrafters Inc.",
    image: user5,
    text: "The professionalism and expertise demonstrated by the team are commendable. They have consistently delivered outstanding results and exceeded our expectations.",
  },
  {
    user: "Sophie Miller",
    company: "ByteSprint Technologies",
    image: user6,
    text: "I am impressed by the team's commitment to excellence. Their proactive approach and dedication to our project's success have been invaluable.",
  },
];


export const features = [
  {
    icon: FiMessageSquare,
    text: "Intuitive Interface",
    description:
      "Effortlessly craft and organize your projects with an easy-to-use drag-and-drop interface.",
  },
  {
    icon: GiFlatPlatform,
    text: "Cross-Platform Support",
    description:
      "Develop applications that work seamlessly across multiple devices, including mobile, desktop, and web.",
  },
  {
    icon: HiTemplate,
    text: "Ready-Made Templates",
    description:
      "Kickstart your projects with a variety of built-in templates tailored for different needs and industries.",
  },
  {
    icon: MdOnlinePrediction,
    text: "Live Preview",
    description:
      "Instantly see changes as you make them, enabling quick iterations and real-time feedback.",
  },
  {
    icon: FaHandshakeAngle,
    text: "Team Collaboration",
    description:
      "Collaborate with your team in real-time, enhancing productivity and idea sharing.",
  },
  {
    icon: SiGoogleanalytics,
    text: "Insightful Analytics",
    description:
      "Track user interactions and behaviors with a comprehensive analytics dashboard to drive informed decisions.",
  },
];

export const checklistItems = [
  {
    title: "Effortless Code Merging",
    description:
      "Seamlessly merge your code changes with our intuitive version control system.",
  },
  {
    title: "Code Review Simplified",
    description:
      "Effortlessly review and collaborate on code changes with our integrated code review tools.",
  },
  {
    title: "AI-Powered Assistance",
    description:
      "Leverage AI algorithms to automate repetitive tasks and speed up your development process.",
  },
  {
    title: "Instant Work Sharing",
    description:
      "Share your work instantly with team members, enabling seamless collaboration and faster progress.",
  },
];


export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];