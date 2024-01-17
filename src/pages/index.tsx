/*
This is the home page the first page you open on the '/' route
*/


"use client";

import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Metadata from "~/components/Metadata";

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const className = "dark";
    const element = document.documentElement;
    if (isDark) {
      element.classList.add(className);
    } else {
      element.classList.remove(className);
    }
  }, [isDark]);

  return (
    <>
      <Metadata title="CSC" description="CCSU Computer Science Club" />
      <main className="flex min-h-screen flex-col bg-white text-gray-500 dark:bg-black dark:text-gray-200">
        <Header isDark={isDark} setIsDark={setIsDark} />
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-black dark:text-white sm:text-[5rem]">
            CCSU <span className="text-blue-500">CS</span> Club
          </h1>
        </div>
      </main>
    </>
  );
}
