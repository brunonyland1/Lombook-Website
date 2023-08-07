"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, HomeIcon, Newspaper, MailCheck, Mailbox } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [color, setColor] = useState("bg-transparent");

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY < 200) {
        setColor(color);
      } else {
        setColor("bg-zinc-950");
      }
    };

    window.addEventListener("scroll", changeColor);
  }, [color]);

  const handleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const menuList = [
    {
      key: "Sobre",
      title: "Sobre",
      link: "#sobre",
      icon: <HomeIcon size={32} />,
    },
    {
      key: "Artigos",
      title: "Artigos",
      link: "/artigos",
      icon: <Newspaper size={32} />,
    },
    {
      key: "Newsletter",
      title: "Newsletter",
      link: "/#newsletter",
      icon: <Mailbox size={32} />,
    },
    {
      key: "Login",
      title: "Login",
      link: "#login",
      icon: <MailCheck size={32} />,
    },
  ];

  return (
    <nav className={`w-full z-50 h-20 ${color} fixed top-0 left-0`}>
      <div className="max-w-7xl flex mx-auto px-5 justify-between items-center h-full">
        <div>
          <Link
            className={`bg-clip-text text-transparent bg-gradient-to-t from-red-400 to-orange-400 font-black text-4xl`}
            href="/"
          >
            LBK
          </Link>
        </div>
        <div className="block sm:hidden">
          <Menu onClick={handleMenu} size={32} className={`text-white`} />
        </div>
        <ul className="hidden sm:drop-shadow-md sm:flex sm:space-x-5 sm:items-center sm:justify-center">
          {menuList.map((item) => (
            <li
              key={item.key}
              className="last:py-1 last:px-2
            last:bg-gradient-to-tr last:from-red-400 last:to-orange-400 
            last:hover:bg-gradient-to-tr last:hover:from-orange-500 last:hover:to-red-500
            "
            >
              <Link
                href={item.link}
                className={`text-white font-normal hover:border-b hover:border-orange-500 text-xl`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <ul
          className={
            isMenuOpen
              ? "flex flex-col space-y-7 justify-center items-center absolute top-0 left-0 w-full h-screen text-5xl bg-zinc-900 text-white gap-5 ease-in duration-300"
              : "flex flex-col space-y-7 justify-center items-center absolute -top-[1999px] left-0 w-full h-screen text-5xl bg-zinc-900 text-white gap-5 ease-in duration-300"
          }
        >
          <X
            onClick={handleMenu}
            size={32}
            className="absolute top-6 right-5"
          />
          {menuList.map((item) => (
            <li key={item.key}>
              <Link
                onClick={handleMenu}
                href={item.link}
                className="flex gap-3 items-center"
              >
                {item.icon}
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
