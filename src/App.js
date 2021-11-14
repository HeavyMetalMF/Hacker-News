import './App.module.css';
import News from "./components/news/News";
import c from './App.module.css'
import Header from "./components/header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NewsPage from "./components/news/newsPage/NewsPage";


function App() {
    return (
        <BrowserRouter>
            <div className={c.container}>
                <Header/>
                <Routes>
                    <Route path='/' element={ <News/>}/>
                    <Route path='news/:newsId' element={<NewsPage/>}>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
