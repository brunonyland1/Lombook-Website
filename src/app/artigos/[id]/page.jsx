"use client";
import Image from "next/image";
import React, { useState } from "react";
import articles from "../../data/articles";
import Link from "next/link";

export default function ArtigoSobre({ params }) {
  const id = parseInt(params.id);
  const artigo = articles.find((artigo) => artigo.id === id);

  if (!artigo) {
    return (
      <section className="w-full h-[calc(100vh-104px)] bg-zinc-900 text-red-400">
        <div className="max-w-7xl px-5 mx-auto h-full">
          <div className="flex justify-center items-center h-full flex-col gap-5 ">
            <h2 className="text-center  text-5xl font-bold">
              Artigo não encontrado.
            </h2>
            <div className="flex gap-3">
              <Link
                className="text-white py-2 px-4 w-fit self-center mt-4 sm:mt-0
              bg-gradient-to-tr from-red-400 to-orange-400 
              hover:bg-gradient-to-tr hover:from-orange-500 hover:to-red-500
              "
                href="/"
              >
                Início
              </Link>
              <Link
                className="text-white py-2 px-4 w-fit self-center mt-4 sm:mt-0
              bg-gradient-to-tr from-red-400 to-orange-400 
              hover:bg-gradient-to-tr hover:from-orange-500 hover:to-red-500
              "
                href="/artigos"
              >
                Artigos
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section className="h-full md:h-[calc(100vh-104px)] bg-zinc-900">
        <div className="max-w-7xl h-full px-5 mx-auto pt-20">
          <div className="flex flex-col h-96 sm:flex-row">
            <div className="w-full relative flex-1  ">
              <Image
                className="bg-cover"
                fill={true}
                src={artigo.image}
                alt="imagem qualquer"
              />
            </div>
            <div className=" h-full flex-1 flex text-center items-center justify-center bg-clip-text text-transparent bg-gradient-to-t from-red-400 to-orange-400 font-bold text-4xl">
              {artigo.title}
            </div>
          </div>
          <div className="pt-10 text-white">{artigo.body}</div>
          <div className="flex py-10 gap-4 items-center justify-center">
            <Link
              className="text-white py-2 px-4 w-fit self-center mt-4 sm:mt-0
              bg-gradient-to-tr from-red-400 to-orange-400 
              hover:bg-gradient-to-tr hover:from-orange-500 hover:to-red-500
              "
              href={`/artigos/${id - 1}`}
            >
              Anterior
            </Link>
            <Link
              className="text-white py-2 px-4 w-fit self-center mt-4 sm:mt-0
              bg-gradient-to-tr from-red-400 to-orange-400 
              hover:bg-gradient-to-tr hover:from-orange-500 hover:to-red-500
              "
              href={`/artigos/${id + 1}`}
            >
              Próximo
            </Link>
          </div>
        </div>
      </section>
    );
  }
}
