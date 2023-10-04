import "./news-list-component.scss";
import React, { useCallback, useEffect, useState } from "react";
import NewsItemComponent from "../news-item-component/news-item-component";
import PaginationComponent from "../../pagination-component/pagination-component";
import NewsDemo from "../../../news";
import TagsDemo from "../../../tags";

const NewsListComponent = () => {
    const [tags, setTags] = useState(TagsDemo);
    const [tagIndex, setTagIndex] = useState(0);
    const [newsList, setNews] = useState([]);
    const [page, setPage] = useState(1);
    const [maxPage, setMaxPage] = useState(1);

    useEffect(() => {
        if (NewsDemo.length <= 4) {
            setNews(NewsDemo);
            return;
        }
        setMaxPage(Math.ceil(NewsDemo.length / 4));
        setNews(preparePaginationArray());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setNews(preparePaginationArray());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    const preparePaginationArray = () => {
        return NewsDemo.filter(el => el.id > (page - 1) * 4 && el.id <= page * 4);
    };

    const prevPage = useCallback(() => {
        if (page <= 1) {
            setPage(maxPage);
            return;
        }
        setPage(page - 1);
    });

    const nextPage = useCallback(() => {
        if (page >= maxPage) {
            setPage(1);
            return;
        }
        setPage(page + 1);
    });

    const setTag = (index) => {
        let tagsTemp = tags;
        for (let count = 0; count < tagsTemp.length; count++) {
            tagsTemp[count].active = false;
        }
        tagsTemp[index].active = true;
        setTags(tagsTemp);
        setTagIndex(index);
    };

    const renderTags = tags.map((el, index) => {
        if (el.active) {
            return (
                <div className="tag-input -selected" onClick={() => setTag(index)}>
                    <p className="small-text-desktop -tag -selected">{el.name}</p>
                </div>
            )
        } else {
            return (
                <div className="tag-input" onClick={() => setTag(index)}>
                    <p className="small-text-desktop -tag">{el.name}</p>
                </div>
            )
        }
    });
    return (
        <div className="news">
            <div className="news__section">
                <h2 className="header-second-text-desktop -news">Новости</h2>
                <div className="news__tags">
                    {renderTags.map(el => el)}
                </div>
                <div className="news__list">
                    {newsList.map((el, index) => (<NewsItemComponent key={index} newItem={el} />))}
                </div>
                <PaginationComponent page={page} maxPage={maxPage} nextPage={nextPage} prevPage={prevPage} />
            </div>
        </div>
    );
};

export default NewsListComponent;