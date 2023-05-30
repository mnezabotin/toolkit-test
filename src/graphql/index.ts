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
