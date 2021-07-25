import axios from 'axios';

const api = '39f2498a6a2a348a5af558b0d07a612ca'
const url = 'https://newsapi.org/v2';


export const fetchNews = async (request) => {
    try {
        const { data: { articles } } = await axios.get(`${url}/${request.category}?${request.query}&pageSize=${request.results}&apiKey=${api}`);

        return articles.map((article) => (article));
    } catch (error) {
        return error;
    }
};