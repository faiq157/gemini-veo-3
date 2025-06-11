# AI Video Generation Showcase (Google Veo3 Demo)

>  *This project is a conceptual demonstration using mock APIs. The Google Veo3 API is not yet publicly available.*

## Overview

This is a full-stack web application built to showcase the future of AI-generated video content using Google’s Veo3 model. The demo highlights two specific use cases:

1. **Marketing Ad Generator for “Suplimax” Energy Drink**
2. **Real Estate Virtual Tour Generator**

Since the actual API isn't publicly available, a high-fidelity simulation of the API is included to demonstrate the full development architecture, UX, and backend prompt engineering capabilities.

---

##  Key Features

###  Two Use Cases
- **Marketing Ad Generator:** Input key features for a fictional *Suplimax* energy drink to generate a 15-second commercial.
- **Real Estate Tour Generator:** Input property details to produce a 60-second virtual house tour.

###  Dynamic & Interactive UI
- Built with **Next.js 14**, **Tailwind CSS**, and **shadcn/ui**
- Form validation via **React Hook Form** + **Zod**
- Lottie animations integrated with **react-lottie-player**
- 
###  Advanced Architecture
- Mocked API layer ready for real Veo3 integration
- Asynchronous backend design
- Blueprint for job status polling via job ID

---

## 🛠️ Technology Stack

| Area              | Technology                            |
|-------------------|----------------------------------------|
| Framework         | Next.js 14 (App Router)                |
| Language          | TypeScript                             |
| Frontend          | React                                  |
| Backend           | Node.js (via Next.js API Route Handlers)|
| Styling           | Tailwind CSS                           |
| UI Components     | shadcn/ui                              |
| Form Management   | React Hook Form & Zod                  |
| Animations        | Lottie via `react-lottie-player`       |
                           

---

##  Project Architecture

```bash
/
├── app/
│   ├── api/generate-video/
│   │   ├── real-estate/route.ts
│   │   └── suplimax/route.ts
│   ├── real-estate/page.tsx
│   ├── suplimax/page.tsx
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   │   ├── ui/
│   │   ├── Header.tsx
│   │   ├── LottieAnimation.tsx
│   │   ├── RealEstateForm.tsx
│   │   └── VideoPlayer.tsx
├── public/
│   └── mock-videos/
└── services/
    └── gemini.ts
```

## Clone the Repo
```bash
git clone https://github.com/faiq157/gemini-veo-3.git
cd gemini-veo-3
```
## Install Dependencies
```bash 
npm install 
```
## Set Up Environment Variables

```bash 
# For real API integration (optional)
# GCP_PROJECT_ID="your-gcp-project-id"
# GCP_LOCATION="us-central1"
# GCS_OUTPUT_BUCKET="your-gcs-bucket-name"
# GOOGLE_APPLICATION_CREDENTIALS="./path/to/your/service-account-key.json"
```

## Run the Development Server
```bash
pnpm dev
# or
npm run dev
