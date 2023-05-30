import { gql } from '@apollo/client'

export const GET_OWNER_REPOSITORIES = gql`
  query ($first: Int, $last: Int, $after: String, $before: String) {
    viewer {
      repositories(
        first: $first
        last: $last
        after: $after
        before: $before
      ) {
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
