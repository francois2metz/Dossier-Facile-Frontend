import { User } from 'df-shared-next/src/models/User';
import axios from 'axios';

const API_URL = `${import.meta.env.VITE_OWNER_API_URL}/api/`;

const AuthService = {
  logout() {
    return axios.post(`${API_URL}owner/logout`);
  },

  register(user: User) {
    return axios.post(`${API_URL}register/account`, {
      email: user.email,
      password: user.password,
    });
  },

  deleteAccount() {
    return axios.delete(`${API_URL}owner/deleteAccount`);
  },

  resetPassword(user: User) {
    return axios.post(`${API_URL}register/forgotPassword`, {
      email: user.email,
    });
  },

  changePassword(user: User) {
    return axios.post(`${API_URL}register/createPassword/${user.token}`, {
      password: user.password,
    });
  },
  createPasswordCouple(user: User) {
    return axios.post(`${API_URL}user/createPassword/${user.token}`, {
      password: user.password,
    });
  },
  createPasswordGroup(user: User) {
    return axios.post(`${API_URL}user/createPassword/${user.token}`, {
      password: user.password,
    });
  },

  loadUser() {
    return axios.get(`${API_URL}owner/profile?nocache=${new Date().getTime()}`);
  },

  confirmAccount(token: string) {
    return axios.get(`${API_URL}register/confirmAccount/${token}`);
  },
};

export default AuthService;
