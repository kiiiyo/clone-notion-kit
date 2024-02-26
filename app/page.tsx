import { Button } from '@/components/ui/button';
import { Sample } from '@/features';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button>Sample</Button>
      <Sample />
    </main>
  );
}
