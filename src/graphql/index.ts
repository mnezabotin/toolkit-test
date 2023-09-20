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
