import ContactUsSection from "@/components/ContactUsSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { getSameCategoryArticles } from "@/lib/articles";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const sameCategoryArticles = getSameCategoryArticles(slug);
  return (
    <>
      <HeroSection heading={`${sameCategoryArticles[0].category} Blogs`} />
      <div className="max-w-7xl mx-auto px-4 my-4 md:my-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
          {sameCategoryArticles.map((article, id) => (
            <Link
              href={`/blogs/${article.id}`}
              key={id}
              className="text-gray-300 hover:text-white border border-gray-500 hover:border-white rounded-2xl overflow-hidden w-full h-[calc(40vh-6px)] transition duration-300"
            >
              <div className="flex flex-col h-full relative gap-2 p-2">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="opacity-60 h-full w-full object-cover transition ease-in-out duration-300 hover:opacity-40"
                />
                <div className="absolute ">
                  <p className="text-md font-bold">{article.title}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <ReviewsSection />
      <ContactUsSection />
      <Footer />
    </>
  );
};

export default page;
