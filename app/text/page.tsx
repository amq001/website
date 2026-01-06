import { InfiniteMovingCardsDemo } from "@/components/ReviewsSection";
import Marquee from "@/components/Marquee";
import { Inika } from "next/font/google";
import React from "react";

const page = () => {
  return (
    <div className="w-full flex flex-col min-h-screen bg-black text-white flex justify-center items-center">
      <InfiniteMovingCardsDemo />
    </div>
  );
};

export default page;
