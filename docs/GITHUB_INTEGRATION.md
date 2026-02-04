# GitHub Integration Guide

This guide explains how to integrate the GitHub API to dynamically fetch your repository data and display it in your portfolio.

## Prerequisites

- GitHub Personal Access Token (PAT)
- Basic understanding of Next.js API routes

## Step 1: Create GitHub Personal Access Token

1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a name and select scopes: `public_repo` (or `repo` for private repos)
4. Copy the token (you won't see it again!)

## Step 2: Add Environment Variables

Create a `.env.local` file in the root directory:

```env
GITHUB_TOKEN=your_token_here
GITHUB_USERNAME=your_username
```

Add `.env.local` to `.gitignore` (already included).

## Step 3: Create GitHub API Route

Create `app/api/github/route.ts`:

```typescript
import { NextResponse } from 'next/server';

export async function GET() {
  const token = process.env.GITHUB_TOKEN;
  const username = process.env.GITHUB_USERNAME;

  if (!token || !username) {
    return NextResponse.json(
      { error: 'GitHub credentials not configured' },
      { status: 500 }
    );
  }

  try {
    // Fetch user repositories
    const reposResponse = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=10`,
      {
        headers: {
          Authorization: `token ${token}`,
          Accept: 'application/vnd.github.v3+json',
        },
      }
    );

    if (!reposResponse.ok) {
      throw new Error('Failed to fetch repositories');
    }

    const repos = await reposResponse.json();

    // Transform GitHub data to portfolio format
    const projects = repos.map((repo: any) => ({
      id: repo.id.toString(),
      name: repo.name,
      description: repo.description || 'No description available',
      longDescription: repo.description || '',
      technologies: repo.language ? [repo.language] : [],
      githubUrl: repo.html_url,
      liveUrl: repo.homepage || null,
      imageUrl: null,
      featured: repo.stargazers_count > 5, // Feature repos with 5+ stars
      category: repo.language || 'Other',
    }));

    return NextResponse.json({ projects });
  } catch (error) {
    console.error('GitHub API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch GitHub data' },
      { status: 500 }
    );
  }
}
```

## Step 4: Update Projects Component

Modify `components/Projects.tsx` to fetch from API:

```typescript
"use client";

import { useEffect, useState } from "react";
// ... other imports

export function Projects() {
  const [projects, setProjects] = useState(portfolioData.projects);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch from GitHub API
    fetch('/api/github')
      .then(res => res.json())
      .then(data => {
        if (data.projects) {
          setProjects(data.projects);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch GitHub projects:', err);
        setLoading(false);
      });
  }, []);

  // Rest of component...
}
```

## Step 5: Enhanced Repository Data

To get more detailed information (languages, topics, etc.):

```typescript
// Fetch detailed repo info
const repoDetails = await Promise.all(
  repos.map(async (repo: any) => {
    const [languages, topics] = await Promise.all([
      fetch(repo.languages_url, {
        headers: { Authorization: `token ${token}` },
      }).then(r => r.json()),
      fetch(`${repo.url}/topics`, {
        headers: {
          Authorization: `token ${token}`,
          Accept: 'application/vnd.github.mercy-preview+json',
        },
      }).then(r => r.json()),
    ]);

    return {
      ...repo,
      languages: Object.keys(languages),
      topics: topics.names || [],
    };
  })
);
```

## Step 6: Rate Limiting

GitHub API has rate limits:
- Authenticated: 5,000 requests/hour
- Unauthenticated: 60 requests/hour

Consider caching responses:

```typescript
// Add caching headers
return NextResponse.json(
  { projects },
  {
    headers: {
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  }
);
```

## Alternative: Static Generation

For better performance, fetch at build time:

```typescript
// app/page.tsx
export async function generateStaticParams() {
  // Fetch GitHub data at build time
  const projects = await fetchGitHubProjects();
  return { projects };
}
```

## Security Best Practices

1. **Never commit tokens**: Always use environment variables
2. **Use server-side only**: Keep API routes server-side
3. **Validate input**: Sanitize username input
4. **Error handling**: Don't expose sensitive error messages

## Troubleshooting

- **401 Unauthorized**: Check your token is valid
- **403 Forbidden**: Check token permissions
- **Rate limit exceeded**: Implement caching or reduce requests
- **CORS errors**: GitHub API doesn't support CORS, use Next.js API routes

## Next Steps

- Add repository statistics (stars, forks, commits)
- Display contribution graph
- Show recent activity
- Filter by language or topic
