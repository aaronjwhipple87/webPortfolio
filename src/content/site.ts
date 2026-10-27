export const site = {
  name: "Aaron Whipple",
  title: "Aaron Whipple | Full-Stack Web Developer",
  tagline: "Full-Stack Web Development Portfolio",
  description:
    "Portfolio of Aaron Whipple, a full-stack software engineer specializing in React, Next.js, AWS, GraphQL and DynamoDB.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://aaronjwhipple.com",
  email: "aaronjwhipple@gmail.com",
  phone: { display: "(786) 229-2752", href: "tel:+17862292752" },
  resume: "/whipple_resume.pdf",
  jobTitle: "Software Engineer",
  socials: [
    { label: "GitHub", href: "https://github.com/aaronjwhipple87" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/aaronjwhipple" },
    { label: "Facebook", href: "https://www.facebook.com/ohhellwhipple" },
  ],
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
] as const;

export const primarySkills = [
  { name: "AWS", logo: "/img/brand/aws.svg.png", level: 93 },
  { name: "Next.js", logo: "/img/brand/nextjs.svg.png", level: 95 },
  { name: "React", logo: "/img/brand/react.svg", level: 90 },
  { name: "HTML5", logo: "/img/brand/html5.svg", level: 90 },
  { name: "CSS3", logo: "/img/brand/css3.svg", level: 85 },
] as const;

export const otherSkills = [
  { name: "JavaScript", logo: "/img/brand/js.png", ratio: 0.91 },
  { name: "Photoshop", logo: "/img/brand/photoshop.png", ratio: 1.02 },
  { name: "Illustrator", logo: "/img/brand/illustrator.png", ratio: 1.03 },
  { name: "Animate", logo: "/img/brand/animate.png", ratio: 1.03 },
  { name: "After Effects", logo: "/img/brand/afterEffects.png", ratio: 1.03 },
  { name: "InDesign", logo: "/img/brand/inDesign.png", ratio: 1.02 },
  { name: "Adobe XD", logo: "/img/brand/xd.png", ratio: 1.03 },
  { name: "C++", logo: "/img/brand/c++.png", ratio: 1.0 },
  { name: "Vue.js", logo: "/img/brand/vuejs.png", ratio: 1.15 },
  { name: "Google Web Designer", logo: "/img/brand/googleWeb.png", ratio: 1.0 },
  { name: "Sass", logo: "/img/brand/sass.png", ratio: 1.0 },
  { name: "Node.js", logo: "/img/brand/nodejs.png", ratio: 0.89 },
  { name: "MongoDB", logo: "/img/brand/mongoDB.png", ratio: 3.51 },
  { name: "Xcode", logo: "/img/brand/Xcode.png", ratio: 1.0 },
  { name: "Swift", logo: "/img/brand/swift.png", ratio: 1.0 },
  { name: "Python", logo: "/img/brand/python.png", ratio: 1.15 },
  { name: "Java", logo: "/img/brand/java.png", ratio: 0.53 },
  { name: "PHP", logo: "/img/brand/php.png", ratio: 1.0 },
  { name: "MySQL", logo: "/img/brand/mysql2.png", ratio: 1.0 },
  { name: "Tailwind CSS", logo: "/img/brand/tailwindcss.png", ratio: 2.89 },
  { name: "GraphQL", logo: "/img/brand/graphql.png", ratio: 3.53 },
] as const;

export const about = {
  intro:
    "Hi, my name is Aaron Whipple. I'm a software engineer specializing in React (Next.js), AWS, GraphQL, DynamoDB, S3, SNS and SES. My current hobbies are Web3 (blockchain) projects and CrossFit!",
  portrait: {
    src: "/img/blue-suit3.png",
    alt: "Aaron Whipple in a blue suit",
  },
  funFacts: [
    "I lived in Miami, FL for a decade",
    "Born and raised in sunny St. George, UT",
    "I hold a Level 2 CrossFit Trainer certificate",
    "I played collegiate football my first time in college",
    "My primary background is business",
    "I've owned and operated several online import businesses",
    "I dislike the cold but like the change of seasons",
  ],
  process: [
    {
      title: "Discuss and Plan",
      body: "Tell me all about your new or existing project along with what your expectations are.",
    },
    {
      title: "Research and Ideas",
      body: "Once we are on the same page, I'll research similar projects and the competition and come back with new ideas to set your company apart.",
    },
    {
      title: "Design and Approval",
      body: "With a more defined idea of what you're looking for, I'll create mockups from low to high fidelity, seeking approval along each step.",
    },
    {
      title: "Build and Launch",
      body: "Once the final high-fidelity mockup is approved, I'll build and launch your project and finalize any further adjustments you want.",
    },
  ],
} as const;
