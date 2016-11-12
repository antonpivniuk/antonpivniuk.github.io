import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import Ink from 'react-ink'

import './style.scss'

class MainMenu extends React.Component {
    render() {
        const {location} = this.props
        const {route} = this.props
        const page = route.page.data

        return (
            <div className='mainmenu'>
                <div className='mainmenu__container'>

                    <Link to={ prefixLink('/')} className='mainmenu__link' activeClassName='is-selected' onlyActiveOnIndex>
                        <span className='mainmenu__link-name'>En</span>
                        <Ink />
                    </Link>

                    <Link to={ prefixLink('/ua/')} className='mainmenu__link' activeClassName='is-selected' onlyActiveOnIndex>
                        <span className='mainmenu__link-name'>Ua</span>
                        <Ink />
                    </Link>

                    <Link to={ prefixLink('/ru/')} className='mainmenu__link' activeClassName='is-selected' onlyActiveOnIndex>
                        <span className='mainmenu__link-name'>Ru</span>
                        <Ink />
                    </Link>

                </div>

            </div>
        );
    }
}

MainMenu.propTypes = {
    location: React.PropTypes.object,
    page: React.PropTypes.object,
}

export default MainMenu
