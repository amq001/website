import ecommerceImage from "../public/images/ecommerce.png";
import fintechImage from "../public/images/fintech.png";
import healthImage from "../public/images/health.png";
import ideateImage from "../public/images/ideatee.png";
import designImage from "../public/images/designn.png";
import developmentImage from "../public/images/developmentt.png";
import liveImage from "../public/images/livee.png";
import logisticsImage from "../public/images/logistics.png";
import qaImage from "../public/images/qaa.png";
import supportImage from "../public/images/supportt.png";
import healthcareIndustry from "../public/images/healthcareIndustry.png";
import ecommerceIndustry from "../public/images/ecommerceIndustry.png";
import financeIndustry from "../public/images/financeIndustry.png";
import logisticsIndustry from "../public/images/logisticsIndustry.png";
import chromeService from "../public/images/chrome.png";
import fullstackAiService from "../public/images/fullstackAi.png";
import chatbotService from "../public/images/chatbot.png";
import aiIntegrationService from "../public/images/AiIntegration.png";
import aiWorkflowService from "../public/images/AiWorkflow.png";
import webMobileService from "../public/images/WebMobile.png";
// import ideateImage from "../public/images/png/ideateWhite-removebg-preview.png";
// import designImage from "../public/images/png/designWhite-removebg-preview.png";
// import developmentImage from "../public/images/png/developmentWhite-removebg-preview.png";
// import liveImage from "../public/images/png/liveWhite-removebg-preview.png";
// import qaImage from "../public/images/png/qaWhite-removebg-preview.png";
// import supportImage from "../public/images//png/supportWhite-removebg-preview.png";
import { desc, image } from "motion/react-client";
import { features } from "process";

// export type ProjectType = {
//   title: string;
//   description: string;
//   slug: string;
//   src: string;
//   link: string;
//   color: string;
// };

export const projects = [
  {
    title: "Sympos AI",
    tagline: `Sympos AI transforms decision-making by letting multiple AI minds debate, challenge bias, and
    deliver balanced, high-confidence insights`,
    src: "/images/symposImg1.png",
    details: [
      {
        image: "/images/symposImg1.png",
        description: `Sympos AI is a next generation AI debate platform built to reduce bias and strengthen decision making by orchestrating structured discussions between multiple large language models. Instead of relying on a single AI response, Sympos AI brings together diverse AI systems each operating under a distinct expert persona to analyze problems from multiple angles.`,
      },
      {
        image: "/images/symposImg1.png",
        description: `By simulating debates between Visionary, Strategist, Analyst, Ethicist, and Contrarian personas, the platform uncovers hidden assumptions, ethical concerns, strategic risks, and data driven insights that are often missed by standalone models. The result is a more transparent, balanced, and well reasoned outcome.`,
      },
      {
        image: "/images/symposImg1.png",
        description: `Sympos AI delivers clear debate summaries, final resolutions, and conflict analyses, making it an ideal solution for research, strategy, policy evaluation, and high impact decision making where accuracy and fairness matter most.`,
      },
    ],
    slug: "SymposAi",
    features: [
      "Multi-LLM integration using models like ChatGPT, Claude, Gemini, Grok, and DeepSeek",
      "Persona-driven AI debates for diverse, expert-level perspectives",
      "Built-in bias and conflict analysis to uncover blind spots and assumptions",
      "Clear debate summaries and final resolutions for actionable insights",
      "Improves trust, transparency, and reliability of AI-generated outcomes",
      "Ideal for strategic planning, research validation, and ethical assessments",
    ],
    type: "websiteApp",
  },
  {
    title: "Razacar",
    tagline: `Razacar is an AI-powered, community driven carpooling platform that enables secure, affordable, and eco-friendly daily commuting for organizations.`,
    src: "/images/razacar1.png",
    details: [
      {
        image: "/images/symposImg1.png",
        description: `Razacar is an AI-powered, organization-focused ride booking and carpooling platform designed to transform daily commuting into a smarter, more sustainable experience. Built specifically for companies and institutions, the platform enables employees within the same organization to share rides safely, efficiently, and conveniently.`,
      },
      {
        image: "/images/symposImg1.png",
        description: `Using intelligent matching algorithms, Razacar analyzes routes, schedules, and user preferences to connect commuters with optimal carpool partners. This maximizes vehicle utilization, reduces traffic congestion, and significantly lowers commuting costs. Access is restricted to verified members of the same organization, ensuring privacy, trust, and a secure commuting environment.`,
      },
      {
        image: "/images/symposImg1.png",
        description: `By reducing the number of vehicles on the road and encouraging shared transportation, Razacar helps organizations lower their carbon footprint while fostering a strong sense of community among employees. With a focus on efficiency, sustainability, and user experience, Razacar delivers a modern, AI driven solution for greener and more cost effective commuting.`,
      },
    ],
    slug: "Razacar",
    features: [
      "AI-Powered Ride Matching: Intelligently matches commuters based on routes, schedules, and preferences",
      "Eco-Friendly Commuting: Reduces carbon emissions by maximizing ride sharing and minimizing vehicle usage",
      "Organization-Only Access: Ensures privacy and security through verified, internal user access",
      "Cost-Effective Travel: Lowers daily commuting expenses through shared ride costs",
      "Community-Driven Experience: Builds trust and collaboration within professional communities",
      "Simple & User-Friendly Interface: Seamless ride booking inspired by modern ride-hailing platforms",
    ],
    type: "mobileApp",
  },
  {
    title: "DivAuctions",
    tagline: `DivAuctions is an AI-powered, all-in-one auction and e-commerce platform designed to enable smarter, faster, and more flexible online selling`,
    src: "/images/divauction.png",
    details: [
      {
        image: "/images/symposImg1.png",
        description: `DivAuctions is a modern, AI-powered auction and e-commerce solution built to help businesses launch, manage, and scale intelligent online marketplaces with confidence. The platform seamlessly supports both traditional bidding-based auctions and instant Buy Now listings, allowing sellers to adapt their sales strategy to different products and audiences.`,
      },
      {
        image: "/images/symposImg1.png",
        description: `By leveraging AI-driven insights and automation, DivAuctions enhances decision-making, streamlines operations, and improves the overall user experience. Core processes such as automated invoice generation, secure online payments, and customer management are optimized to reduce manual effort and increase efficiency.`,
      },
      {
        image: "/images/symposImg1.png",
        description: `Designed with flexibility and scalability at its core, DivAuctions features a highly customizable architecture that adapts to unique business models, workflows, and branding needs from niche auction platforms to large-scale e-commerce ecosystems. With a strong focus on performance, security, and intelligent automation, DivAuctions empowers businesses to stay competitive in today’s fast-evolving digital marketplace.`,
      },
    ],
    slug: "DivAuctions",
    features: [
      "AI-powered insights to optimize listings, pricing, and sales performance",
      "Supports both auction-based and Buy Now listings within one unified platform",
      "Secure Stripe payment integration for fast and trusted transactions",
      "Automated invoice generation for efficient order and payment management",
      "Highly customizable architecture tailored to unique business requirements",
      "Seamless CRM integration for smarter customer and sales tracking",
      "Built for scalability, high performance, and long-term business growth",
    ],
    type: "mobileApp",
  },
  {
    title: "Molahub",
    tagline: `Small acts, big smiles MolaHub makes meaningful gift giving effortless by connecting people through personalized experiences at their favorite local brands`,
    src: "/images/molahub2.png",
    details: [
      {
        image: "/images/symposImg1.png",
        description: `MolaHub is a gift-giving platform that transforms how people share moments that matter. Instead of scrambling to find the perfect gift or coordinating group outings, users can send personalized experiences like a coffee, a meal, or a treat to friends, family, or entire groups with just a few taps. Through an intuitive mobile app, gifts are delivered with personal messages and redeemed seamlessly using QR codes.`,
      },
      {
        image: "/images/symposImg1.png",
        description: `The platform connects three communities in one smooth ecosystem. Customers discover and send gifts through the app, while local businesses join as Brand Admins to showcase their offerings and welcome new customers through gift redemptions. Super Admins ensure platform quality by reviewing and approving each brand, maintaining high standards so every shared experience feels special and trustworthy.`,
      },
      {
        image: "/images/symposImg1.png",
        description: `What makes MolaHub truly stand out is its simplicity and heart. Thoughtful onboarding personalizes the experience, group gifting makes sharing easy, and real-time notifications keep everything effortless from sending to redemption. For businesses, each gift drives foot traffic and brand discovery; for users, MolaHub removes friction from gifting while preserving its personal touch proving that technology can strengthen human connection, not complicate it.`,
      },
    ],
    slug: "Molahub",
    features: [
      "Effortless Gift Sending: Customers send personalized gifts (coffee, meals, experiences) to individuals or groups with just a few taps, complete with custom messages and scheduled meetups",
      "Smart Personalization Engine: Onboarding questionnaire captures preferences for mood boosters, favorite brands, and meaningful moments to deliver tailored gift recommendations",
      "QR Based Redemption System: Seamless in store fulfillment through secure QR codes, eliminating physical vouchers and enabling instant verification for brand partners",
      `Group Experience Sharing: Unique "Share a Mola" feature lets users gift experiences to multiple people simultaneously, perfect for team celebrations or friend gatherings`,
      "Brand Partner Dashboard: Complete web portal for businesses to manage products, track redemptions, organize offerings by category, and gain insights into customer preferences",
      "Quality Controlled Marketplace: Super Admin approval workflow ensures only verified, high quality brands join the platform, maintaining trust and consistent user experiences",
    ],
    type: "mobileApp",
  },
  {
    title: "KarCab",
    tagline: `KarCab is a flexible on demand logistics and ride booking platform that seamlessly
    connects customers, service providers, and administrators in real time`,
    src: "/images/karcab.png",
    details: [
      {
        image: "/images/symposImg1.png",
        description: `KarCab is an on-demand mobility and logistics platform designed to support a wide range of transportation and delivery services within a single, unified ecosystem. Through a simple and intuitive mobile app, customers can quickly request services such as bike rides, parcel deliveries, carpooling, or intercity travel. Once a request is made, nearby service providers receive it in real time and can choose to accept, enabling fast and efficient service matching.`,
      },
      {
        image: "/images/symposImg1.png",
        description: `After acceptance, KarCab securely connects the customer and service provider, allowing trips or deliveries to proceed smoothly with live tracking and real-time status updates. This seamless interaction improves response times, enhances transparency, and creates a reliable experience for both users and providers. Every step from request to completion is designed to be clear, efficient, and easy to follow.`,
      },
      {
        image: "/images/symposImg1.png",
        description: `Behind the scenes, KarCab offers a powerful admin panel that gives operators full visibility and control over platform activity. Administrators can monitor trips, manage users and providers, and enforce safety or quality measures when needed. Built with flexibility at its core, KarCab adapts easily to ride-hailing, last-mile delivery, shared mobility, or long-distance travel, making it a scalable and reliable solution for modern transportation and logistics businesses.`,
      },
    ],
    slug: "KarCab",
    features: [
      "On demand service booking for rides, deliveries, and logistics",
      "Real time matching between customers and service providers",
      "Multi service support including bike, carpool, delivery, and inter city travel",
      "Centralized admin panel to monitor, manage, and restrict trips",
      "Scalable architecture adaptable to different business models",
      "Clean, user friendly experience for customers, providers, and admins",
    ],
    type: "mobileApp",
  },
  {
    title: "Dawam ",
    tagline: `Dawam is an integrated healthcare platform connecting patients with trusted clinics, pharmacies, and diagnostic services seamlessly and securely`,
    src: "/images/dawam.png",
    details: [
      {
        image: "/images/symposImg1.png",
        description: `Dawam Healthcare is a comprehensive digital healthcare platform designed to simplify how patients access quality medical services. It brings together specialized consultant clinics, temperature controlled pharmacies, and internationally standardized diagnostic laboratories into one unified and easy to use experience, making healthcare more accessible and organized for patients.`,
      },
      {
        image: "/images/symposImg1.png",
        description: `Built with a patient first approach, Dawam allows users to quickly find doctors by specialization, book appointments through interactive forms, and securely submit their information. The platform is fully responsive across all devices, ensuring patients can access services anytime and anywhere without friction.`,
      },
      {
        image: "/images/symposImg1.png",
        description: `To support trust, security, and growth, Dawam Healthcare integrates Google reCAPTCHA to prevent spam and protect user interactions. It also includes Google Business setup to strengthen both online visibility and physical presence, helping patients confidently connect with verified healthcare providers through a reliable and modern digital platform.`,
      },
    ],
    slug: "Dawam",
    features: [
      "Integrated platform for clinics, pharmacies, and diagnostic labs",
      "Smart doctor filtering based on specialization for easy discovery",
      "Interactive appointment booking forms for smooth patient onboarding",
      "Google reCAPTCHA integration to prevent spam and protect data",
      "Fully responsive design optimized for all devices",
      "Google Business setup to enhance online visibility and trust",
    ],
    type: "mobileApp",
  },
  {
    title: "Gami",
    tagline: `We optimized GAMI’s backend and application flow to cut server costs by over 80% without compromising gameplay or blockchain integrity.`,
    src: "/images/gami.png",
    details: [
      {
        image: "/images/symposImg1.png",
        description: `For GAMI, a blockchain-powered multiplayer mobile game, our role was to significantly reduce operational costs while maintaining performance, scalability, and security. The game’s infrastructure was generating extremely high daily server expenses due to inefficient resource usage and unoptimized application logic.`,
      },
      {
        image: "/images/symposImg1.png",
        description: `We conducted a deep analysis of backend services, API calls, data synchronization, and real-time interactions. By optimizing code execution, reducing redundant requests, improving caching strategies, and streamlining blockchain interactions, we dramatically lowered server load.`,
      },
      {
        image: "/images/symposImg1.png",
        description: `As a result, daily infrastructure costs dropped from €600 per day to under €100 per day, while preserving smooth gameplay, real-time multiplayer interactions, and transparent in-game transactions. This optimization enabled the client to scale sustainably and reinvest resources into product growth instead of infrastructure overhead.`,
      },
    ],
    slug: "gami",
    features: [
      "Reduced daily server costs by over 80% through backend and code optimization",
      "Minimized redundant API calls and inefficient data synchronization",
      "Improved performance and stability for real-time multiplayer gameplay",
      "Optimized blockchain interactions to reduce unnecessary computation",
      "Enhanced scalability, allowing the game to grow without cost spikes",
      "Delivered measurable cost savings while maintaining security and transparency",
    ],
    type: "mobileApp",
  },
  {
    title: "Carbyne",
    tagline: `Carbyne secures your crypto wallet by turning sensitive keys into encrypted, shareable QR codes safe, simple, and private`,
    src: "/images/carbyne.png",
    details: [
      {
        image: "/images/symposImg1.png",
        description: `Carbyne is a secure crypto asset protection platform designed to help users safely store and share private keys and recovery phrases without exposing sensitive information. Wallet credentials are encrypted using a user-defined password and transformed into a protected QR code, allowing users to store or share access with confidence.`,
      },
      {
        image: "/images/symposImg1.png",
        description: `Built with a strong focus on privacy and usability, Carbyne ensures that only the intended recipient can decrypt the encrypted data. By removing the need for plain-text storage, screenshots, or insecure messaging, the platform significantly reduces the risk of accidental exposure or theft.`,
      },
      {
        image: "/images/symposImg1.png",
        description: `Balancing enterprise-grade security with a clean, user-friendly experience, Carbyne makes crypto key management safer and more accessible for everyday users. It empowers individuals to protect their digital assets while maintaining full control, privacy, and peace of mind.`,
      },
    ],
    slug: "carbyne",
    features: [
      "End to end encryption of private keys and seed phrases",
      "Password based security ensuring only authorized access",
      "Secure QR code generation for safe sharing and backup",
      "Eliminates unsafe storage methods like plain text or screenshots",
      "User-friendly design built for both beginners and experienced crypto users",
      "Privacy first approach with no exposure of sensitive data",
    ],
    type: "mobileApp",
  },
  {
    title: "Virtual CEO",
    tagline: `Your complete marketing, sales, and tech tea on subscription, without the hiring hassle`,
    src: "/images/virtualCeo.png",
    details: [
      {
        image: "/images/symposImg1.png",
        description: `VirtualCEO is a subscription based platform designed to help business owners and entrepreneurs scale faster by providing instant access to fully managed marketing, sales, and technology teams. Instead of spending months recruiting, onboarding, and managing talent, businesses gain experienced professionals who work as a seamless extension of their organization.`,
      },
      {
        image: "/images/symposImg1.png",
        description: `With flexible plans and predictable costs, VirtualCEO removes the complexity and overhead of traditional hiring. Companies avoid HR headaches while benefiting from structured processes, proven expertise, and consistent execution across critical business functions.`,
      },
      {
        image: "/images/symposImg1.png",
        description: `Whether supporting a startup, a growing company, or an established brand, VirtualCEO delivers the people, systems, and performance needed to drive growth with confidence. By handling execution end to end, the platform allows leaders to stay focused on strategy, innovation, and long-term success.`,
      },
    ],
    slug: "VirtualCEO",
    features: [
      "Subscription-based access to marketing, sales, and tech professionals",
      "No recruitment, onboarding, or HR management required",
      "Flexible plans tailored to your business stage and goals",
      "Predictable monthly pricing with transparent deliverables",
      "Teams that integrate seamlessly with your existing operations",
      "Faster execution and scalability without long-term hiring risks",
    ],
    type: "mobileApp",
  },
];

export const homePage = {
  hero: {
    heading: "Delivering excellence in",
    description:
      "We partner with you to build intelligent, scalable products focused on results, reliability, and long-term success.",
    changingText: [
      "AI-Powered Solutions",
      "Product Strategy & Design",
      "Deployment & Ongoing Support",
      "Visual & Brand Experiences",
      "Technical Advisory Services",
      "Research & Innovation",
      "MVP & Rapid Development",
    ],
  },
  portfolio: {
    heading: "Check Out What We’ve Delivered",
    projects: projects,
  },
  process: {
    heading: "From Idea to Product",
    description:
      "A refined process that turns ideas into scalable, high-quality products. From concept to launch, we build with purpose and precision.",
    processCards: [
      {
        title: "Discover & Align",
        description: `We dive deep into your vision and business objectives to define a clear product roadmap.This step ensures strategic alignment and sets a strong foundation for success.`,
        image: ideateImage,
      },
      {
        title: "Product Design",
        description: `We craft a focused MVP that balances intuitive design with core functionality. Our goal is to maximize user value while validating ideas quickly.`,
        image: designImage,
      },
      {
        title: "Build & Engineer",
        description: `We develop scalable, end-to-end solutions using modern architecture and agile methods.
        Every build is optimized for performance, quality, and rapid delivery.
        `,
        image: developmentImage,
      },
      {
        title: "Quality Assurance",
        description: `We thoroughly test your product to ensure reliability, security, and smooth performance.
        Every user interaction is validated for a polished experience.
        `,
        image: qaImage,
      },
      {
        title: "Go Live",
        description: `We manage a seamless launch with well-planned deployment and rollout strategies.
        Our team supports you through release to ensure everything runs smoothly.
        `,
        image: liveImage,
      },
      {
        title: "Evolve & Support",
        description: `We provide ongoing support, enhancements, and optimizations post-launch.
        As your product grows, we help it scale and adapt with confidence.
        `,
        image: supportImage,
      },
    ],
  },
  industries: {
    heading: "Industries We Serve",
    description:
      "We specialize in delivering tailored software solutions across a diverse range of industries. Our expertise spans from healthcare and finance to e-commerce and education, enabling us to address unique challenges and drive innovation in each sector.",
    industriesCards: [
      {
        title: "Healthcare",
        description:
          "Innovative solutions for patient care and medical management.",
        image: healthImage,
      },
      {
        title: "Finance",
        description:
          "Secure and efficient financial software for modern banking.",
        image: fintechImage,
      },
      {
        title: "E-commerce",
        description:
          "Scalable platforms to enhance online shopping experiences.",
        image: ecommerceImage,
      },
      {
        title: "Logistics",
        description:
          "Optimized systems for supply chain and transportation management.",
        image: logisticsImage,
      },
    ],
  },
  services: {
    heading: "See What We Offer",
    servicesCards: [
      {
        title: "AI-Powered Full-Stack Solutions",
        description: `
       End-to-end applications built with AI at the core. Smart, scalable, and ready to solve real problems.
       `,
      },
      {
        title: "AI Integration & Automation",
        description: `We add AI to your existing systems to automate tasks, improve efficiency, and unlock smarter workflows.
        `,
      },
      {
        title: "Product Design & UX",
        description: `Thoughtful design focused on usability, clarity, and experiences users actually enjoy.`,
      },
      {
        title: "AI-Driven Website Automation",
        description: `Smart websites that automate processes, personalize content, and work for your business around the clock.`,
      },
      {
        title: "Full-Stack Web Development",
        description: `Reliable, high-performance web applications built to scale with your business.`,
      },
      {
        title: "Mobile App Development",
        description: `Fast, intuitive mobile apps that feel natural on both iOS and Android.`,
      },
    ],
  },
  whyUs: {
    heading: "Why Choose DivDash?",
    description: `We believe great products are built on trust, transparency, and close collaboration. Our highly skilled team brings deep technical expertise and industry experience to every project, ensuring solutions are scalable, efficient, and future-ready. We work side by side with you, maintaining clear communication and complete visibility throughout the development journey.`,
  },
};

export const servicesPage = {
  hero: {
    heading: "Services We Offer",
    description:
      "Innovative, customized solutions combining advanced technology and strategic insight for exceptional performance.",
  },
  services: [
    {
      title: "Full-Stack AI Solutions",
      description:
        "We deliver end-to-end full-stack solutions infused with AI, covering frontend, backend, and intelligent systems to build scalable, high-performance products ready for real-world deployment.",
      image: fullstackAiService,
      colour: "#c2540a",
    },
    {
      title: "AI Chatbot Development",
      description:
        "We create intelligent AI chatbots that enhance customer engagement, automate support, and streamline operations, delivering accurate, context-aware conversations across websites, applications, and enterprise systems.",
      image: chatbotService,
      colour: "#0a53c2",
    },
    {
      title: "Web & Mobile Application Development",
      description:
        "We design and build scalable web and mobile applications with clean interfaces, robust architectures, and seamless experiences that help businesses launch faster and grow confidently.",
      image: webMobileService,
      colour: "#ff7c24",
    },
    {
      title: "AI Agents & Autonomous Workflows",
      description:
        "We develop autonomous AI agents that plan, execute, and adapt to automate complex workflows, enabling smarter decision-making and reducing manual effort across business operations.",
      image: aiWorkflowService,
      colour: "#26549b",
    },
    {
      title: "Chrome Extension Development",
      description:
        "We build secure, high-performance Chrome extensions focused on productivity, automation, and user efficiency, tailored for startups, SaaS platforms, and internal business tools.",
      image: chromeService,
      colour: "#cd2505",
    },
    {
      title: "Custom AI Integrations & Automation",
      description:
        "We integrate AI seamlessly into existing systems, automating workflows and enhancing functionality to improve efficiency, reduce costs, and transform operations with intelligent automation.",
      image: aiIntegrationService,
      colour: "#c2540a",
    },
  ],
};

export const industriesPage = {
  hero: {
    heading: "Industries We Empower",
    description:
      "Empowering diverse industries through innovative solutions and strategic expertise.",
  },
  industries: [
    {
      title: "Healthcare",
      description:
        "We build secure, compliant digital solutions for healthcare providers, improving patient care, data management, diagnostics, and operational efficiency through scalable and intelligent technology.",
      image: healthcareIndustry,
      colour: "#0a53c2",
    },
    {
      title: "E-commerce",
      description:
        "We create high-performance e-commerce platforms with seamless user experiences, smart personalization, secure payments, and scalable architectures that drive conversions and long-term business growth.",
      image: ecommerceIndustry,
      colour: "#ff7c24",
    },
    {
      title: "Finance",
      description:
        "We deliver robust financial technology solutions that enhance security, automate processes, enable real-time insights, and support scalable growth for banks, fintech startups, and financial institutions.",
      image: financeIndustry,
      colour: "#cd2505",
    },
    {
      title: "Logistics",
      description:
        "We develop intelligent logistics solutions that optimize supply chains, enable real-time tracking, automate operations, and improve efficiency across transportation, warehousing, and distribution networks.",
      image: logisticsIndustry,
      colour: "#26549b",
    },
  ],
};

export const portfolioPage = {
  hero: {
    heading: "Our Portfolio",
    description:
      "Discover our portfolio of high-impact projects, delivering innovative, customized solutions for every client.",
  },
  projects: projects,
};

export const ourPartners = [
  "Google",
  "Obvio",
  "lunedata",
  "Innovit",
  "Teggior",
  "Cannar",
  "Google",
  "Obvio",
  "lunedata",
  "Innovit",
  "Teggior",
  "Cannar",
  "Google",
  "Obvio",
  "lunedata",
  "Innovit",
  "Teggior",
  "Cannar",
];
