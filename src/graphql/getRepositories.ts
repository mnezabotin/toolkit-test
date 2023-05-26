import { gql } from '@apollo/client'

export const GET_REPOSITORIES = gql`
  query ($first: Int, $last: Int, $after: String, $before: String, $query: String!) {
    search (
      type: REPOSITORY
      first: $first
      last: $last
      after: $after
      before: $before
      query: $query
    ) {
      repositoryCount
      pageInfo {
        startCursor
        endCursor
      }
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
    }
  }
`
