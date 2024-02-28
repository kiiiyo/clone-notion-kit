import Image from 'next/image';
import { Poppins } from 'next/font/google';

import { cn } from '@/lib/utils';

const font = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'],
});

export const HomeLogo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image src="/logo.svg" height="24" width="24" alt="Logo" className="dark:hidden" />
      <Image src="/logo-dark.svg" height="24" width="24" alt="Logo" className="hidden dark:block" />
      <p className={cn('font-semibold w-48', font.className)}>Notion Clone Kit</p>
    </div>
  );
};
