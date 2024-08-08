import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.9:3000',
});

export const getClasses = async () => {
  try {
    const response = await api.get('/classdetails');
    return response.data;
  } catch (error) {
    console.error('Error fetching classes:', error);
    throw error;
  }
};

export const addClass = async (classData) => {
  try {
    const response = await api.post('/classdetails', classData);
    return response.data;
  } catch (error) {
    console.error('Error adding class:', error);
    throw error;
  }
};

export const updateClass = async (classData) => {
  try {
    const response = await api.patch('/classdetails', classData);
    return response.data;
  } catch (error) {
    console.error('Error updating class:', error);
    throw error;
  }
};

export const deleteClass = async (id) => {
  try {
    const response = await api.delete(`/classdetails/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting class at api:', error);
    throw error;
  }
};
