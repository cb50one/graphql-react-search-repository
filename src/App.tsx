import React from 'react';
import { ApolloProvider, useQuery } from 'react-apollo';
import client from './client';
import { ME } from './graphql';

// client.query({query: ME}).then(result => console.log(result))

const App: React.FC = () => {
  
  return (
    <ApolloProvider client={client}>
      <div>Hello GraphQL</div> 
      <Name />
    </ApolloProvider>
  );
}

const Name: React.FC = () => {
  const { loading, error, data } = useQuery(ME);
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error {error.message}</p>

  return <div>{data.user.name}</div>
}

export default App;
