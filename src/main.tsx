import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloProvider } from '@apollo/client'
import client from './graphql'
import App from './App'
import configureStore from './redux/store';
import './index.css'

const store = configureStore();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App store={store} />
    </ApolloProvider>
  </React.StrictMode>,
)
