/* eslint-disable react-hooks/exhaustive-deps */
import "./news-list-component.scss";
import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useState } from "react";
import NewsItemComponent from "../news-item-component/news-item-component";
import PaginationComponent from "../../pagination-component/pagination-component";
import NewsDemo from "../../../news";
import TagsDemo from "../../../tags";
import notFound from "../../../assets/not-found-news.png";
import PropTypes from 'prop-types';

const NewsListComponent = forwardRef(({ isMain }, ref) => {
    const [newsDemo, setNewsDemo] = useState(NewsDemo);
    const [tags, setTags] = useState(TagsDemo);
    const [tagIndex, setTagIndex] = useState(0);
    const [newsList, setNews] = useState([]);
    const [page, setPage] = useState(1);
    const [maxPage, setMaxPage] = useState(1);

    useImperativeHandle(ref, () => ({
        next() {
            nextPage();
        },
        prev() {
            prevPage();
        },
    }))

    useEffect(() => {
        if (newsDemo.length <= 4) {
            setNews(newsDemo);
            return;
        }
        setMaxPage(newsDemo.length > 0 ? Math.ceil(newsDemo.length / 4) : 1);
        setNews(preparePaginationArray());
        return () => {
            setNewsDemo(NewsDemo);
            setTags(TagsDemo);
            setTagIndex(0);
            setNews([]);
            setPage(0);
            setPage(1);
            setMaxPage(1);
        };
    }, []);

    useEffect(() => {
        setNews(preparePaginationArray());
    }, [page, newsDemo]);

    useEffect(() => {
        let newArray = NewsDemo;
        newArray = newArray.filter(el => el.tags.includes(tags[tagIndex].code));
        newArray.forEach((el, index) => {
            newArray[index].id = index + 1;
        });
        setNewsDemo(newArray);
        setPage(1);
        setMaxPage(newArray.length > 0 ? Math.ceil(newArray.length / 4) : 1);
    }, [tagIndex])

    const preparePaginationArray = () => {
        return newsDemo.filter(el => el.id > (page - 1) * 4 && el.id <= page * 4);
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

    let newsClass = "news";
    if (isMain) {
        newsClass = newsClass + " -main"
    }
    let newsListClass = "news__list";
    if (newsList.length <= 0) {
        newsListClass = newsListClass + " -center";
    }
    if (newsList.length > 0 && newsList.length < 4) {
        newsListClass = newsListClass + " -start";
    }
    return (
        <div className={newsClass}>
            <div className="news__section">
                {!isMain && <h2 className="header-second-text-desktop -news">Новости</h2>}
                <div className="news__tags">
                    {renderTags.map(el => el)}
                </div>
                <div className={newsListClass}>
                    {newsList.length > 0 ? (newsList.map((el, index) => (<NewsItemComponent key={index} newItem={el} />))) :
                        (<div className="news__not-found">
                            <img src={notFound} alt="notFound" />
                            <h1 className="header-first-text-desktop">Новостей по этой теме не найдено</h1>
                        </div>)}
                </div>
                {!isMain && newsList.length > 0 && <PaginationComponent page={page} maxPage={maxPage} nextPage={nextPage} prevPage={prevPage} />}
            </div>
        </div>
    );
});

NewsListComponent.propTypes = {
    isMain: PropTypes.bool
}

export default NewsListComponent;