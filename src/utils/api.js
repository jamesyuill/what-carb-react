import axios from 'axios';

const api = axios.create({ baseURL: 'https://what-carb-be.onrender.com/api' });

export const getAllDishes = (params) => {
  return api.get('/dishes', params).then((res) => res.data);
};

export const postNewDish = (params) => {
  return api.post('/dishes', params).then((res) => res.data);
};

export const deleteDishById = (id) => {
  return api.delete(`/dishes/${id}`).then((res) => res.data);
};
