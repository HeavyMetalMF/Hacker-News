import {newsApi} from "../api/api";

const SET_NEWS = 'SET_NEWS';
const SET_ONE_NEWS = 'SET_ONE_NEWS';

const initialState = {
    // news: null,
    oneNews: []
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS:
            return {
                ...state,
                news: [...action.newsId],
            }
        case SET_ONE_NEWS:
            return {
                ...state,
                oneNews: [...state.oneNews, action.news],
            }
        default:
            return state;
    }
}

const setNews = (newsId) => {
    return {
        type: SET_NEWS,
        newsId: newsId,
    }
}

const setOneNews = (news) => {
    return {
        type: SET_ONE_NEWS,
        news: news,
    }
}

export const getNews = () => {
    return (dispatch) => {
        newsApi.getTopNews()
            .then(newsId => {
                const top100News = newsId.splice(0, 100);
                // dispatch(setNews(top100News));
                dispatch(getOneNews(top100News));
            });
    }
}

export const getOneNews = (arr) => {
    return (dispatch) => {
        arr.forEach(id => {
            newsApi.getOneNews(id).then(news => {
                // res.push(news)
                dispatch(setOneNews(news))
            })
        })
    }
}

export default newsReducer;