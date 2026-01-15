import React from "react";
import { ArticleItem } from "@/types";
import Link from "next/link";
import Image from "next/image";

interface Props {
  category: string;
  articles: ArticleItem[];
}

const ArticleItemList = ({ category, articles }: Props) => {
  console.log(articles, "ARticles");
  return (
    <div className="flex flex-col gap-5 my-8">
      <div className="flex justify-between items-center w-full gap-2 flex-wrap">
      <h2 className="text-3xl text-white font-semibold">{category}</h2>
      <Link href={category}>
      <p className="text-white">Read more {category} related blogs</p>
      </Link>

      </div>
      <div className="flex flex-col md:grid md:grid-cols-2 gap-3 h-full text-lg">
        {articles.slice(0,1).map((article, id) => (
          <Link
            href={`/blogs/${article.id}`}
            key={id}
            className="text-gray-300 hover:text-white w-full border border-gray-500 hover:border-white rounded-2xl overflow-hidden h-[60vh] transition duration-300"
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
        <div className="flex flex-col gap-2">
          {articles.slice(1, 3).map((article, id) => (
            <Link
              href={`/blogs/${article.id}`}
              key={id}
              className="text-gray-300 hover:text-white border border-gray-500 hover:border-white rounded-2xl overflow-hidden w-full h-[calc(30vh-6px)] transition duration-300"
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
  );
};

export default ArticleItemList;
