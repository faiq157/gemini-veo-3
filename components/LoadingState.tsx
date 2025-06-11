import { Card, CardContent } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

export function LoadingState() {
  return (
    <Card className="w-full flex items-center justify-center p-12">
      <CardContent className="text-center">
        <Loader2 className="h-12 w-12 mx-auto animate-spin text-blue-500" />
        <p className="mt-4 text-lg font-medium">Generating your video...</p>
        <p className="text-muted-foreground">This may take a moment. Please wait.</p>
      </CardContent>
    </Card>
  );
}