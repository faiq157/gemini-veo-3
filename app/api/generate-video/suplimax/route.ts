import { NextRequest, NextResponse } from 'next/server';
import { generateVideoWithVeo3 } from '@/services/gemini';

export async function POST(req: NextRequest) {
  try {
    const { features, tone, targetAudience, videoStyle } = await req.json();

    // Directly create the video prompt without image reference
    const videoPrompt = `Create a 15-second, high-energy marketing video for the "Suplimax" energy drink.
    - Style: ${videoStyle}, cinematic.
    - Tone: ${tone}.
    - Target Audience: ${targetAudience}.
    - Start with a close-up reveal of the "Suplimax" can.
    - Feature quick cuts of people achieving peak performance after drinking it: an athlete scoring a goal, a coder solving a complex problem on a futuristic interface, a musician on stage.
    - Key features to visually highlight: "${features}".
    - Use dynamic camera movements, lens flares, and a driving electronic soundtrack.
    - End with the "Suplimax" logo and the tagline: "Unlock Your Potential."`;

    const result = await generateVideoWithVeo3({ prompt: videoPrompt });
    return NextResponse.json(result);

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to generate video' }, { status: 500 });
  }
}