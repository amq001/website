import ecommerceImage from "../public/images/ecommerce.webp";
import fintechImage from "../public/images/fintech.webp";
import healthImage from "../public/images/health.webp";
import ideateImage from "../public/images/ideate.webp";
import designImage from "../public/images/design.webp";
import developmentImage from "../public/images/development.webp";
import liveImage from "../public/images/live.webp";
import logisticsImage from "../public/images/logistics.webp";
import qaImage from "../public/images/qa.webp";
import supportImage from "../public/images/support.webp";
import healthcareIndustry from "../public/images/healthcareIndustry.webp";
import ecommerceIndustry from "../public/images/ecommerceIndustry.webp";
import financeIndustry from "../public/images/financeIndustry.webp";
import logisticsIndustry from "../public/images/logisticsIndustry.webp";
import chromeService from "../public/images/chrome.webp";
import fullstackAiService from "../public/images/fullstackAi.webp";
import chatbotService from "../public/images/chatbot.webp";
import aiIntegrationService from "../public/images/AiIntegration.webp";
import aiWorkflowService from "../public/images/AiWorkflow.webp";
import webMobileService from "../public/images/WebMobile.webp";

export const projects = [
  {
    title: "Sympos AI",
    tagline: `Sympos AI transforms decision-making by letting multiple AI minds debate, challenge bias, and
    deliver balanced, high-confidence insights`,
    src: "/images/symposImg.webp",
    details: [
      {
        image: "/images/symposDetail2.webp",
        description: `Sympos AI is a next generation AI debate platform built to reduce bias and strengthen decision making by orchestrating structured discussions between multiple large language models. Instead of relying on a single AI response, Sympos AI brings together diverse AI systems each operating under a distinct expert persona to analyze problems from multiple angles.`,
        colour: "#a093d7",
      },
      {
        image: "/images/symposDetail1.webp",
        description: `By simulating debates between Visionary, Strategist, Analyst, Ethicist, and Contrarian personas, the platform uncovers hidden assumptions, ethical concerns, strategic risks, and data driven insights that are often missed by standalone models. The result is a more transparent, balanced, and well reasoned outcome.`,
        colour: "#a093d7",
      },
      {
        image: "/images/symposDetail3.webp",
        description: `Sympos AI delivers clear debate summaries, final resolutions, and conflict analyses, making it an ideal solution for research, strategy, policy evaluation, and high impact decision making where accuracy and fairness matter most.`,
        colour: "#a093d7",
      },
    ],
    slug: "sympos-ai",
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
    src: "/images/razacar.webp",
    details: [
      {
        image: "/images/razacarDetail1.webp",
        description: `Razacar is an AI-powered, organization-focused ride booking and carpooling platform designed to transform daily commuting into a smarter, more sustainable experience. Built specifically for companies and institutions, the platform enables employees within the same organization to share rides safely, efficiently, and conveniently.`,
        colour: "#afd47c",
      },
      {
        image: "/images/razacarDetail2.webp",
        description: `Using intelligent matching algorithms, Razacar analyzes routes, schedules, and user preferences to connect commuters with optimal carpool partners. This maximizes vehicle utilization, reduces traffic congestion, and significantly lowers commuting costs. Access is restricted to verified members of the same organization, ensuring privacy, trust, and a secure commuting environment.`,
        colour: "#afd47c",
      },
      {
        image: "/images/razacarDetail3.webp",
        description: `By reducing the number of vehicles on the road and encouraging shared transportation, Razacar helps organizations lower their carbon footprint while fostering a strong sense of community among employees. With a focus on efficiency, sustainability, and user experience, Razacar delivers a modern, AI driven solution for greener and more cost effective commuting.`,
        colour: "#afd47c",
      },
    ],
    slug: "razacar",
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
    src: "/images/divauction.webp",
    details: [
      {
        image: "/images/divAuctionDetail1.webp",
        description: `DivAuctions is a modern, AI-powered auction and e-commerce solution built to help businesses launch, manage, and scale intelligent online marketplaces with confidence. The platform seamlessly supports both traditional bidding-based auctions and instant Buy Now listings, allowing sellers to adapt their sales strategy to different products and audiences.`,
        colour: "#da6d3a",
      },
      {
        image: "/images/divAuctionDetail2.webp",
        description: `By leveraging AI-driven insights and automation, DivAuctions enhances decision-making, streamlines operations, and improves the overall user experience. Core processes such as automated invoice generation, secure online payments, and customer management are optimized to reduce manual effort and increase efficiency.`,
        colour: "#da6d3a",
      },
      {
        image: "/images/divAuctionDetail3.webp",
        description: `Designed with flexibility and scalability at its core, DivAuctions features a highly customizable architecture that adapts to unique business models, workflows, and branding needs from niche auction platforms to large-scale e-commerce ecosystems. With a strong focus on performance, security, and intelligent automation, DivAuctions empowers businesses to stay competitive in today’s fast-evolving digital marketplace.`,
        colour: "#da6d3a",
      },
    ],
    slug: "divauctions",
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
    src: "/images/molahub.webp",
    details: [
      {
        image: "/images/molahubDetail1.webp",
        description: `MolaHub is a gift-giving platform that transforms how people share moments that matter. Instead of scrambling to find the perfect gift or coordinating group outings, users can send personalized experiences like a coffee, a meal, or a treat to friends, family, or entire groups with just a few taps. Through an intuitive mobile app, gifts are delivered with personal messages and redeemed seamlessly using QR codes.`,
        colour: "#e84ebc",
      },
      {
        image: "/images/molahubDetail2.webp",
        description: `The platform connects three communities in one smooth ecosystem. Customers discover and send gifts through the app, while local businesses join as Brand Admins to showcase their offerings and welcome new customers through gift redemptions. Super Admins ensure platform quality by reviewing and approving each brand, maintaining high standards so every shared experience feels special and trustworthy.`,
        colour: "#e84ebc",
      },
      {
        image: "/images/molahubDetail3.webp",
        description: `What makes MolaHub truly stand out is its simplicity and heart. Thoughtful onboarding personalizes the experience, group gifting makes sharing easy, and real-time notifications keep everything effortless from sending to redemption. For businesses, each gift drives foot traffic and brand discovery; for users, MolaHub removes friction from gifting while preserving its personal touch proving that technology can strengthen human connection, not complicate it.`,
        colour: "#e84ebc",
      },
    ],
    slug: "molahub",
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
    src: "/images/karcab.webp",
    details: [
      {
        image: "/images/karcabDetail1.webp",
        description: `KarCab is an on-demand mobility and logistics platform designed to support a wide range of transportation and delivery services within a single, unified ecosystem. Through a simple and intuitive mobile app, customers can quickly request services such as bike rides, parcel deliveries, carpooling, or intercity travel. Once a request is made, nearby service providers receive it in real time and can choose to accept, enabling fast and efficient service matching.`,
        colour: "#d85834",
      },
      {
        image: "/images/karcabDetail2.webp",
        description: `After acceptance, KarCab securely connects the customer and service provider, allowing trips or deliveries to proceed smoothly with live tracking and real-time status updates. This seamless interaction improves response times, enhances transparency, and creates a reliable experience for both users and providers. Every step from request to completion is designed to be clear, efficient, and easy to follow.`,
        colour: "#d85834",
      },
      {
        image: "/images/karcabDetail3.webp",
        description: `Behind the scenes, KarCab offers a powerful admin panel that gives operators full visibility and control over platform activity. Administrators can monitor trips, manage users and providers, and enforce safety or quality measures when needed. Built with flexibility at its core, KarCab adapts easily to ride-hailing, last-mile delivery, shared mobility, or long-distance travel, making it a scalable and reliable solution for modern transportation and logistics businesses.`,
        colour: "#d85834",
      },
    ],
    slug: "karcab",
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
    title: "Dawam",
    tagline: `Dawam is an integrated healthcare platform connecting patients with trusted clinics, pharmacies, and diagnostic services seamlessly and securely`,
    src: "/images/dawam.webp",
    details: [
      {
        image: "/images/dawamDetail1.webp",
        description: `Dawam Healthcare is a comprehensive digital healthcare platform designed to simplify how patients access quality medical services. It brings together specialized consultant clinics, temperature controlled pharmacies, and internationally standardized diagnostic laboratories into one unified and easy to use experience, making healthcare more accessible and organized for patients.`,
        colour: "#2c53ca",
      },
      {
        image: "/images/dawamDetail2.webp",
        description: `Built with a patient first approach, Dawam allows users to quickly find doctors by specialization, book appointments through interactive forms, and securely submit their information. The platform is fully responsive across all devices, ensuring patients can access services anytime and anywhere without friction.`,
        colour: "#2c53ca",
      },
      {
        image: "/images/dawamDetail3.webp",
        description: `To support trust, security, and growth, Dawam Healthcare integrates Google reCAPTCHA to prevent spam and protect user interactions. It also includes Google Business setup to strengthen both online visibility and physical presence, helping patients confidently connect with verified healthcare providers through a reliable and modern digital platform.`,
        colour: "#2c53ca",
      },
    ],
    slug: "dawam",
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
    src: "/images/gami.webp",
    details: [
      {
        image: "/images/gamiDetail1.webp",
        description: `For GAMI, a blockchain-powered multiplayer mobile game, our role was to significantly reduce operational costs while maintaining performance, scalability, and security. The game’s infrastructure was generating extremely high daily server expenses due to inefficient resource usage and unoptimized application logic.`,
        colour: "#a43ca6",
      },
      {
        image: "/images/gamiDetail2.webp",
        description: `We conducted a deep analysis of backend services, API calls, data synchronization, and real-time interactions. By optimizing code execution, reducing redundant requests, improving caching strategies, and streamlining blockchain interactions, we dramatically lowered server load.`,
        colour: "#a43ca6",
      },
      {
        image: "/images/gamiDetail3.webp",
        description: `As a result, daily infrastructure costs dropped from €600 per day to under €100 per day, while preserving smooth gameplay, real-time multiplayer interactions, and transparent in-game transactions. This optimization enabled the client to scale sustainably and reinvest resources into product growth instead of infrastructure overhead.`,
        colour: "#a43ca6",
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
    src: "/images/carbyne.webp",
    details: [
      {
        image: "/images/carbyneDetail1.webp",
        description: `Carbyne is a secure crypto asset protection platform designed to help users safely store and share private keys and recovery phrases without exposing sensitive information. Wallet credentials are encrypted using a user-defined password and transformed into a protected QR code, allowing users to store or share access with confidence.`,
        colour: "#cc321e",
      },
      {
        image: "/images/carbyneDetail2.webp",
        description: `Built with a strong focus on privacy and usability, Carbyne ensures that only the intended recipient can decrypt the encrypted data. By removing the need for plain-text storage, screenshots, or insecure messaging, the platform significantly reduces the risk of accidental exposure or theft.`,
        colour: "#cc321e",
      },
      {
        image: "/images/carbyneDetail3.webp",
        description: `Balancing enterprise-grade security with a clean, user-friendly experience, Carbyne makes crypto key management safer and more accessible for everyday users. It empowers individuals to protect their digital assets while maintaining full control, privacy, and peace of mind.`,
        colour: "#cc321e",
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
    tagline: `Your complete marketing, sales, and tech team on subscription, without the hiring hassle`,
    src: "/images/virtualCeo.webp",
    details: [
      {
        image: "/images/virtualDetail1.webp",
        description: `VirtualCEO is a subscription based platform designed to help business owners and entrepreneurs scale faster by providing instant access to fully managed marketing, sales, and technology teams. Instead of spending months recruiting, onboarding, and managing talent, businesses gain experienced professionals who work as a seamless extension of their organization.`,
        colour: "#752ae0",
      },
      {
        image: "/images/virtualDetail2.webp",
        description: `With flexible plans and predictable costs, VirtualCEO removes the complexity and overhead of traditional hiring. Companies avoid HR headaches while benefiting from structured processes, proven expertise, and consistent execution across critical business functions.`,
        colour: "#752ae0",
      },
      {
        image: "/images/virtualDetail3.webp",
        description: `Whether supporting a startup, a growing company, or an established brand, VirtualCEO delivers the people, systems, and performance needed to drive growth with confidence. By handling execution end to end, the platform allows leaders to stay focused on strategy, innovation, and long-term success.`,
        colour: "#752ae0",
      },
    ],
    slug: "virtual-ceo",
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
        src: "/images/steps/ideateStep.webp",
      },
      {
        title: "Product Design",
        description: `We craft a focused MVP that balances intuitive design with core functionality. Our goal is to maximize user value while validating ideas quickly.`,
        image: designImage,
        src: "/images/steps/designStep.webp",
      },
      {
        title: "Build & Engineer",
        description: `We develop scalable, end-to-end solutions using modern architecture and agile methods.
        Every build is optimized for performance, quality, and rapid delivery.
        `,
        image: developmentImage,
        src: "/images/steps/buildStep.webp",
      },
      {
        title: "Quality Assurance",
        description: `We thoroughly test your product to ensure reliability, security, and smooth performance.
        Every user interaction is validated for a polished experience.
        `,
        image: qaImage,
        src: "/images/steps/testingStep.webp",
      },
      {
        title: "Go Live",
        description: `We manage a seamless launch with well-planned deployment and rollout strategies.
        Our team supports you through release to ensure everything runs smoothly.
        `,
        image: liveImage,
        src: "/images/steps/liveStep.webp",
      },
      {
        title: "Evolve & Support",
        description: `We provide ongoing support, enhancements, and optimizations post-launch.
        As your product grows, we help it scale and adapt with confidence.
        `,
        image: supportImage,
        src: "/images/steps/evolveStep.webp",
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
        src: "/images/industry/ecommerceIndustry.webp",
      },
      {
        title: "Finance",
        description:
          "Secure and efficient financial software for modern banking.",
        image: fintechImage,
        src: "/images/industry/financeIndustry.webp",
      },
      {
        title: "E-commerce",
        description:
          "Scalable platforms to enhance online shopping experiences.",
        image: ecommerceImage,
        src: "/images/industry/ecommerceIndustry.webp",
      },
      {
        title: "Logistics",
        description:
          "Optimized systems for supply chain and transportation management.",
        image: logisticsImage,
        src: "/images/industry/logisticsIndustry.webp",
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
        image: "/images/aiService.webp",
      },
      {
        title: "AI Integration & Automation",
        description: `We add AI to your existing systems to automate tasks, improve efficiency, and unlock smarter workflows.
        `,
        image: "/images/automationService.webp",
      },
      {
        title: "Product Design & UX",
        description: `Thoughtful design focused on usability, clarity, and experiences users actually enjoy.`,
        image: "/images/designService.webp",
      },
      {
        title: "AI-Driven Website Automation",
        description: `Smart websites that automate processes, personalize content, and work for your business around the clock.`,
        image: "/images/webAutomationService.webp",
      },
      {
        title: "Full-Stack Web Development",
        description: `Reliable, high-performance web applications built to scale with your business.`,
        image: "/images/fullstackService.webp",
      },
      {
        title: "Mobile App Development",
        description: `Fast, intuitive mobile apps that feel natural on both iOS and Android.`,
        image: "/images/mobileAppService.webp",
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
      pageContent: [
        {
          title: "End-to-End Full-Stack AI Development Services",
          description:
            "We provide complete full-stack AI development services, covering frontend interfaces, backend systems, AI model integration, and data pipelines. Our team builds intelligent, scalable, and production-ready applications that transform ideas into real-world AI-powered products.",
          image: "",
        },
        {
          title:
            "Modern Architecture, Scalable Infrastructure, and AI Integration",
          description:
            "Our solutions leverage modern frontend frameworks, robust backend architectures, cloud-native infrastructure, and advanced AI models to ensure performance, scalability, and reliability. We design systems that handle growing users, large datasets, and evolving business requirements with ease.",
          image: "",
        },
        {
          title: "Secure, High-Performance, and Deployment-Ready AI Products",
          description:
            "From security best practices to performance optimization, we ensure every AI solution is production-ready. Our full-stack AI products are tested, monitored, and optimized for real-world deployment across industries such as SaaS, healthcare, finance, and e-commerce.",
          image: "",
        },
      ],
      slug: "fullstack-ai-solutions",
      image: fullstackAiService,
      colour: "#c2540a",
    },
    {
      title: "AI Chatbot Development",
      description:
        "We create intelligent AI chatbots that enhance customer engagement, automate support, and streamline operations, delivering accurate, context-aware conversations across websites, applications, and enterprise systems.",
      pageContent: [
        {
          title: "Custom AI Chatbot Development for Businesses",
          description:
            "We design and develop custom AI chatbots that deliver intelligent, human-like conversations. Our chatbots understand context, user intent, and business logic to improve customer engagement, automate support, and increase operational efficiency.",
          image: "",
        },
        {
          title: "Omnichannel Chatbot Integration and System Connectivity",
          description:
            "Our AI chatbots integrate seamlessly with websites, mobile applications, CRM systems, customer support tools, and enterprise platforms, ensuring consistent communication and centralized data across all channels.",
          image: "",
        },
        {
          title: "Automation, Analytics, and Continuous Chatbot Optimization",
          description:
            "We enable workflow automation through chatbots while continuously improving performance using analytics, feedback loops, and model refinement. This ensures accurate responses, reduced support costs, and better customer satisfaction over time.",
          image: "",
        },
      ],
      slug: "ai-chatbot-development",
      image: chatbotService,
      colour: "#0a53c2",
    },
    {
      title: "Web & Mobile Application Development",
      description:
        "We design and build scalable web and mobile applications with clean interfaces, robust architectures, and seamless experiences that help businesses launch faster and grow confidently.",
      pageContent: [
        {
          title: "Custom Web and Mobile Application Development",
          description:
            "We build custom web and mobile applications tailored to your business goals, focusing on usability, performance, and scalability. Our solutions help startups and enterprises launch faster and deliver seamless digital experiences.",
          image: "",
        },
        {
          title: "Scalable, Secure, and High-Performance App Architecture",
          description:
            "Using modern frameworks and best development practices, we create robust application architectures that support growth, ensure data security, and maintain consistent performance across platforms and devices.",
          image: "",
        },
        {
          title: "Ongoing Optimization, Maintenance, and Growth Support",
          description:
            "Beyond development, we provide continuous optimization, feature enhancements, and technical support to ensure your applications evolve with user needs and business expansion.",
          image: "",
        },
      ],
      slug: "web-&-mobile-application-development",
      image: webMobileService,
      colour: "#ff7c24",
    },
    {
      title: "AI Agents & Autonomous Workflows",
      description:
        "We develop autonomous AI agents that plan, execute, and adapt to automate complex workflows, enabling smarter decision-making and reducing manual effort across business operations.",
      pageContent: [
        {
          title: "AI Agents for Autonomous Task Execution and Operations",
          description:
            "We develop intelligent AI agents capable of autonomous planning, reasoning, and execution. These agents automate complex tasks, reduce manual intervention, and enhance operational efficiency across business workflows.",
          image: "",
        },
        {
          title: "Workflow Automation and Intelligent Decision-Making",
          description:
            "Our autonomous AI workflows analyze data in real time, trigger actions, and support intelligent decision-making, enabling businesses to streamline operations and respond faster to changing conditions.",
          image: "",
        },
        {
          title: "Adaptive, Scalable, and Learning AI Agent Systems",
          description:
            "Designed to evolve over time, our AI agents learn from interactions, adapt to new scenarios, and scale seamlessly as data volume and operational complexity increase.",
          image: "",
        },
      ],
      slug: "ai-agents-&-autonomous-workflows",
      image: aiWorkflowService,
      colour: "#26549b",
    },
    {
      title: "Chrome Extension Development",
      description:
        "We build secure, high-performance Chrome extensions focused on productivity, automation, and user efficiency, tailored for startups, SaaS platforms, and internal business tools.",
      pageContent: [
        {
          title: "Custom Chrome Extension Development Services",
          description:
            "We build custom Chrome extensions designed to enhance productivity, automate workflows, and improve user efficiency. Our extensions are tailored for SaaS products, startups, and internal business tools.",
          image: "",
        },
        {
          title: "Secure, Compliant, and High-Performance Extensions",
          description:
            "Our Chrome extensions follow Google Chrome Web Store guidelines, security best practices, and performance standards to ensure fast, reliable, and safe user experiences.",
          image: "",
        },
        {
          title: "API Integration, Maintenance, and Feature Enhancements",
          description:
            "We integrate extensions with APIs, third-party tools, and backend systems while providing ongoing updates, maintenance, and feature improvements as business needs evolve.",
          image: "",
        },
      ],
      slug: "chrome-extension-development",
      image: chromeService,
      colour: "#cd2505",
    },
    {
      title: "Custom AI Integrations & Automation",
      description:
        "We integrate AI seamlessly into existing systems, automating workflows and enhancing functionality to improve efficiency, reduce costs, and transform operations with intelligent automation.",
      pageContent: [
        {
          title: "Custom AI Integration Services for Existing Systems",
          description:
            "We integrate AI technologies into your existing software, platforms, and workflows to enhance functionality without disrupting operations. Our custom AI integrations improve efficiency, accuracy, and decision-making.",
          image: "",
        },
        {
          title: "Business Process Automation Using AI",
          description:
            "By automating repetitive, data-driven, and manual tasks, we help organizations reduce operational costs, eliminate inefficiencies, and accelerate business processes using intelligent automation.",
          image: "",
        },
        {
          title: "Scalable AI Automation for Digital Transformation",
          description:
            "Our AI automation solutions are built to scale, enabling long-term digital transformation by adapting to evolving business requirements, data growth, and operational complexity.",
          image: "",
        },
      ],
      slug: "custom-ai-integrations-&-automation",
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
      pageContent: [
        {
          title: "Secure and Compliant Digital Solutions for Healthcare",
          description:
            "We build HIPAA-compliant and security-first digital healthcare solutions that protect sensitive patient data while enabling seamless access for providers, administrators, and patients. Our platforms support electronic health records, telemedicine, and secure data exchange.",
          image: "",
        },
        {
          title: "AI-Powered Diagnostics, Data Management, and Patient Care",
          description:
            "By integrating AI and intelligent analytics, we help healthcare organizations improve diagnostics, streamline clinical workflows, and gain actionable insights from medical data, leading to better patient outcomes and operational efficiency.",
          image: "",
        },
        {
          title: "Scalable Healthcare Technology for Modern Medical Systems",
          description:
            "Our healthcare solutions are designed to scale with growing patient volumes and evolving regulatory requirements, supporting hospitals, clinics, and health tech startups in their digital transformation journey.",
          image: "",
        },
      ],
      slug: "healthcare",
      image: healthcareIndustry,
      colour: "#0a53c2",
    },
    {
      title: "E-commerce",
      description:
        "We create high-performance e-commerce platforms with seamless user experiences, smart personalization, secure payments, and scalable architectures that drive conversions and long-term business growth.",
      pageContent: [
        {
          title: "High-Performance E-commerce Platform Development",
          description:
            "We develop fast, reliable, and conversion-focused e-commerce platforms that deliver seamless shopping experiences across web and mobile devices, helping businesses attract, engage, and retain customers.",
          image: "",
        },
        {
          title: "Personalization, AI Recommendations, and Smart Commerce",
          description:
            "Using AI-driven personalization and recommendation engines, we help e-commerce brands deliver tailored product experiences, improve customer engagement, and increase average order value.",
          image: "",
        },
        {
          title:
            "Secure Payments, Scalable Infrastructure, and Growth Enablement",
          description:
            "Our e-commerce solutions support secure payment gateways, inventory management, and scalable cloud architectures, enabling businesses to handle high traffic, seasonal demand, and long-term growth.",
          image: "",
        },
      ],
      slug: "e-commerce",
      image: ecommerceIndustry,
      colour: "#ff7c24",
    },
    {
      title: "Finance",
      description:
        "We deliver robust financial technology solutions that enhance security, automate processes, enable real-time insights, and support scalable growth for banks, fintech startups, and financial institutions.",
      pageContent: [
        {
          title: "Secure and Reliable Financial Technology Solutions",
          description:
            "We build robust fintech and financial software solutions with enterprise-grade security, ensuring data protection, regulatory compliance, and reliability for banks, financial institutions, and fintech startups.",
          image: "",
        },
        {
          title: "Process Automation, Risk Management, and Real-Time Insights",
          description:
            "Our financial technology solutions automate complex processes, enable real-time data analysis, and support risk assessment, fraud detection, and smarter financial decision-making.",
          image: "",
        },
        {
          title: "Scalable Fintech Platforms for Digital Finance Growth",
          description:
            "Designed for performance and scalability, our fintech platforms support rapid growth, high transaction volumes, and evolving regulatory standards in modern financial ecosystems.",
          image: "",
        },
      ],
      slug: "finance",
      image: financeIndustry,
      colour: "#cd2505",
    },
    {
      title: "Logistics",
      description:
        "We develop intelligent logistics solutions that optimize supply chains, enable real-time tracking, automate operations, and improve efficiency across transportation, warehousing, and distribution networks.",
      pageContent: [
        {
          title: "Intelligent Logistics and Supply Chain Solutions",
          description:
            "We develop intelligent logistics platforms that streamline supply chain operations, improve visibility, and enable real-time tracking across transportation, warehousing, and distribution networks.",
          image: "",
        },
        {
          title: "Automation, Optimization, and Data-Driven Logistics",
          description:
            "By leveraging automation and advanced analytics, we help logistics businesses optimize routes, reduce operational costs, and improve delivery accuracy and efficiency.",
          image: "",
        },
        {
          title: "Scalable Technology for Modern Logistics Operations",
          description:
            "Our logistics solutions are built to scale with growing volumes and expanding networks, supporting end-to-end digital transformation for logistics providers and supply chain enterprises.",
          image: "",
        },
      ],
      slug: "logistics",
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

export const reviews = [
  {
    quote: `A strong developer, listens well to requirements and feedbacks and communicates really well. Would definitely work with him in the future.`,
    name: "Azad Uddin",
  },
  {
    quote: `Excellent work! Wajeeh is extremely knowledgeable and professional. He even made suggestions that improved on our original plans.`,
    name: "Lincoln Turner",
  },
  {
    quote: `Awesome developer, very knowledgeable and an all around pleasure to work with. Would definitely work with him again.`,
    name: "Latifah",
  },
  {
    quote: `Wajeeh and Mohsin demonstrate excellent skill. They understand requirements thoroughly and performs work very accurately. There was no rework required on the project, they finished work as agreed and as expected`,
    name: "Amish",
  },
  {
    quote: `Great work as always`,
    name: "Imelda Fossu",
  },
  {
    quote:
      "It was a pleasure to work with DivDash, they are able to grasp your project quickly. They have the ability to provide multiple technical solutions to a problem and is extremely competent in two areas needed for our project which are flutter and firebase functions.",
    // name: "Second",
  },
  {
    quote: "Very good experience with DivDash! I recommend :)",
    name: "Third",
  },
  {
    quote:
      "It was a real pleasure working with DivDash, they have a good understanding of both firebase and flutter. Many of our issues were solved in a short period of time. They are also good with timing and communication.",
    name: "Fourth",
  },
  {
    quote:
      "DivDash demonstrates excellent skill. They understands requirements thoroughly and performs work very accurately. There was no rework required on the project, they finished work as agreed and as expected. I would definitely work with them again.",
    name: "Fifth",
  },
];
