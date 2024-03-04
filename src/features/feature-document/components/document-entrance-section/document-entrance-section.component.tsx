import Image from 'next/image';

import { Button } from '@/components/ui/';
import { PlusCircle } from '@/components/ui/icon';

type DocumentEntranceSectionProps = {
  userFirstName: string;
  onCreateClick: () => void;
};

export const DocumentEntranceSection = ({ userFirstName, onCreateClick }: DocumentEntranceSectionProps) => {
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image src="/empty.png" height="300" width="300" alt="Empty" className="dark:hidden" />
      <Image src="/empty-dark.png" height="300" width="300" alt="Empty" className="hidden dark:block" />
      <h2 className="text-lg font-medium">Welcome to {userFirstName}&apos;s Clone Notion Kit</h2>
      <Button onClick={onCreateClick}>
        <PlusCircle className="h-4 w-4 mr-2" />
        Create a note
      </Button>
    </div>
  );
};
