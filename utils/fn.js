import axios from 'axios';

export const setAuthToken = token => {
  if(token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
}

export const handleError = (error, dispatch, type) => {
  if(error.response) {
    dispatch({
      type,
      payload: error.response.data.message
    });  
  } else {
    dispatch({
      type,
      payload: "Server lỗi"
    });    
  }
}
