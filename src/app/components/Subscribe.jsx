import React from "react";

export default function Subscribe() {
  return (
    <section id="newsletter" className="bg-zinc-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-5">
        <div>
          <h2 className="text-center text-5xl sm:text-6xl lg:text-7xl">
            Newsletter
          </h2>
        </div>
        <div className="bg-zinc-900 mt-14 p-5 sm:p-10 lg:p-16 flex flex-col gap-4 items-center justify-center">
          <h4 className="text-center sm:text-lg lg:text-xl">
            Inscreva-se em nossa newsletter e fique por dentro de todas as
            novidades!
          </h4>
          <form
            className="flex flex-col max-w-2xl w-full sm:flex-row sm:gap-3 "
            action="form"
          >
            <input
              className="p-2 bg-zinc-950 placeholder-zinc-400 sm:flex-1 lg:w-4/12"
              type="email"
              placeholder="Seu melhor e-mail."
            />
            <button
              className="py-2 px-4 w-fit self-center mt-4 sm:mt-0
              bg-gradient-to-tr from-red-400 to-orange-400 
              hover:bg-gradient-to-tr hover:from-orange-500 hover:to-red-500
              "
              type="submit"
            >
              Increver-se
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
