'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';

export default function ThemeProvider({ children, ...props }) {
  return (
    <NextThemesProvider {...props} attribute="class">
      {children}
    </NextThemesProvider>
  );
}