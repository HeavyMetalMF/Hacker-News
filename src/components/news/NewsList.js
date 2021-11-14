import {Button} from "react-bootstrap";
import OneNews from "./oneNews/OneNews";

const NewsList = (props) => {
    return(
        <div>
            <Button variant="primary">Обновить новости</Button>{' '} {/* пока не реализовал */}
            <Button variant="outline-warning">Магия</Button>{' '}
            <div>
                {props.oneNews ? props.oneNews.map((news, index) =>
                    <OneNews author={news.by}
                             pos={index+1}
                             title={news.title}
                             url={news.url}
                             date={news.time}
                             key={index}
                             score={news.score}
                             id={news.id}/>
                ) : 'no'}
            </div>
        </div>
    )
}
export default NewsList;