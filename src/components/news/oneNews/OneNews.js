import c from './newsPage.module.css';
import cn from "classnames"
import {Link} from "react-router-dom";

export const OneNews = (props) => {
    return (
        <div className={c.oneNews}>
            <div className={c.firstRowNews}>
                <div className={cn(c.pos)}>{props.pos}.</div>
                <div className={c.news}>
                    <img src="https://news.ycombinator.com/grayarrow.gif"/>
                </div>
                <Link className={c.news} to={`/news/${props.id}`}>{props.title}</Link>
            </div>
            <div className={c.secondRowNews}>
                <span>
                    Author: {props.author}
                </span>
                <span>
                    Score: {props.score}
                </span>
                <span>
                    Date: {props.date}
                </span>
            </div>
        </div>
    )
}

export default OneNews;
//компонента получает id и делает внутри себя запрос на отрисовку поста