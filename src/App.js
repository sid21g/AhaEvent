import React, { Component } from 'react';
import config from 'react-global-configuration';

import DocumentMeta from './components/document-meta';

import './stylesheets/dist/style.min.css';
import { Layout } from 'antd';

class App extends Component {
    render() {
        let metaData = {}
        return (
                <Layout>
                    <DocumentMeta {...metaData} />
                    <span className="logo">{config.get('siteName')}</span>
                    <p className="tagline">{config.get('siteTagline')}</p>
                </Layout>
               );
    }
}

export default App;
