import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const personalAccessToken = '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'
const uri = 'https://api.github.com/graphql'

const httpLink = createHttpLink({
  uri,
})

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${personalAccessToken}`,
    }
  }
})

export default new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})
