import styles from './HotNews.module.css'
import React from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

export default function HotNews({ data }) {
    return (
        <div className={styles.hotNews}>
            {
                data && (
                    <div>
                        <div className={styles.caption}> MULTIMEDIA</div>
                        <div className={'row'}>
                            <Link to={'news/' + data[0].id} className={clsx(styles.hotestItem, 'col-md-6 col-sm-6 col-lg-6 col-xl-6 col-xxl-6 col-sm-12 col-xs-12 text-decoration-none')}>
                                <div className={styles.topItem}>
                                    <img className={clsx(styles.imageHotestItem, 'img-thumbnail img-fluid ',)} src={data[0].thumbnail} alt='' />
                                </div>
                                <p className={styles.titleHotestItem}>{data[0].caption}</p>
                                <p className={styles.descriptionHotestItem}>{data[0].description}</p>
                            </Link>
                            <div className={clsx(styles.allHotItem, 'col-md-6 col-sm-6 col-lg-6 col-xl-6 col-xxl-6 col-sm-12 col-xs-12')}>
                                <div className={'row'}>
                                    <div className={clsx(styles.hotItem, 'col-6')}>
                                        <Link to={'news/' + data[1].id} className={'text-decoration-none'}>
                                            <div className={styles.topItem}>
                                                <img className={clsx(styles.imageHotItem, 'img-thumbnail img-fluid')} src={data[1].thumbnail} alt='' />
                                            </div>
                                            <p className={styles.titleHotItem}>{data[1].caption}</p>
                                        </Link>
                                    </div >
                                    <div className={clsx(styles.hotItem, 'col-6')}>
                                        <Link to={'news/' + data[2].id} className={'text-decoration-none'}>

                                            <div className={styles.topItem}>
                                                <img className={clsx(styles.imageHotItem, 'img-thumbnail img-fluid')} src={data[2].thumbnail} alt='' />
                                            </div>
                                            <p className={styles.titleHotItem}>{data[2].caption}</p>
                                        </Link>
                                    </div>
                                </div>
                                <div className={'row'}>
                                    <div className={clsx(styles.hotItem, 'col-6')}>
                                        <Link to={'news/' + data[3].id} className={'text-decoration-none'}>

                                            <div className={styles.topItem}>
                                                <img className={clsx(styles.imageHotItem, 'img-thumbnail img-fluid')} src={data[3].thumbnail} alt='' />
                                            </div>
                                            <p className={styles.titleHotItem}>{data[3].caption}</p>
                                        </Link>
                                    </div>
                                    <div className={clsx(styles.hotItem, 'col-6')}>
                                        <Link to={'news/' + data[4].id} className={'text-decoration-none'}>

                                            <div className={styles.topItem}>
                                                <img className={clsx(styles.imageHotItem, 'img-thumbnail img-fluid')} src={data[4].thumbnail} alt='' />
                                            </div>
                                            <p className={styles.titleHotItem}>{data[4].caption}</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
