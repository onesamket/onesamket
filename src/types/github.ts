export interface ContributionDay {
  date: string
  count: number
  level: number
}

export interface ApiGithubContributionsResponse {
  total: {
    [year: string]: number
  }
  contributions: Array<ContributionDay>
}
