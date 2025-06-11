// app/api/generate-video/real-estate/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { generateVideoWithVeo3 } from '@/services/gemini';

export async function POST(req: NextRequest) {
  try {
    const { address, price, bedrooms, bathrooms, sqft, features, tourStyle } = await req.json();
    if (!address || !price || !bedrooms || !tourStyle) {
      return NextResponse.json({ error: 'Missing required property details' }, { status: 400 });
    }
    const videoPrompt = `Generate a 60-second, ${tourStyle}-style virtual video tour for the property at ${address}.
    - Opening shot: A sweeping drone shot approaching the luxury estate.
    - Key Scenes:
      1. Walk through the elegant entrance. If the features mention a "grand staircase", showcase it prominently.
      2. Showcase the spacious living areas with modern design, highlighting any specific features mentioned like "${features}".
      3. A quick tour of a master bedroom and a luxurious en-suite bathroom.
      4. Highlight the gourmet kitchen's features.
      5. Pan across any mentioned outdoor areas like "landscaped grounds".
      6. End with an exterior shot at dusk, with all the lights on, showing any mentioned garage spaces.
    - On-screen text overlays should briefly state: ${bedrooms} Beds, ${bathrooms} Baths, ${sqft.toLocaleString()} Sq. Ft.
    - The video should have a sophisticated, ambient soundtrack matching the style.
    - Conclude with the address and price: ${address} | ${price}.`;

    const mockVideoUrl = '/mock-videos/real-estate-tour.mp4';
    const result = await generateVideoWithVeo3({ prompt: videoPrompt }, mockVideoUrl);
    
    return NextResponse.json(result);

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to generate video' }, { status: 500 });
  }
}