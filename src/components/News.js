import React from 'react'
import 'antd/dist/antd.css';
import NewsSection from './NewsSection';

const News = () => {

    return (
        <div>
            <NewsSection category='top-headlines' query='category=general' topHeading='general' linkText='See More Headlines' results='100' />
        </div>
    )
}

export default News;