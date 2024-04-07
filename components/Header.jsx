'use client';

import React, {useState, useEffect} from 'react';
import ThemeToggler from './ThemeToggler';
import Navbar from './Navbar';
import Logo from './Logo';
import MobileNav from './MobileNav';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = window.addEventListener('scroll', () => {
      window.scrollY > 100 ? setHeader(true) : setHeader(false);
    });
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <header
      className={`${
        header ? 'py-4 bg-white shadow-lg dark:bg-navy-900' : 'py-6 dark:bg-transparent'
      } sticky top-0 z-30 transition-all ${
        pathname === '/' && 'bg-[#FAFAFA] dark:bg-navy-900'
      }`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-4">
          <Logo />
          <div className="flex items-center gap-x-6">
            <Navbar
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-gray-500 w-full"
            />
            <ThemeToggler />
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;