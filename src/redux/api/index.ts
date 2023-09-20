import apolloClient from '../../graphql'

export const getRepositories = (payload: any) => {
  return new Promise((resolve, reject) => {
    return apolloClient.mutate({
      mutation: payload.query,
      variables: payload.variables
    }).then(resp => {
      resolve(resp?.data)
    }).catch(resp => {
      reject(resp?.data)
    });
  })
}
