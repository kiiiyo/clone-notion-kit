'use client';

import { ChevronsLeft } from '@/components/ui/icon';
import { cn } from '@/lib/utils';

import { useDocumentNavigation } from './document-navigation.hooks';

export const DocumentNavigation = () => {
  const { sidebarRef, isResetting, isMobile } = useDocumentNavigation();
  return (
    <>
      <aside
        ref={sidebarRef}
        className={cn(
          'group/sidebar h-full bg-secondary overflow-y-auto relative flex w-60 flex-col z-[99999]',
          isResetting && 'transition-all ease-in-out duration-300',
          isMobile && 'w-0',
        )}
      >
        <div
          role="button"
          className={cn(
            'h-6 w-6 text-muted-foreground rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 absolute top-3 right-2 opacity-0 group-hover/sidebar:opacity-100 transition',
            isMobile && 'opacity-100',
          )}
        >
          <ChevronsLeft className="h-6 w-6" />
        </div>
        {/* User Item */}
        <div></div>
        {/* User Item */}
        {/* Document List */}
        <div className="mt-4"></div>
        {/* Document List */}
        <div className="opacity-0 group-hover/sidebar:opacity-100 transition cursor-ew-resize absolute h-full w-1 bg-primary/10 right-0 top-0" />
      </aside>
    </>
  );
};
