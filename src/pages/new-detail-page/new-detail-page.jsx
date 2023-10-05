import React from "react";
import NewsDetailComponent from "../../components/news/news-detail-component/news-detail-component";
import { useParams } from "react-router-dom";

const NewsDetailPage = () => {
    const { id } = useParams();

    return (
        <NewsDetailComponent id={id} />
    );
};

export default NewsDetailPage;