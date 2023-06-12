import React from 'react'
import styles from './NewContent.module.css'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

export default function NewContent({ data }) {
    return (
        <div>
            {
                data && (
                    <div className={clsx(styles.newContent, 'row')}>
                        <div className={clsx('col-md-4 col-lg-4 col-xl-4 col-sm-6 col-xs-12', styles.itemsLeft)} >
                            <Link to={'/news/' + data[1].id} className='text-decoration-none'>
                                <div className={clsx('row', styles.itemLeft)}>
                                    <div className={clsx('col-5', styles.imgItemLeft)}>
                                        <img className={clsx('img-fluid', styles.imageItem)} src={data[1].thumbnail} alt='' />
                                    </div>
                                    <div className={clsx('col-7', styles.titleItemLeft)}>
                                        {data[1].caption}
                                    </div>
                                    <hr className={styles.hrLeftitem} />
                                </div>
                            </Link>
                            <Link to={'/news/' + data[2].id} className='text-decoration-none'>
                                <div className={clsx('row', styles.itemLeft)}>
                                    <div className={clsx('col-5', styles.imgItemLeft)}>
                                        <img className={clsx('img-fluid', styles.imageItem)} src={data[2]?.thumbnail} alt='' />
                                    </div>
                                    <div className={clsx('col-7', styles.titleItemLeft)}>
                                        {data[2].caption}
                                    </div>
                                    <hr className={styles.hrLeftitem} />
                                </div>
                            </Link>
                            <Link to={'/news/' + data[3].id} className='text-decoration-none'>
                                <div className={clsx('row', styles.itemLeft)}>
                                    <div className={clsx('col-5', styles.imgItemLeft)}>
                                        <img className={clsx('img-fluid', styles.imageItem)} src={data[3]?.thumbnail} alt='' />
                                    </div>
                                    <div className={clsx('col-7', styles.titleItemLeft)}>
                                        {data[3].caption}
                                    </div>
                                    <hr className={styles.hrLeftitem} />
                                </div>
                            </Link>
                            <Link to={'/news/' + data[4].id} className='text-decoration-none'>
                                <div className={clsx('row', styles.itemLeft)}>
                                    <div className={clsx('col-5', styles.imgItemLeft)}>
                                        <img className={clsx('img-fluid', styles.imageItem)} src={data[4]?.thumbnail} alt='' />
                                    </div>
                                    <div className={clsx('col-7', styles.titleItemLeft)}>
                                        {data[4].caption}
                                    </div>
                                    <hr className={styles.hrLeftitem} />
                                </div>
                            </Link>
                        </div>
                        <div className={clsx('col-md-8 col-lg-8 col-xl-8 col-sm-6 col-xs-12', styles.itemsCenterRight)}>
                            <div className={clsx('row')}>
                                <Link to={'/news/' + data[0].id} className={clsx('col-md-7 col-lg-7 col-xl-7 col-sm-12 col-xs-12 text-decoration-none', styles.itemCenter)}>
                                    <div className={clsx(styles.topItemCenter)}>
                                        <img className={clsx('img-fluid', styles.imageItem)} src={data[0]?.thumbnail} alt='' />
                                    </div>
                                    <div className={styles.titleItemCenter}>
                                        {data[0].caption}
                                    </div>
                                    <div className={styles.descriptionItemCenter}>
                                        {data[0].description}
                                    </div>
                                </Link>
                                <div className={clsx('col-md-5 col-lg-5 col-xl-5 col-sm-12 col-sx-12', styles.itemsRight)}>
                                    <div className={clsx('row')}>
                                        <Link to={'/news/' + data[5].id} className='text-decoration-none'>
                                            <div className={clsx('col-md-12 col-lg-12 col-xl-12 col-sm-6 col-xs-6 col-6', styles.itemRight)}>
                                                <div className={clsx(styles.topItemRight)}>
                                                    <img className={clsx('img-fluid', styles.imageItem)} src={data[5]?.thumbnail} alt='' />
                                                </div>
                                                <div className={styles.titleItemRight}>
                                                    {data[5].caption}
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to={'/news/' + data[6].id} className='text-decoration-none'>
                                            <div className={clsx('col-md-12 col-lg-12 col-xl-12 col-sm-6 col-xs-6 col-6', styles.itemRight)}>
                                                <div className={clsx(styles.topItemRight)}>
                                                    <img className={clsx('img-fluid', styles.imageItem)} src={data[6]?.thumbnail} alt='' />
                                                </div>
                                                <div className={styles.titleItemRight}>
                                                    {data[6].caption}
                                                </div>
                                            </div>
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

