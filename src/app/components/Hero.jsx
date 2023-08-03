import React from "react";

export default function Hero() {
  return (
    <main className="h-screen relative bg-hero-background bg-no-repeat bg-cover bg-bottom flex items-center">
      <div className="bg-gradient-to-b from-black/60 to-black absolute inset-0 z-[1]" />
      <div className="max-w-7xl px-5 mx-auto z-[2]">
        <div className="">
          <h1 className="text-6xl sm:text-7xl lg:text-9xl font-black block bg-clip-text text-transparent bg-gradient-to-t from-red-400 to-orange-400">
            Lombook
          </h1>
          <p className="text-white text-center text-xl sm:text-2xl lg:text-3xl">
            explore as praias{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-t from-red-400 to-orange-400">
              volcânicas
            </span>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
