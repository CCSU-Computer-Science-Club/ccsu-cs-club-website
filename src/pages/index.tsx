/*
This is the home page the first page you open on the '/' route
*/


"use client";

import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "~/components/Footer";
import Metadata from "~/components/Metadata";
import Link from 'next/link';

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
        <div className="flex flex-col items-center justify-center gap-12 px-4 py-16 m-auto">
          <h1 className="text-5xl font-extrabold tracking-tight text-black dark:text-white sm:text-[5rem] text-center">
            CCSU <span className="text-blue-500">CS</span> Club
          </h1>
          <Link href="/join">
            <a className="text-xl font-semibold text-black dark:text-white">
              <span className="text-blue-500 underline">Join now</span>
            </a>
          </Link>
        </div>
        <Footer/>
      </main>
    </>
  );
}
