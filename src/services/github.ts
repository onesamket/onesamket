import type { ApiGithubContributionsResponse } from '@/types/github'

class GithubService {
  public async getContributions(
    username: string,
  ): Promise<ApiGithubContributionsResponse> {
    try {
      const response = await fetch(
        `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
      )
      return response.json()
    } catch (error) {
      console.error('Failed to fetch github data', error)
      throw error
    }
  }
}

export const githubService = new GithubService()
