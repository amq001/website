import ContactUsSection from "@/components/ContactUsSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
// import HeroSection3 from "@/components/HeroSection";
// import HorizontalScroll from "@/components/HorizontalScroll";
import { ReviewsSection } from "@/components/ReviewsSection";
import SectionComponent from "@/components/SectionComponent";

const page = () => {
  return (
    <div className="">
      <HeroSection heading="Industries We Empower" description="" />
      <div>
        {data.map((item, index) => (
          <SectionComponent
            key={index}
            heading={item.heading}
            description={item.description}
            image={item.image}
            index={index}
          />
        ))}
      </div>
      <ReviewsSection />
      <ContactUsSection />
      <Footer />
    </div>
  );
};

export default page;

const data = [
  {
    heading: "Full-Stack AI Solutions",
    description: `We develop end-to-end full-stack solutions with AI at the core.
From frontend interfaces to backend systems and AI integration, we handle it all.
Built for scalability, performance, and future growth.
Transform ideas into intelligent, production-ready digital products.
`,
    image: "",
  },
  {
    heading: "AI Chatbot Development",
    description: `We build intelligent AI chatbots that understand users and drive real engagement.
From customer support to sales and internal automation, our chatbots solve real business problems.
Powered by advanced language models, they continuously learn and improve.
Easily integrated across websites, apps, and enterprise platforms.
`,
    image: "",
  },
  {
    heading: "Web & Mobile Application Development",
    description: `We design and develop modern web and mobile applications for real-world use.
From MVPs to enterprise-grade platforms, we build apps that scale.
Clean UI, robust architecture, and seamless user experiences come standard.
Bring your product vision to life across web and mobile.`,
    image: "",
  },
  {
    heading: "AI Agents & Autonomous Workflows",
    description: `We create AI agents that go beyond responses — they plan, execute, and adapt.
Our autonomous agents automate complex workflows and handle decision-driven tasks.
From research to operations, we design scalable multi-agent systems.
Replace repetitive work with intelligent, self-running automation.
`,
    image: "",
  },
  {
    heading: "Chrome Extension Development",
    description: `We build fast, reliable Chrome extensions designed for productivity and automation.
From AI assistants to workflow tools, our extensions are secure and scalable.
Ideal for startups, SaaS products, and internal business solutions.
Turn everyday browsing into a powerful productivity experience.
`,
    image: "",
  },
  {
    heading: "Custom AI Integrations & Automation",
    description: `We integrate AI into your existing products and workflows with precision.
From LLM APIs to business process automation, we tailor solutions to your needs.
Reduce manual effort, increase efficiency, and unlock smarter operations.
Turn everyday systems into intelligent, automated workflows.`,
    image: "",
  },
];
