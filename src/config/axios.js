import axios from 'axios';

const clientAxios = axios.create({
    baseURL:  `https://my-json-server.typicode.com/franksantana0310/crud-hooks-redux`
})

export default clientAxios;