'use client';

import { useState } from 'react';
import { RealEstateForm } from '@/components/RealEstateForm';
import { VideoPlayer } from '@/components/VideoPlayer';
import { LoadingState } from '@/components/LoadingState';

export default function RealEstatePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateVideo = async (formData: { tourStyle: string }) => {
    setIsLoading(true);
    setVideoUrl(null);
    setError(null);

    try {
      const response = await fetch('/api/generate-video/real-estate', {
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
      // For the download, we can make the filename more specific
      const downloadFilename = `tour-12012-crest-ct-${Date.now()}.mp4`;
      return <VideoPlayer src={videoUrl} onGenerateNew={() => setVideoUrl(null)} downloadFilename={downloadFilename} />;
    }
    return <RealEstateForm onSubmit={handleGenerateVideo} isLoading={isLoading} />;
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Real Estate Video Tour Generator</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Generate a beautiful virtual tour for a luxury Beverly Hills property.
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