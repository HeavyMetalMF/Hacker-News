import {useParams} from "react-router-dom";


export const NewsPage = (props) => {
    debugger
    let params = useParams();
    debugger
        return (
        <div>
            <div>
                <h1>NEWS ID: {params.newsId}</h1>
                {props.match}
                NewsPage
            </div>

        </div>
    )
}

export default NewsPage;