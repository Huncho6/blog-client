import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

// Create a link to the GraphQL server
const httpLink = createHttpLink({
  uri: 'http://localhost:45/graphql', // Corrected URI to your GraphQL server endpoint
});

// Create an Apollo Client instance
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
