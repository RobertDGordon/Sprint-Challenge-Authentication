import axios from 'axios';

export function getToken() {
	return sessionStorage.getItem('token')
}

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
      Authorization: getToken()
    }
  });
};