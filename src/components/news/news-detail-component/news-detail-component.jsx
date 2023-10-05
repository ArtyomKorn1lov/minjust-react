/* eslint-disable eqeqeq */
import "./news-detail-component.scss";
import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import NewsDemo from "../../../news";

const NewsDetailComponent = ({ id }) => {
    const navigation = useNavigate();

    let curNew = {};
    NewsDemo.forEach(el => {
        if (el.id == id) {
            curNew = el;
        }
    });
    return (
        <div className="news-detail">
            <div className="news-detail__section">
                <h2 className="header-second-text-desktop -detail">{curNew.name}</h2>
                <div>
                    <img src={curNew.img} alt="img" className="news-detail__img-left" />
                    <p className="small-text-desktop -news-item-date">{curNew.date}</p>
                    <p className="regular-text-desktop -detail">
                        На встрече с участием представителей администрации Куйбышевского района и населением был обсужден широкий круг вопросов взаимодействия наших регионов не только в направлениях социальной сферы и жилищно-коммунального хозяйства, но и предстоящих выборов.<br /><br />На встрече с активом удалось узнать, что важно для жителей, какие ресурсы необходимы.<br /><br />Глава Марий Эл напомнил, что к новому учебному году Правительством республики планируется закупка и поставка в школы учебников, мебели и оборудования. «Для руководителей образовательных организаций подшефных территорий в конце августа 2023 года проведем методические мероприятия на базе образовательных организаций Республики Марий Эл в рамках Августовского республиканского образовательного форума», - сказал Юрий Зайцев.<br /><br />Юрий Зайцев рассказал, что совместными усилиями с Правительством Запорожской области ведутся восстановительные работы в школах, больницах и детских садах, закупается оборудование. В регион приехали также подрядные организации из Марий Эл. Со стороны органов власти обеспечивается постоянный контроль за ходом выполнения ремонта, соблюдением сроков поставок.<br /><br />«Я приехал в Куйбышевский район уже второй раз. Мне важно видеть реальную картину в динамике, узнавать, что меняется, как ведутся работы, что меняется к лучшему, а что требует доработки. Рад, что у нас с вами получился конструктивный диалог, потому что совместная работа органов власти двух регионов позволит восстановить инфраструктуру, вернет жителям возможность жить, учиться и работать в нормальных условиях. Как сказал наш Президент Владимир Владимирович Путин, обеспечение безопасности и восстановление мирной жизни в Луганской, Донецкой республиках, Запорожской и Херсонской областях - задача, которая сейчас имеет первостепенное значение. Я, как и Глава государства, не сомневаюсь, что поставленная цель будет достигнута», - подчеркнул Юрий Зайцев.<br /><br />«Я приехал в Куйбышевский район уже второй раз. Мне важно видеть реальную картину в динамике, узнавать, что меняется, как ведутся работы, что меняется к лучшему, а что требует доработки. Рад, что у нас с вами получился конструктивный диалог, потому что совместная работа органов власти двух регионов позволит восстановить инфраструктуру, вернет жителям возможность жить, учиться и работать в нормальных условиях. Как сказал наш Президент Владимир Владимирович Путин, обеспечение безопасности и восстановление мирной жизни в Луганской, Донецкой республиках, Запорожской и Херсонской областях - задача, которая сейчас имеет первостепенное значение. Я, как и Глава государства, не сомневаюсь, что поставленная цель будет достигнута», - подчеркнул Юрий Зайцев.<br /><br />«Я приехал в Куйбышевский район уже второй раз. Мне важно видеть реальную картину в динамике, узнавать, что меняется, как ведутся работы, что меняется к лучшему, а что требует доработки. Рад, что у нас с вами получился конструктивный диалог, потому что совместная работа органов власти двух регионов позволит восстановить инфраструктуру, вернет жителям возможность жить, учиться и работать в нормальных условиях. Как сказал наш Президент Владимир Владимирович Путин, обеспечение безопасности и восстановление мирной жизни в Луганской, Донецкой республиках, Запорожской и Херсонской областях - задача, которая сейчас имеет первостепенное значение. Я, как и Глава государства, не сомневаюсь, что поставленная цель будет достигнута», - подчеркнул Юрий Зайцев.<br /><br />
                    </p>
                    <p className="small-text-desktop -news-item-date -italic">—Отдел информационной работы Администрации Главы Республики Марий Эл</p>
                </div>
                <div className="news-detail__back-container">
                    <button onClick={() => navigation("/news/")} className="main-search__button">Ко всем новостям</button>
                </div>
            </div>
        </div>
    );
};

NewsDetailComponent.propTypes = {
    id: PropTypes.number
};

export default NewsDetailComponent;