import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client'
import { GET_REPOSITORY } from '../graphql/getRepository'
import Header from '../components/Header'
import Card from '../components/Repository'
import Alert from '../components/Alert'

export default (): JSX.Element =>  {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_REPOSITORY, {variables: { id }});
  const langs = data?.node?.languages?.edges?.map(l => l.node.name) ?? []

  return (
    <>
      <Header />
      {data && <Card
        name={data.node.name}
        url={data.node.url}
        stargazerCount={data.node.stargazerCount}
        updatedAt={data.node.updatedAt}
        langs={langs}
        desc={data.node.description}
        owner={data.node.owner}
      />}
      {error && <Alert type='error' msg={error.message} />}
    </>
  )
}
