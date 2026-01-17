import React from "react";
import { getArticleData, getRelatedArticles } from "@/lib/articles";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import ContactUsSection from "@/components/ContactUsSection";
import Footer from "@/components/Footer";
import { ReviewsSection } from "@/components/ReviewsSection";
import Image from "next/image";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const articleData = await getArticleData(slug);
  const relatedArticles = getRelatedArticles(articleData.category, slug);
  return (
    <>
      <HeroSection heading={articleData.title} />
      <div className="mx-auto max-w-7xl px-4 flex flex-col gap-5">
        <div className="flex justify-between my-10">
          <Link
            href={"/blogs"}
            className="flex flex-row gap-1 text-white place-items-center"
          >
            <ArrowLeftIcon width={20} />
            <p>Back</p>
          </Link>
          <p className="text-white">{articleData.date.toString()}</p>
        </div>
        <article
          dangerouslySetInnerHTML={{ __html: articleData.contentHtml }}
          className="article"
        />
        <div className="flex flex-col gap-4">
          <h1 className="text-white text-xl md:text-3xl  font-medium">
            Read more {articleData.category} related blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
            {relatedArticles.slice(0,3).map((article, id) => (
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
      </div>
      <ReviewsSection />
      <ContactUsSection />
      <Footer />
    </>
  );
};

export default page;
