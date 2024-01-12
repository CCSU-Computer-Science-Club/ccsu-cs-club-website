"use client";

import React, { useState, useEffect } from "react";
import Header from '../components/Header'

export default function ContactPage() {

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
      <Header isDark={isDark} setIsDark={setIsDark}/>

      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem] text-black dark:text-white">
          Contact
        </h1>
      </div>
    </main>
  );
}