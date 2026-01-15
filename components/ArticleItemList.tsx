import React from "react";
import { ArticleItem } from "@/types";
import Link from "next/link";
import Image from "next/image";

interface Props {
  category: string;
  articles: ArticleItem[];
}

const ArticleItemList = ({ category, articles }: Props) => {
  console.log(articles,"ARticles")
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-4xl text-white font-semibold">{category}</h2>
      <div className="flex flex-col gap-3 text-lg">
        {articles.map((article, id) => (
          <Link
            href={`/blogs/${article.id}`}
            key={id}
            className="text-white w-[300px] hover:text-amber-400 transition duration-300"
          >
            <div className="flex flex-col relative gap-2 rounded-2xl overflow-hidden p-2">
              <Image src={article.image} alt={article.title} width={300} height={200} className="opacity-60 transition ease-in-out duration-300 hover:opacity-40" />
              <div className="absolute ">
            <p className="text-md font-bold">{article.title}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ArticleItemList;
