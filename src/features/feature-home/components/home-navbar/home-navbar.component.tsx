'use client';

import Link from 'next/link';

import { Button, Spinner } from '@/components/ui/';
import { cn } from '@/lib/utils';

import { HomeLogo } from '../home-logo';

type HomeNavbarProps = {
  isLoading: boolean;
  isAuthenticated: boolean;
};

export const HomeNavbar = ({ isLoading, isAuthenticated }: HomeNavbarProps) => {
  return (
    <div className={cn('z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6')}>
      <HomeLogo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        {isLoading && <Spinner />}
        {!isAuthenticated && !isLoading && (
          <>
            <Button variant="ghost" size="sm">
              Log in
            </Button>
            <Button size="sm">Get Jotion free</Button>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/documents">Enter Jotion</Link>
            </Button>
          </>
        )}
      </div>
    </div>
  );
};
