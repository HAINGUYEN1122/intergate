import axios from 'axios';
import {
  UNAUTHORIZED,
  FORBIDDEN,
  NOT_FOUND,
  INTERNAL_SERVER_ERROR,
  USER_LOCAL_STORE,
} from '../constants';
// import { onSignOut } from '@/util';

const API = axios.create({ baseURL: process.env.REACT_APP_API_URL });

export function defaultRequestHeaders() {
  const user = JSON.parse(localStorage.getItem(USER_LOCAL_STORE));
  if (user && user.token) {
    return {
      Authorization: `Bearer ${user.token}`,
    };
  }
  return {};
}

export const apiBase = (options) => new Promise((resolve, reject) => {
  API(options)
    .then((response) => {
      resolve(response);
    })
    .catch((errors) => {
      reject(errors);
    });
});

const err = (error) => {
  const messError = error;
  const { response } = messError;
  if (response) {
    const { data } = response;
    switch (response.status) {
      case UNAUTHORIZED:
        messError.message = `Error ${UNAUTHORIZED}`;
        // setTimeout(() => {
        //   onSignOut();
        // }, 1000);
        break;
      case FORBIDDEN:
        messError.message = `Error ${FORBIDDEN}`;
        break;
      case NOT_FOUND:
        messError.message = `Error ${NOT_FOUND}`;
        break;
      case INTERNAL_SERVER_ERROR:
        messError.message = `Error ${INTERNAL_SERVER_ERROR}`;
        break;
      default:
        messError.message = data.message;
        break;
    }
  }
  return Promise.reject(error);
};

API.interceptors.request.use((config) => ({
  ...config,
  headers: {
    ...config.headers,
    ...defaultRequestHeaders(),
  },
}), err);

API.interceptors.response.use((response) => response, err);
