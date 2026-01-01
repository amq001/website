import ContactUsSection from "@/components/ContactUsSection";
import Footer from "@/components/Footer";
import HeroSection3 from "@/components/HeroSection3";
import SectionComponent from "@/components/SectionComponent";

const page = () => {
  return (
    <div className="smooth-scroll">
      <HeroSection3
        heading={"Our Services"}
        description="Explore our diverse range of services, where we deliver innovative, customized solutions tailored to the unique needs of each client.Whether it's advanced technology implementations or strategic insights, our offerings reflect a commitment to seamless integration and exceptional performance. "
      />
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
      <ContactUsSection />
      <Footer />
    </div>
  );
};

export default page;

// const data = Array(6)
//   .fill()
//   .map((_, index) => ({
//     heading: "HELLO",
//     description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
//           adipisci, corporis mollitia labore ducimus fuga consectetur id, magni,
//           quibusdam magnam nesciunt soluta deleniti minima laudantium rem harum
//           voluptatem corrupti fugit sed! Accusantium maiores quaerat quo, culpa
//           dolorem sit repellat autem iure voluptatibus. Autem sed saepe delectus
//           dolore vero iste distinctio.`,
//     image: "",
//     index: index,
//   }));

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
