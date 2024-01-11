import React, { useState } from 'react';
import Link from 'next/link';
import { IoMdSunny, IoMdMoon } from 'react-icons/io';

const Header = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <header className="p-4 text-black dark:text-white">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <a className="text-xl font-semibold text-black dark:text-white">
            CS Club
          </a>
        </Link>
        <div className="flex gap-4">
          <Link href="/projects">
            <a className="text-gray-500 hover:text-black dark:text-gray-300 dark:hover:text-white">
              Projects
            </a>
          </Link>
          <Link href="/team">
            <a className="text-gray-500 hover:text-black dark:text-gray-300 dark:hover:text-white">
              Team
            </a>
          </Link>
          <Link href="/contact">
            <a target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black dark:text-gray-300 dark:hover:text-white">
              Contact
            </a>
          </Link>
          <Link href="/join">
            <a target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black dark:text-gray-300 dark:hover:text-white">
              Join
            </a>
          </Link>
          <button
            className="text-gray-500 hover:text-black dark:text-gray-300 dark:hover:text-white"
            onClick={() => setIsDark(!isDark)}
          >
            {isDark ? <IoMdSunny /> : <IoMdMoon />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;