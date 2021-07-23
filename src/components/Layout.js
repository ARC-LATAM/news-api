import React, { Suspense } from 'react';
import 'antd/dist/antd.css';
import './Layout.css';
import { Layout, Menu, PageHeader, Divider, Spin} from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  StockOutlined,
} from '@ant-design/icons';
import { fetchSources } from '../api';

const NewsSection = React.lazy(() => import('./NewsSection'));
const News = React.lazy(() => import('./News'));

const { Header, Sider, Content } = Layout;

class MainLayout extends React.Component {
  state = {
    collapsed: false,
    sources: ["general", "sports", "business", "entertainment", "health", "science", "technology"],
    homePage: true,
    query: '',
  };


  loadNews(query) {
    this.setState({
      homePage: false,
      query: query
    });
  }

  render() {
    return (

        <Layout className="site-layout">
          <div style={{position: 'fixed', zIndex: 1, width: '100%'}}>
          <PageHeader className="site-page-header" style={{display: 'flex',justifyContent: 'center',position: 'relative', background:"white", fontSize: '46px'}}>NEWS API.com</PageHeader>
         
         <Menu theme="light" mode="horizontal" style={{display: 'flex',justifyContent: 'center',position: 'relative' }} defaultSelectedKeys={['1']}>
         
          
          

          
          {this.state.sources.map((source) =>
              <Menu.Item onClick={() => this.loadNews(source)} key={source}>
                {source}
              </Menu.Item>
            )}
      </Menu>
      </div>
          <Content
            className="site-layout-background"
            style={{
              padding: 30,
              marginTop: 150,
              minHeight: 'auto',
              backgroundColor: "#f6f6f6",
            }}
          >
            <Suspense fallback={ <Spin />}>
              {this.state.homePage === true ? <News /> : <NewsSection category='top-headlines' query={'category=' + this.state.query} topHeading={this.state.query} results='100' />}
            </Suspense>
          </Content>
        </Layout>
    );
  }
}

export default MainLayout;