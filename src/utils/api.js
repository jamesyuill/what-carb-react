import axios from 'axios';

const api = axios.create({ baseURL: 'https://what-carb-be.onrender.com/api' });

export const getAllDishes = (params) => {
  return api.get('/dishes', params).then((res) => res.data);
};
