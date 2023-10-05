import React, { useEffect, useRef } from "react";
import NewsListComponent from "../../components/news/news-list-component/news-list-component";

const NewsPage = () => {
    const ref = useRef();

    useEffect(() => {
        document.title = "Новости";
    }, []);

    return (
        <NewsListComponent ref={ref} isMain={false} />
    );
}

export default NewsPage;