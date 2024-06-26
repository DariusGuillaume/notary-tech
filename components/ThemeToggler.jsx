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
      <Button variant = 'outline' size ='icon' onClick={toggleTheme} className="bg-slate-500 hover:bg-slate-600 border-black">
        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-white" />
      </Button>
    </div>
  );
};

export default ThemeToggler;