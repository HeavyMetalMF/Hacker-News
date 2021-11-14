import {useEffect} from "react";
import {getNews, getOneNews} from "../../store/newsReducer";
import {connect} from "react-redux";
import NewsList from "./NewsList";


export const News = (props) => {
    useEffect(() => {
        console.log('render')
        props.getNews();
    }, []);

    //нет возможности получить сразу все посты, приходится получать по одному, пока получаем посты показывает загрузку
    return (
        props.oneNews.length !== 100
        ? <div>loading</div>
        : <NewsList oneNews={props.oneNews}/>
    )

}

const mapStateToProps = (state) => {
    return {
        oneNews: state.news.oneNews,
        news: state.news.news,
    }
}

export default connect(mapStateToProps, {getNews, getOneNews})(News);
