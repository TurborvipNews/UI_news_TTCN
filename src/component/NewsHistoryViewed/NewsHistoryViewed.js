import React from 'react'
import styles from './NewsHistoryViewed.module.css'
import { Link } from 'react-router-dom'
import clsx from 'clsx';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

function NewsHistoryViewed() {
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1700,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    autoplay: true,
                    initialSlide: 0,
                    adaptiveHeight: true,
                    speed: 500,
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    autoplay: true,
                    initialSlide: 0,
                    adaptiveHeight: true,
                    speed: 500,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    autoplay: true,
                    initialSlide: 0,
                    adaptiveHeight: true,
                    speed: 500,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    autoplay: true,
                    initialSlide: 0,
                    adaptiveHeight: true,
                    speed: 500,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    initialSlide: 0,
                    adaptiveHeight: true,
                    speed: 500,
                }
            },

        ]
    };

    const data = JSON.parse(localStorage.getItem('newsViewed'));
    const renderSlides = (data) =>
        data && (
            data.map(item => (
                <Link to={`/news/${item.id}`} key={item.id} className={clsx(styles.NewsHistoryViewed, 'text-decoration-none')}>
                    <div className={clsx("card", styles.card)} style={{ width: '18rem' }}>
                        <div className={clsx("card-img-top", styles.cardTop)}>
                            <img src={item?.thumbnail} className={clsx('img-fluid', styles.image)} alt="" />
                        </div>
                        <div className="card-body">
                            <h5 className={clsx("card-title", styles.title)}>{item.caption}</h5>
                            <p className={clsx("card-text ", styles.description)}>{item.description}</p>
                        </div>
                    </div>
                </Link>
            ))
        )
    return (
        <div>
            {data && (
                <div className={styles.slider} >
                    <h3>Các tin tức đã xem:</h3>
                    <Slider
                        {...settings}
                    >
                        {renderSlides(data)}
                    </Slider>
                </div >
            )}
        </div>
    )
}

export default NewsHistoryViewed