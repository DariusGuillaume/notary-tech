import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';

const Logo = () => {
  const { theme } = useTheme();
  const logoAlt = 'VLT Logo';

  return (
    <Link href="/">
      {theme !== 'dark' ? (
        <Image
          src="/assets/vlt_logo_light.svg"
          alt={logoAlt}
          width={135}
          height={50}
          className="rounded-lg"
        />
      ) : (
        <Image
          src="/assets/vlt_logo.svg"
          alt={logoAlt}
          width={135}
          height={50}
          className="rounded-lg"
        />
      )}
    </Link>
  );
};

export default Logo;