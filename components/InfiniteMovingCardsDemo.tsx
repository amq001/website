"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import HeadingComponent from "./HeadingComponent";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="min-h-screen max-w-screen flex flex-col gap-12 items-center bg-black pt-28 overflow-hidden">
      <HeadingComponent
        heading="What Our Clients Say"
        variant="secondary"
      />
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      `A strong developer, listens well to requirements and feedbacks and communicates really well. Would definitely work with him in the future.`,
    name: "Azad Uddin",
  },
  {
    quote:
      `Excellent work! Wajeeh is extremely knowledgeable and professional. He even made suggestions that improved on our original plans.`,
    name: "Lincoln Turner",
  },
  {
    quote:
      `Awesome developer, very knowledgeable and an all around pleasure to work with. Would definitely work with him again.`,
    name: "Latifah",
  },
  {
    quote:
      `Wajeeh and Mohsin demonstrate excellent skill. They understand requirements thoroughly and performs work very accurately. There was no rework required on the project, they finished work as agreed and as expected`,
    name: "Amish",
  },
  {
    quote:
      `Great work as always`,
    name: "Imelda Fossu",
  },
  // {
  //   quote:
  //     "Excellent work! Wajeeh is extremely knowledgeable and professional. He even made suggestions that improved on our original plans.",
  //   name: "First",
  // },
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
