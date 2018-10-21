import axios from 'axios';

const BASE_URL = "./assets/API/";

export const API = axios.create({
    baseURL: BASE_URL
});

export const serverRequestContent = (page) => API.get(`CONTENTLISTINGPAGE-PAGE${page}.json`);