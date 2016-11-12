import React from 'react'
import DocumentTitle from 'react-document-title'

import HomePage from '../components/HomePage'
import MainMenu from '../components/MainMenu'
import Footer from '../components/Footer'
import { config } from 'config'

import './style.scss'

class MarkdownWrapper extends React.Component {
    render() {
        const {route} = this.props
        const post = route.page.data
        let layout, template

        layout = post.layout

        if (layout === 'HomePage') {
            template = <HomePage {...this.props} />
        }

        return (
            <DocumentTitle title={ `${post.title} • ${config.siteTitle}` }>
                <div className='flex-sticky'>
                    <div className='flex-sticky__content'>
                        <div className='main-container'>
                            <MainMenu {...this.props} />
                            { template }
                        </div>
                    </div>
                    <Footer {...this.props} />
                </div>
            </DocumentTitle>
        );
    }
}

MarkdownWrapper.propTypes = {
    route: React.PropTypes.object,
}

export default MarkdownWrapper
