import React from "react";
import articles from "../data/articles";
import ArticlesCard from "../components/ArticlesCard";

export default function Articles() {
  return (
    <section
      id="artigos"
      className="bg-article-background bg-cover bg-no-repeat bg-center py-20 h-full bg-zinc-800 relative"
    >
      <div className="bg-gradient-to-b from-black via-black/50 to-black absolute inset-0 z-[1]" />
      <div className="max-w-7xl mx-auto relative px-5 z-[2]">
        <div className="w-full">
          <div className="text-white text-center text-5xl sm:text-6xl lg:text-7xl">
            <h2>Nossos Artigos</h2>
          </div>
          <div className=" mt-14 grid gap-y-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
            {articles.map((item) => (
              <ArticlesCard
                key={item.id}
                id={item.id}
                imageSrc={item.image}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
