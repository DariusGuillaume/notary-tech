import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/Sheet';
import { AlignJustify } from 'lucide-react';
import React from 'react';
import Logo from './Logo';
import Navbar from './Navbar';
import { useTheme } from 'next-themes';

const MobileNav = () => {
  const { theme } = useTheme();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" size={24} />
      </SheetTrigger>
      <SheetContent className={theme === 'dark' ? 'bg-navy-900' : 'bg-white'}>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo />
            <Navbar
              containerStyles="flex flex-col items-center gap-y-6"
              linkStyles={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;