import axios from 'axios';


const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '6482d819766a3da348d768ebc163d963',
        language: 'es-ES'
    }
});


export default movieDB;


