import { gql } from '@apollo/client';

// Query to get all news
export const GET_ALL_NEWS = gql`
  query GetAllNews {
    news {
      id
      title
      description
      poster
      createdAt
    }
  }
`;

// Query to get news by ID
export const GET_NEWS_BY_ID = gql`
  query GetNewsById($id: ID!) {
    newsById(id: $id) {
      id
      title
      description
      poster
      video
      createdAt
    }
  }
`;
