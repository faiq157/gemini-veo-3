import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Film } from 'lucide-react';

interface VideoPlayerProps {
  src: string;
  onGenerateNew: () => void;
}

export function VideoPlayer({ src, onGenerateNew }: VideoPlayerProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Video is Ready!</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="aspect-video w-full overflow-hidden rounded-lg border">
          <video src={src} controls autoPlay muted loop className="w-full h-full object-cover">
            Your browser does not support the video tag.
          </video>
        </div>
      </CardContent>
      <CardFooter className="flex-col sm:flex-row gap-4">
        <Button asChild className="w-full sm:w-auto">
          <a href={src} download={`suplimax-ad-${Date.now()}.mp4`}>
            <Download className="mr-2 h-4 w-4" />
            Download Video
          </a>
        </Button>
        <Button variant="outline" onClick={onGenerateNew} className="w-full sm:w-auto">
          <Film className="mr-2 h-4 w-4" />
          Generate Another
        </Button>
      </CardFooter>
    </Card>
  );
}