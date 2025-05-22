
import { Job, Company } from "@/types/job";

export const sampleCompanies: Company[] = [
  {
    id: "1",
    name: "TechFlow",
    logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center",
    tagline: "Building the future of work",
    description: "TechFlow is a leading technology company focused on creating innovative solutions that transform how people work and collaborate. We're passionate about building products that make a real difference in people's lives.",
    location: "San Francisco, CA",
    size: "500-1000 employees",
    industry: "Technology",
    founded: "2015",
    website: "https://techflow.com",
    values: [
      "Innovation and creativity",
      "Collaboration and teamwork",
      "Customer-centric approach",
      "Continuous learning"
    ],
    benefits: [
      "Competitive salary and equity",
      "Health, dental, and vision insurance",
      "Flexible work arrangements",
      "Professional development budget",
      "Unlimited PTO",
      "Team retreats and events"
    ]
  },
  {
    id: "2",
    name: "DataVision",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center",
    tagline: "Data-driven insights for everyone",
    description: "DataVision specializes in making complex data accessible and actionable for businesses of all sizes. Our platform empowers teams to make better decisions through beautiful, intuitive data visualization.",
    location: "Austin, TX",
    size: "100-500 employees",
    industry: "Data Analytics",
    founded: "2018",
    website: "https://datavision.com",
    values: [
      "Data transparency",
      "User-first design",
      "Scalable solutions",
      "Ethical AI practices"
    ],
    benefits: [
      "Stock options",
      "Remote work options",
      "Learning stipend",
      "Health benefits",
      "Flexible hours",
      "Gym membership"
    ]
  },
  {
    id: "3",
    name: "GreenTech Solutions",
    logo: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100&h=100&fit=crop&crop=center",
    tagline: "Sustainable technology for a better world",
    description: "GreenTech Solutions is committed to developing environmentally sustainable technology solutions. We work with businesses to reduce their carbon footprint while improving efficiency and profitability.",
    location: "Seattle, WA",
    size: "50-100 employees",
    industry: "Clean Technology",
    founded: "2020",
    website: "https://greentech.com",
    values: [
      "Environmental responsibility",
      "Innovation for good",
      "Transparency",
      "Community impact"
    ],
    benefits: [
      "Mission-driven work",
      "Flexible PTO",
      "Remote work",
      "Professional development",
      "Health benefits",
      "Commuter benefits"
    ]
  }
];

export const sampleJobs: Job[] = [
  {
    id: "1",
    title: "Senior Software Engineer",
    company: "TechFlow",
    companyId: "1",
    companyLogo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$140,000 - $180,000",
    description: "We're looking for a Senior Software Engineer to join our core platform team. You'll be responsible for designing and implementing scalable backend services that power our application used by millions of users worldwide.",
    skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
    postedAt: "2024-01-15T10:00:00Z"
  },
  {
    id: "2",
    title: "Product Designer",
    company: "TechFlow",
    companyId: "1",
    companyLogo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120,000 - $160,000",
    description: "Join our design team to create beautiful, intuitive user experiences. You'll work closely with product managers and engineers to bring new features to life and improve existing user flows.",
    skills: ["Figma", "User Research", "Prototyping", "Design Systems", "UI/UX"],
    postedAt: "2024-01-14T14:30:00Z"
  },
  {
    id: "3",
    title: "Data Scientist",
    company: "DataVision",
    companyId: "2",
    companyLogo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$130,000 - $170,000",
    description: "We're seeking a Data Scientist to help build machine learning models that power our analytics platform. You'll work with large datasets to uncover insights and build predictive models.",
    skills: ["Python", "Machine Learning", "SQL", "TensorFlow", "Statistics"],
    postedAt: "2024-01-13T09:15:00Z"
  },
  {
    id: "4",
    title: "Frontend Developer",
    company: "DataVision",
    companyId: "2",
    companyLogo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center",
    location: "Remote",
    type: "Full-time",
    salary: "$100,000 - $140,000",
    description: "Build engaging user interfaces for our data visualization platform. You'll work with modern web technologies to create responsive, interactive dashboards that help users understand complex data.",
    skills: ["React", "D3.js", "TypeScript", "CSS", "WebGL"],
    postedAt: "2024-01-12T16:45:00Z"
  },
  {
    id: "5",
    title: "DevOps Engineer",
    company: "GreenTech Solutions",
    companyId: "3",
    companyLogo: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100&h=100&fit=crop&crop=center",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$120,000 - $150,000",
    description: "Help us build and maintain the infrastructure that powers our clean technology platform. You'll work on CI/CD pipelines, monitoring, and cloud infrastructure to ensure our services are reliable and scalable.",
    skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Monitoring"],
    postedAt: "2024-01-11T11:20:00Z"
  },
  {
    id: "6",
    title: "Marketing Manager",
    company: "GreenTech Solutions",
    companyId: "3",
    companyLogo: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100&h=100&fit=crop&crop=center",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$90,000 - $120,000",
    description: "Lead our marketing efforts to promote sustainable technology solutions. You'll develop marketing strategies, create content, and manage campaigns to reach businesses interested in reducing their environmental impact.",
    skills: ["Digital Marketing", "Content Creation", "SEO", "Analytics", "B2B Marketing"],
    postedAt: "2024-01-10T13:00:00Z"
  },
  {
    id: "7",
    title: "Software Engineering Intern",
    company: "TechFlow",
    companyId: "1",
    companyLogo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center",
    location: "San Francisco, CA",
    type: "Internship",
    salary: "$50/hour",
    description: "Join our engineering team as an intern to gain hands-on experience building web applications. You'll work on real projects alongside senior engineers and contribute to features used by millions of users.",
    skills: ["JavaScript", "React", "Git", "REST APIs", "Testing"],
    postedAt: "2024-01-09T08:30:00Z"
  },
  {
    id: "8",
    title: "UX Researcher",
    company: "DataVision",
    companyId: "2",
    companyLogo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center",
    location: "Austin, TX",
    type: "Contract",
    salary: "$80,000 - $100,000",
    description: "Conduct user research to understand how people interact with data visualization tools. You'll design and run user studies, analyze feedback, and provide insights to improve our product's usability.",
    skills: ["User Research", "Usability Testing", "Survey Design", "Data Analysis", "Interviewing"],
    postedAt: "2024-01-08T15:45:00Z"
  }
];
