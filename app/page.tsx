"use client"
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {Card, CardDescription, CardFooter, CardHeader, CardTitle} from '@/components/ui/card'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
export default function HomePage() {
  const suplimaxAnimationUrl = "https://lottie.host/c1b9092f-93b2-41b9-8734-dfd39eb5ef8a/uw1Jhgj9c9.json";
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          AI Video Generation Showcase
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Explore the power of Google's Gemini (Veo3) with two interactive demonstrations. Select a use case below to get started.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
        <Card>
          <CardHeader className="items-center text-center">
             <DotLottieReact
              src="https://lottie.host/c1b9092f-93b2-41b9-8734-dfd39eb5ef8a/uw1Jhgj9c9.json"
              loop
              autoplay
            />
            <CardTitle className="mt-4">Marketing Video Generator</CardTitle>
            <CardDescription>
              Create a high-energy ad for the "Suplimax" energy drink. Input product features and let AI do the rest.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/suplimax">Generate Suplimax Ad</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="items-center text-center">
              <DotLottieReact
      src="https://lottie.host/f6f97408-c48f-407f-b850-24b19021f0a9/qgUroWGzG0.lottie"
      loop
      autoplay
    />
            <CardTitle className="mt-4">Real Estate Video Tour</CardTitle>
            <CardDescription>
              Generate a virtual tour for a luxury Beverly Hills property from a real listing.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/real-estate">Generate Property Tour</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}

// // NOTE: You can create a file like `app/components/Icons.tsx` for these SVGs
// // For brevity, here are placeholder components.
// const EnergyDrinkIcon = () => <svg ... />; // SVG for an energy drink can
// const RealEstateIcon = () => <svg ... />; // SVG for a house