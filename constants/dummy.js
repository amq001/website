import designImage from "../public/images/designn.png";
import developmentImage from "../public/images/developmentt.png";
import ecommerceImage from "../public/images/ecommerce.png";
import fintechImage from "../public/images/fintech.png";
import healthImage from "../public/images/health.png";
import ideateImage from "../public/images/ideatee.png";
import liveImage from "../public/images/livee.png";
import logisticsImage from "../public/images/logistics.png";
import qaImage from "../public/images/qaa.png";
import supportImage from "../public/images/supportt.png";

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
    title: "Matthias Leidinger",
    description:
      "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
    slug: "matthias-leidinger",
    src: "rock.jpg",
    link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
    color: "#BBACAF",
  },
  {
    title: "Clément Chapillon",
    description:
      "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément Chapillon describes his latest highly captivating project Les rochers fauves (French for ‘The tawny rocks’).",
    slug: "clément-chapillon",
    src: "tree.jpg",
    link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
    color: "#977F6D",
  },
  {
    title: "Zissou",
    description:
      "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal, they’re encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.",
    slug: "zissou",
    src: "water.jpg",
    link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
    color: "#C2491D",
  },
];

export const websiteData = {
  hero: {},
  portfolio: {},
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
};
