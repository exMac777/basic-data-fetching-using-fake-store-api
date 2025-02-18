import axios from "axios";

const customAxios = axios.create({
  baseURL: 'https://fakestoreapi.com',
})


export default customAxios;
