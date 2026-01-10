import React from "react";
import HorizontalScroll from "./HorizontalScroll";
import HeadingComponent from "./HeadingComponent";

type Props = {
  heading?: string;
  description?: string;
  cards?: {
    title: string;
    description: string;
    image?: any;
  }[];
};

const ServicesSection = ({ heading, description, cards }: Props) => {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      <div className="flex justify-center items-center ">
        <HeadingComponent
          heading={heading || "Our Proven Process"}
          description={description}
          variant="secondary"
          textCentered={true}
        />
      </div>
      <HorizontalScroll cards={cards} />
    </div>
  );
};

export default ServicesSection;
