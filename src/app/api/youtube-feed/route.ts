import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const apiKey = process.env.YOUTUBE_API_KEY;
    const channelId = process.env.YOUTUBE_CHANNEL_ID;

    if (!apiKey || !channelId) {
      console.error('Variables d\'environnement YouTube manquantes');
      return NextResponse.json(
        { error: 'Configuration YouTube incomplète' },
        { status: 500 }
      );
    }

    // Récupérer les dernières vidéos de la chaîne
    const youtubeUrl = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet&order=date&maxResults=6&type=video`;
    
    const response = await fetch(youtubeUrl);
    
    if (!response.ok) {
      console.error('Erreur API YouTube:', response.status, response.statusText);
      return NextResponse.json(
        { error: 'Erreur lors de la récupération des vidéos YouTube' },
        { status: response.status }
      );
    }

    const data = await response.json();

    // Transformer les données pour le frontend
    interface YouTubeItem {
      id: { videoId: string };
      snippet: {
        title: string;
        description: string;
        thumbnails: { medium: { url: string } };
        publishedAt: string;
        channelTitle: string;
      };
    }
    
    const videos = data.items?.map((item: YouTubeItem) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails.medium.url,
      publishedAt: item.snippet.publishedAt,
      channelTitle: item.snippet.channelTitle
    })) || [];

    return NextResponse.json({
      success: true,
      videos,
      totalResults: data.pageInfo?.totalResults || 0
    });

  } catch (error) {
    console.error('Erreur API YouTube:', error);
    return NextResponse.json(
      { error: 'Erreur serveur interne' },
      { status: 500 }
    );
  }
}

// Cache les résultats pendant 10 minutes
export const revalidate = 600;
