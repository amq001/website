import ArticleItemList from "@/components/ArticleItemList";
import ContactUsSection from "@/components/ContactUsSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { getCategorisedArticles } from "@/lib/articles";
import React from "react";

const page = () => {
  const articles = getCategorisedArticles();
  console.log(articles);

  return (
    <>
      <HeroSection heading="Blogs" description="" />
      <div className="max-w-7xl px-4 mx-auto md:grid md:grid-cols-2 flex flex-col gap-10">
        {articles !== null &&
          Object.keys(articles).map((article) => (
            <ArticleItemList
              key={article}
              category={article}
              articles={articles[article]}
            />
          ))}
      </div>
      <ReviewsSection />
      <ContactUsSection />
      <Footer />
    </>
  );
};

export default page;
