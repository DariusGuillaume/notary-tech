import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';

const Logo = () => {
  const { theme } = useTheme();

  return (
    <Link href="/">
      {theme === 'light' ? (
        <Image
          src="/assets/vlt_logo_light.svg"
          alt="Light Logo"
          width={135}
          height={50}
          className="rounded-lg"
        />
      ) : (
        <Image
          src="/assets/vlt_logo.svg"
          alt="Dark Logo"
          width={135}
          height={50}
          className="rounded-lg"
        />
      )}
    </Link>
  );
};

export default Logo;