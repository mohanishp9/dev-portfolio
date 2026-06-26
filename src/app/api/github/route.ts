import { NextResponse } from "next/server";

const GITHUB_GRAPHQL_API = "https://api.github.com/graphql";

const QUERY = `
  query($username: String!) {
    user(login: $username) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
              color
            }
          }
        }
      }
    }
  }
`;

// Helper to generate mock contribution data if API key is missing or fetch fails
function generateMockData() {
  const weeks = [];
  const today = new Date();
  
  // Go back 365 days
  const startDate = new Date(today);
  startDate.setDate(startDate.getDate() - 365);
  
  // Align to the start of the week (Sunday)
  const dayOfWeek = startDate.getDay();
  startDate.setDate(startDate.getDate() - dayOfWeek);
  
  let currentDate = new Date(startDate);
  let totalContributions = 0;
  
  for (let w = 0; w < 53; w++) {
    const contributionDays = [];
    for (let d = 0; d < 7; d++) {
      if (currentDate > today) break;
      
      const rand = Math.random();
      let count = 0;
      let color = "#161b22";
      
      // Mimic typical dev activity distribution
      if (rand > 0.6) {
        count = Math.floor(Math.random() * 3) + 1;
        color = "#0e4429";
      }
      if (rand > 0.8) {
        count = Math.floor(Math.random() * 5) + 3;
        color = "#006d32";
      }
      if (rand > 0.95) {
        count = Math.floor(Math.random() * 12) + 8;
        color = "#39d353";
      }
      
      totalContributions += count;
      
      contributionDays.push({
        contributionCount: count,
        date: currentDate.toISOString().split("T")[0],
        color: color
      });
      
      currentDate.setDate(currentDate.getDate() + 1);
    }
    
    if (contributionDays.length > 0) {
      weeks.push({ contributionDays });
    }
  }
  
  return {
    totalContributions,
    weeks,
    isMock: true
  };
}

export async function GET() {
  const token = process.env.GITHUB_PAT;
  const username = "mohanishp9";

  if (!token) {
    console.warn("GITHUB_PAT env variable is missing. Serving mock data.");
    return NextResponse.json(generateMockData());
  }

  try {
    const response = await fetch(GITHUB_GRAPHQL_API, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: QUERY,
        variables: { username },
      }),
      // Cache the response for 6 hours (21600 seconds)
      next: { revalidate: 21600 }
    });

    if (!response.ok) {
      throw new Error(`GitHub API responded with status ${response.status}`);
    }

    const data = await response.json();
    
    if (data.errors) {
      console.error("GitHub GraphQL Errors:", data.errors);
      throw new Error("GitHub GraphQL returned errors");
    }

    const calendar = data.data?.user?.contributionsCollection?.contributionCalendar;
    
    if (!calendar) {
      throw new Error("Invalid structure returned by GitHub API");
    }

    return NextResponse.json({
      totalContributions: calendar.totalContributions,
      weeks: calendar.weeks,
      isMock: false
    });
  } catch (error) {
    console.error("Error fetching GitHub contribution graph, falling back to mock:", error);
    return NextResponse.json(generateMockData());
  }
}
