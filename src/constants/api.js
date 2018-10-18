import axios from 'axios';

const BASE_URL = "/assets/API/";

export const API = axios.create({
    baseURL: BASE_URL
});

export const query_page = (page) => `CONTENTLISTINGPAGE-PAGE${page}.json`;