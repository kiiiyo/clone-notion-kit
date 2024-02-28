'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { Button, Spinner } from '@/components/ui/';

type HomeHeaderProps = {
  isLoading: boolean;
  isAuthenticated: boolean;
};

export const HomeHeader = ({ isLoading, isAuthenticated }: HomeHeaderProps) => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas, Documents, & Plans. Unified. Welcome to <span className="underline">Notion Clone Kit</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Notion Clone Kit is the connected workspace where <br />
        better, faster work happens.
      </h3>
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            Enter Notion Clone Kit
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <Button>
          Get Notion Clone Kit free
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      )}
    </div>
  );
};
