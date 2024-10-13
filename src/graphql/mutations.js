// src/graphql/mutations.js
import { gql } from '@apollo/client';

export const LOGIN_ADMIN = gql`
  mutation LoginAdmin($email: String!, $password: String!) {
    loginAdmin(email: $email, password: $password) {
      admin {
        id
        email
        userName
      }
      token
    }
  }
`;


export const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    loginAdmin(email: $email, password: $password) {
      user {
        id
        email
        userName
      }
      token
    }
  }
`;
