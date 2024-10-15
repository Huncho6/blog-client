// mutation.js
import { gql } from '@apollo/client';

export const CREATE_ADMIN = gql`
  mutation CreateAdmin($userName: String!, $email: String!, $password: String!) {
    createAdmin(userName: $userName, email: $email, password: $password) {
      token
      admin {
        id
        userName
        email
        role
      }
    }
  }
`;

export const LOGIN_ADMIN = gql`
  mutation LoginAdmin($email: String!, $password: String!) {
    loginAdmin(email: $email, password: $password) {
      token
      admin {
        id
        userName
        email
        role
      }
    }
  }
`;

export const FORGOT_ADMIN_PASSWORD = gql`
  mutation ForgotAdminPassword($email: String!) {
    forgotAdminPassword(email: $email) {
      success
      message
    }
  }
`;

export const RESET_ADMIN_PASSWORD = gql`
  mutation ResetAdminPassword($token: String!, $newPassword: String!) {
    resetAdminPassword(token: $token, newPassword: $newPassword) {
      success
      message
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser($userName: String!, $email: String!, $password: String!) {
    createUser(userName: $userName, email: $email, password: $password) {
      token
      user {
        id
        userName
        email
        role
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
        id
        userName
        email
        role
      }
    }
  }
`;

export const FORGOT_USER_PASSWORD = gql`
  mutation ForgotUserPassword($email: String!) {
    forgotUserPassword(email: $email) {
      success
      message
    }
  }
`;

export const RESET_USER_PASSWORD = gql`
  mutation ResetUserPassword($token: String!, $newPassword: String!) {
    resetUserPassword(token: $token, newPassword: $newPassword) {
      success
      message
    }
  }
`;
