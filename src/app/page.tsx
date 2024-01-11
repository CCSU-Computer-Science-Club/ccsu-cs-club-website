"use client"

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { IoMdSunny, IoMdMoon } from "react-icons/io";
import Header from '../components/header'

export default function Home() {

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const className = 'dark';
    const element = document.documentElement;
    if (isDark) {
      element.classList.add(className);
    } else {
      element.classList.remove(className);
    }
  }, [isDark]);

  return (
    <main className="flex min-h-screen flex-col bg-white text-gray-500 dark:bg-black dark:text-gray-200">
      <Header/>

      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem] text-black dark:text-white">
          CCSU <span className="text-red">CS</span> Club
        </h1>
      </div>
    </main>
  );
}