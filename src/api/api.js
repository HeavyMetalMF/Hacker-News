import axios from "axios";


const instance = axios.create({
    baseURL: 'https://hacker-news.firebaseio.com/v0/',
    // headers: {Access-Control:Allow-Origin}
    headers: {'Access-Control': 'Allow-Origin'}

});

export const newsApi = {
    getTopNews(){
        return instance.get('topstories.json').then(response => response.data);
    },
    getOneNews(newsId){
        return instance.get(`item/${newsId}.json`).then(response => response.data);
    }
};