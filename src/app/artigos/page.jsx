import React from "react";
import ArticlesCard from "../components/ArticlesCard";
import articles from "../data/articles";

export default function ArtigosPage() {
  return (
    <section className="w-full py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto h-full">
        <div className="h-96">
          <div className="w-full h-full flex items-center justify-center">
            <h1 className="text-center text-6xl sm:text-7xl lg:text-8xl font-black block bg-clip-text text-transparent bg-gradient-to-t from-red-400 to-orange-400">
              Nossos Artigos
            </h1>
          </div>
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
    </section>
  );
}
