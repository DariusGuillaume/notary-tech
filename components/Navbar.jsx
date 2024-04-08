import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { path: '/', name: 'Home' },
  { path: '/#about', name: 'About' },
  { path: '/services', name: 'Services' },
  { path: '/contact', name: 'Contact' }
];

const Navbar = ({ containerStyles, linkStyles, underlineStyles }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [hash, setHash] = useState("");

  useEffect(() => {
    setHash(window.location.hash);
  }, []);

  const handleClick = (e, path) => {
    if (path === '/#about') {
      e.preventDefault();
      if (pathname !== '/') {
        router.push('/#about');
      } else {
        const aboutSection = document.querySelector('#about');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  };

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        const isActive = link.path === '/#about'
          ? hash === '#about'
          : pathname === link.path && link.path !== '/';

        return (
          <Link href={link.path} key={index} className={`${linkStyles} ${isActive ? 'text-blue-600' : ''}`}>
            <motion.span
              initial={{ y: 0, color: 'inherit' }}
              whileHover={{
                y: -2,
                color: 'rgb(37, 99, 235)',
                transition: { duration: 0.2 },
              }}
              onClick={(e) => handleClick(e, link.path)}
            >
              {link.name}
            </motion.span>
            {isActive && (
              <motion.span layoutId="underline" className={`${underlineStyles}`} />
            )}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;