// src/apolloClient.js
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

// Create a link to the GraphQL server
const httpLink = createHttpLink({
  uri: 'http://localhost:3000/graphql', // Update the URI to your GraphQL server endpoint
});

// Create an Apollo Client instance
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
