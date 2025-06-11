'use client';

import { LoadingState } from '@/components/LoadingState';
import { SuplimaxForm } from '@/components/SuplimaxForm';
import { VideoPlayer } from '@/components/VideoPlayer';
import { useState } from 'react';

export default function SuplimaxPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateVideo = async (formData: any) => {
    setIsLoading(true);
    setVideoUrl(null);
    setError(null);

    try {
      const response = await fetch('/api/generate-video/suplimax', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Video generation failed.');
      }

      const data = await response.json();
      setVideoUrl(data.videoUrl);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  const renderContent = () => {
    if (isLoading) {
      return <LoadingState />;
    }
    if (videoUrl) {
      return <VideoPlayer src={videoUrl} onGenerateNew={() => setVideoUrl(null)} />;
    }
    return <SuplimaxForm onSubmit={handleGenerateVideo} isLoading={isLoading} />;
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Suplimax Marketing Video Generator</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Define your product features and generate a dynamic ad in seconds.
        </p>
      </div>

      <div className="mt-8 mx-auto max-w-2xl">
        {renderContent()}
        {error && !isLoading && (
          <p className="text-red-500 text-center mt-4">Error: {error}</p>
        )}
      </div>
    </main>
  );
}