import "./news-page.scss";
import React, { useEffect } from "react";
import NewsListComponent from "../../components/news/news-list-component/news-list-component";

const NewsPage = () => {
    useEffect(() => {
        document.title = "Новости";
    }, []);

    return (
        <NewsListComponent />
    );
}

export default NewsPage;