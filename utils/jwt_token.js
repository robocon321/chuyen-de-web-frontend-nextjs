import axios from "axios";

export const setAuthToken = (token) => {
  if(token) {
    axios.defaults.headers.common['Authorization'] = `Token ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
}
