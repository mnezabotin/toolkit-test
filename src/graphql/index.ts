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
