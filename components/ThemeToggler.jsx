'use client';

import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { Button } from './ui/Button';
import { useTheme } from 'next-themes';

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div>
      <Button onClick={toggleTheme}>
        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-yellow-300" />
      </Button>
    </div>
  );
};

export default ThemeToggler;