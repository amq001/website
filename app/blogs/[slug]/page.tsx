import React from "react";
import { getArticleData } from "@/lib/articles";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import ContactUsSection from "@/components/ContactUsSection";
import Footer from "@/components/Footer";
import { ReviewsSection } from "@/components/ReviewsSection";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const {slug} = await params;
  const articleData = await getArticleData(slug);
  console.log(slug,"SLUUUUUU")
//   console.log(articleData,"--- Article Data ---")
  
  return (
    <>
    <HeroSection heading={articleData.title} description="" />
    <div className="mx-auto max-w-7xl flex flex-col gap-5">
      <div className="flex justify-between my-10">
        <Link href={"/blogs"} className="flex flex-row gap-1 text-white place-items-center">
          <ArrowLeftIcon width={20} />
          <p>back to home</p>
        </Link>
        <p className="text-white">{articleData.date.toString()}</p>
      </div>
      <article dangerouslySetInnerHTML={{ __html: articleData.contentHtml }} className="article" />
    </div>
    <ReviewsSection />
    <ContactUsSection />
    <Footer />
    </>
  );
};

export default page;
