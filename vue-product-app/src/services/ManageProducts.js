/* eslint-disable no-useless-catch */
import axios from "axios";

const API_URL = "http://localhost:8080";

const createProduct = async (productData) => {
  try {
    const response = await axios.post(`${API_URL}/create_product`, productData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getAllProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/get_all`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getProductById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/get_one/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const updateProduct = async (productData) => {
  try {
    const response = await axios.put(
      `${API_URL}/update/${productData.id}`,
      productData
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/delete/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
