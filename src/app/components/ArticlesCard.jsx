import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ArticlesCard({ id, imageSrc, title, description }) {
  return (
    <Link
      href={`artigos/${id}`}
      className="cursor-pointer w-[350px] h-[400px] rounded bg-zinc-900 "
      key={id}
    >
      <div className="w-full h-56 relative">
        <Image
          className="rounded"
          src={imageSrc}
          fill={true}
          alt="Article image"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className=" text-white p-2 flex flex-col gap-3 justify-center items-center">
        <h3 className="font-bold text-xl">{title}</h3>
        <div>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
}
