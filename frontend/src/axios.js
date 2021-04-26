import axios from 'axios';

const instance = axios.create({
    // baseURL: "http://127.0.0.1/backend/api",
    baseURL: "https://m3117063.api.isabot.site/api",
});

instance.defaults.headers.common['Authorization'] = ""

export default instance;
