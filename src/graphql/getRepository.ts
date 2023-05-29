import { gql } from '@apollo/client'

export const GET_REPOSITORY = gql`
  query ($id: ID!) { 
    node(id: $id) {
      ... on Repository {
        id
        name
        stargazerCount
        updatedAt
        pushedAt
        url
        description
        owner {
          login
          url
          avatarUrl
        }
        languages(first: 100) {
          edges {
            node {
              name
            }
          }
        }
      }
    }
  }
`
