const API_URL = 'https://jsonplaceholder.typicode.com/users';

export const getUsers = async () => {
  return fetch(API_URL).then(response => response.json());
};
