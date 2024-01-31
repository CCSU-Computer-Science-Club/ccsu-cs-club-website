
import React from "react";
import Link from 'next/link';
import { IoMdSunny, IoMdMoon } from 'react-icons/io';

const Header = ({ isDark, setIsDark }: { isDark: boolean, setIsDark: React.Dispatch<React.SetStateAction<boolean>> }) => {

  return (
    <header className="p-4 text-black dark:text-white">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold text-black dark:text-white">
          
            <span className="text-blue-500">CS</span> Club
          
        </Link>
        <div className="flex gap-4">
          <Link
            href="/projects"
            className="text-gray-500 hover:text-black dark:text-gray-300 dark:hover:text-white">
            
              Projects
            
          </Link>
          <Link
            href="/team"
            className="text-gray-500 hover:text-black dark:text-gray-300 dark:hover:text-white">
            
              Team
            
          </Link>
          <Link
            href="/contact"
            className="text-gray-500 hover:text-black dark:text-gray-300 dark:hover:text-white">
            
              Contact
            
          </Link>
          <Link
            href="/join"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-black dark:text-gray-300 dark:hover:text-white">
            
              Join
            
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