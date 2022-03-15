import axios from 'axios';

axios.interceptors.request.use(
    function (config) {
        const ORIGIN = '';
        const BEARER = 'Bearer_';
        const TOKEN = 'ASDF1234';

        return {
            ...config,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'token': `${BEARER}${TOKEN}`
            },
        }
    },
    function (error) {
        return Promise.reject(error);
    }
)

const http = axios;

export default http;
