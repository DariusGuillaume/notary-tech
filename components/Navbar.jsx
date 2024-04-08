import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
  { path: '/services', name: 'Services' },
  { path: '/contact', name: 'Contact' }
];

const Navbar = ({ containerStyles, linkStyles, underlineStyles }) => {
  const pathname = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${linkStyles} ${
              pathname === link.path ? 'text-blue-600' : ''
            }`}
          >
            <motion.span
              initial={{ y: 0, color: 'inherit' }}
              whileHover={{
                y: -2,
                color: 'rgb(37, 99, 235)',
                transition: { duration: 0.2 },
              }}
            >
              {link.name}
            </motion.span>
            {link.path === pathname && (
              <motion.span
                layoutId="underline"
                className={`${underlineStyles}`}
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;