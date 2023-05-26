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
