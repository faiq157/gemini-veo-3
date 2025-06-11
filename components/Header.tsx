import Link from 'next/link';
import { Video } from 'lucide-react';

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <Video className="h-6 w-6 text-blue-500" />
          <span>Veo3 Demo</span>
        </Link>
        <nav className="flex items-center gap-4 text-sm font-medium">
          <Link href="/suplimax" className="text-muted-foreground transition-colors hover:text-foreground">
            Suplimax Ad
          </Link>
          <Link href="/real-estate" className="text-muted-foreground transition-colors hover:text-foreground">
            Real Estate Tour
          </Link>
        </nav>
      </div>
    </header>
  );
}