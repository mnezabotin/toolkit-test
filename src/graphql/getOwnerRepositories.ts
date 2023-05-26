import { gql } from '@apollo/client'

export const GET_OWNER_REPOSITORIES = gql`
{
  viewer {
    repositories(first: 10) {
      totalCount
      nodes {
        ... on Repository {
          id
          name
          stargazerCount
          updatedAt
          pushedAt
          url
        }
      }
      pageInfo {
        startCursor
        endCursor
      }
    }
  }
}
`
