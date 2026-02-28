import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");

  if (!query) {
    return NextResponse.json(
      { error: "Query parameter is required" },
      { status: 400 },
    );
  }

  try {
    const steamUrl = `https://store.steampowered.com/api/storesearch/?term=${encodeURIComponent(
      query,
    )}&l=english&cc=DE`;

    const response = await fetch(steamUrl);

    if (!response.ok) {
      throw new Error(`Steam API responded with status ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Steam search API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch from Steam API" },
      { status: 500 },
    );
  }
}
