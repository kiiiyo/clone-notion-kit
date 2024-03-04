import { DocumentNavigation } from '../document-navigation';
import { DocumentEntranceSection } from '../document-entrance-section';

export const DocumentRootPage = () => {
  return (
    <div className="h-full flex dark:bg-900">
      <DocumentNavigation />
      <main className="flex-1 h-full overflow-y-auto">
        <>
          {/* SearchCommand */}
          <DocumentEntranceSection userFirstName="test" onCreateClick={() => {}} />
        </>
      </main>
    </div>
  );
};
