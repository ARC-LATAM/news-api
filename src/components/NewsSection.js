import React, { useState, useEffect } from 'react'
import 'antd/dist/antd.css';
import { Row, Col, Divider, Card, Button, Badge, Empty } from 'antd';
import { fetchNews } from '../api';
import ReactHtmlParser from 'react-html-parser';
const { Meta } = Card;

const NewsSection = (request) => {
    const [newsSection, setNewsSection] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setNewsSection(await fetchNews(request));
        };
        fetchAPI();
    }, [request]);

    return (
        <div>

            <Row>

                {newsSection.length > 0 ?
                
                    newsSection.map((article, key) =>
                        
                    key < 4 ? 
                    
                    (
                        key < 1 ? 
                        (
                            <Col key={key} md={{span: 24}} lg={{span: 12}} style={{padding: 10}}>
                            <Badge.Ribbon text={article.source.name}>
                            <Card
                                type="inner"
                                style={{marginBottom: 20}}
                                cover={article.urlToImage === "" || article.urlToImage === null ? 
                                <img
                                        alt={article.title}
                                        src="https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/3/3/2/7/237233-6-eng-GB/Cosmoprof-Asia-Ltd-SIC-Cosmetics-20132_news_large.jpg"
                                    />
                                :
                                    <img
                                        alt={article.title}
                                        src={article.urlToImage}
                                    />
                                }
                                
                                
                            >
                                <a style={{ fontSize: '17px' }} onClick={() => window.open(article.url, "_blank")}>{ReactHtmlParser(article.title)}</a>
                                <Divider></Divider>
                                <Meta
                                title={article.author === "" || article.author === null ? null : ReactHtmlParser(article.author)}
                                
                                description={article.description === "" || article.description === null ? ReactHtmlParser(article.publishedAt): ReactHtmlParser(article.publishedAt+"<br>"+article.description) }
                                />
                                </Card>
                            </Badge.Ribbon>
                        </Col>
                            )
                        :(
                        <Col key={key} xs={{span: 24}} sm={{span: 8}} md={{span: 4}} style={{padding: 10}}>
                        <Card
                            type="inner"
                            style={{marginBottom: 20}}
                            cover={article.urlToImage === "" || article.urlToImage === null ? 
                            <img
                                    alt={article.title}
                                    src="https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/3/3/2/7/237233-6-eng-GB/Cosmoprof-Asia-Ltd-SIC-Cosmetics-20132_news_large.jpg"
                                />
                            :
                                <img
                                    alt={article.title}
                                    src={article.urlToImage}
                                />
                            }
                            
                            
                        >
                            <a style={{ fontSize: '17px' }} onClick={() => window.open(article.url, "_blank")}>{ReactHtmlParser(article.title)}</a>
                            <Divider></Divider>
                            <Meta
                            title={article.author === "" || article.author === null ? null : ReactHtmlParser(article.author)}
                             
                            />
                            </Card>
                    </Col>
                        )
                        
                    )

                    : 
                            (
                                <Col key={key} sm={{span: 24}} md={{span: 12}} lg={{span: 8}} style={{padding: 10}}>
                                <Badge.Ribbon text={article.source.name}>
                                <Card
                                    type="inner"
                                    style={{marginBottom: 20}}
                                    cover={article.urlToImage === "" || article.urlToImage === null ? 
                                    <img
                                            alt={article.title}
                                            src="https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/3/3/2/7/237233-6-eng-GB/Cosmoprof-Asia-Ltd-SIC-Cosmetics-20132_news_large.jpg"
                                        />
                                    :
                                        <img
                                            alt={article.title}
                                            src={article.urlToImage}
                                        />
                                    }
                                    
                                    
                                >
                                    <a style={{ fontSize: '17px' }} onClick={() => window.open(article.url, "_blank")}>{ReactHtmlParser(article.title)}</a>
                                    <Divider></Divider>
                                    <Meta
                                    title={article.author === "" || article.author === null ? null : ReactHtmlParser(article.author)}
                                    
                                    description={article.description === "" || article.description === null ? ReactHtmlParser(article.publishedAt): ReactHtmlParser(article.publishedAt+"<br>"+article.description) }
                                    />
                                    </Card>
                                </Badge.Ribbon>
                            </Col>
                        )
                    )
                    : 

                    <Empty />

                   }

            </Row>
            {request.linkText != null ?
                <Row>
                    <Col>
                        <Divider />
                    </Col>
                </Row> : null}
        </div>
    )
}

export default NewsSection;