import ArticleItemList from "@/components/ArticleItemList";
import ContactUsSection from "@/components/ContactUsSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { getCategorisedArticles } from "@/lib/articles";
import React from "react";

const page = () => {
  const articles = getCategorisedArticles();
  return (
    <>
      <HeroSection heading="Blogs" />
      <div className="max-w-7xl px-4 mx-auto flex flex-col gap-10">
        {articles !== null &&
          Object.keys(articles).map((article) => (
            <ArticleItemList
              key={article}
              category={article}
              // categorySlug={article}
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
