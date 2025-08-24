import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // Check if Foundation API is available
    const foundationApiUrl = process.env.FOUNDATION_API_URL;

    if (foundationApiUrl) {
      try {
        const response = await fetch(foundationApiUrl);
        if (response.ok) {
          const data = await response.json();
          return NextResponse.json({
            source: 'foundation',
            current: data.current || 0,
            goal: parseInt(process.env.NEXT_PUBLIC_DONATION_GOAL || '5000'),
            ...data
          });
        }
      } catch (error) {
        console.warn('Foundation API unavailable, falling back to local data:', error);
      }
    }

    // Fallback to local JSON file
    try {
      const dataPath = path.join(process.cwd(), 'data', 'dons.json');
      const jsonData = fs.readFileSync(dataPath, 'utf8');
      const data = JSON.parse(jsonData);

      return NextResponse.json({
        source: 'Cagnotte Fondation de France',
        goal: parseInt(process.env.NEXT_PUBLIC_DONATION_GOAL || '5000'),
        ...data
      });
    } catch {
      // If no local file exists, return default values
      return NextResponse.json({
        source: 'Cagnotte Fondation de France',
        current: 0, // Default current amount
        goal: parseInt(process.env.NEXT_PUBLIC_DONATION_GOAL || '5000'),
        lastUpdated: new Date().toISOString()
      });
    }
  } catch (error) {
    console.error('Error in dons API:', error);
    return NextResponse.json(
      {
        error: 'Erreur lors de la récupération des données de dons',
        source: 'error',
        current: 0,
        goal: parseInt(process.env.NEXT_PUBLIC_DONATION_GOAL || '5000')
      },
      { status: 500 }
    );
  }
}
