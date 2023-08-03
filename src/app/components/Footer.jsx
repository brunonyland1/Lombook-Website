import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center text-teal-600 dark:text-teal-300 sm:justify-start">
            <Link
              className={`bg-clip-text text-transparent bg-gradient-to-t from-red-400 to-orange-400 font-black text-4xl`}
              href="/"
            >
              LBK
            </Link>
          </div>

          <p className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400 lg:mt-0 lg:text-right">
            Copyright &copy; 2023. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
