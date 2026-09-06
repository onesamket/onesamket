import { useQuery } from '@tanstack/react-query'
import type { ApiGithubContributionsResponse } from '@/types/github'
import { githubService } from '@/services/github'

export const useContribution = (username: string) => {
  return useQuery<ApiGithubContributionsResponse, Error>({
    queryKey: ['github-contributions', username],
    queryFn: () => githubService.getContributions(username),
    enabled: !!username,
  })
}
