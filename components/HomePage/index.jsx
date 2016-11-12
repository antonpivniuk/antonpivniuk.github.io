import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'

import './style.scss'

import logoAntonPivniuk from '../../static/img/svg-icons/native-american-eagle.svg'
import logoPromoRepublic from '../../static/img/svg-icons/native-american-eagle.svg'
import logoTripMe from '../../static/img/svg-icons/tripme.svg'
import logoCoriolanUi from '../../static/img/svg-icons/coriolan-ui.svg'
import logoFabrique from '../../static/img/svg-icons/native-american-eagle.svg'

class HomePage extends React.Component {
    render() {
        const {route} = this.props
        const page = route.page.data

        return (
            <div className='homepage'>

                <div className='homepage__wellcome'>
                    <img className='homepage__wellcome-logo' src={ prefixLink(logoAntonPivniuk) } alt='{ page.antonPivniuk } Logo' />
                    <h1 className='homepage__wellcome-title'>{ page.antonPivniuk }</h1>
                    <h2 className='homepage__wellcome-description'>Team Lead / Senior Web Design / UX/UI, Product Manager</h2>
                </div>

                <div className='homepage__contacts'>
                    <div className='homepage__contacts-title'>Contacts</div>
                    <div className='homepage__contacts-description'>+380 95 126 26 80</div>
                    <div className='homepage__contacts-description'>antonpivniuk@gmail.com</div>
                    <div className='homepage__contacts-description'>linkedin.com/in/antonpivniuk</div>
                </div>


                <div className='homepage__biography'>
                    <div className='homepage__biography-title'>Biography</div>
                    <div>Date of birth: 27 October 1985</div>
                    <div>Place of birth: Vinnytsia, Ukraine</div>
                    <div>Citizen status: Not married</div>
                    <div>Nationality: Ukrainian</div>
                    <div>Driver license: Yes</div>

                    <div>Born</div>
                    <div>1985</div>

                    <div>Liceum Universum</div>
                    <div>2002</div>
                    <div>Kyiv, Ukraine</div>

                    <div>Kyiv National University of Technologies and Design</div>
                    <div>2002</div>
                    <div>Kyiv, Ukraine</div>

                    <div>Work</div>
                    <div>12 years</div>
                </div>

                <div className='homepage__languages'>
                    <div className='homepage__languages-title'>Languages</div>

                    <div className='homepage__languages-name'>Ukrainian</div>
                    <div className='homepage__languages-bar'>
                        <div className='homepage__languages-progress' style={{width:'100%'}}></div>
                    </div>
                    <div className='homepage__languages-status'>Nattive</div>

                    <div className='homepage__languages-name'>Russian</div>
                    <div className='homepage__languages-bar'>
                        <div className='homepage__languages-progress' style={{width:'93%'}}></div>
                    </div>
                    <div className='homepage__languages-status'>Nattive</div>

                    <div className='homepage__languages-name'>English</div>
                    <div className='homepage__languages-bar'>
                        <div className='homepage__languages-progress' style={{width:'43%'}}></div>
                    </div>
                    <div className='homepage__languages-status'>Pre-Intermediate</div>
                </div>

                <div className='homepage__skills'>
                    <div className='homepage__skills-title'>Skills</div>

                    <div className='homepage__skills-name'>Personal</div>
                    <div>Communication 14/15</div>
                    <div>Cooperation 14/15</div>
                    <div>Creativity 11/15</div>
                    <div>Organizing 12/15</div>
                    <div>Concept View 12/15</div>

                    <div className='homepage__skills-name'>UX/UI/Animated Design</div>
                    <div>SketchApp 14/15</div>
                    <div>Photoshop 14/15</div>
                    <div>Principle 9/15</div>
                    <div>Illustrator 6/15</div>

                    <div className='homepage__skills-name'>Project Management</div>
                    <div>Jira 13/15</div>
                    <div>Wrike 13/15</div>
                    <div>Trello 11/15</div>
                </div>

                <div className='homepage__projects'>
                    <div className='homepage__projects-title'>My best projects</div>

                    <div className='homepage__projects-item'>
                        <img className='homepage__projects-logo' src={ prefixLink(logoPromoRepublic) } alt='{ config.siteTitle } Logo' />
                        <div className='homepage__projects-content'>
                            <div className='homepage__projects-name'>PromoRepublic</div>
                            <div className='homepage__projects-position'>Co-founder, Art Director</div>
                            <div className='homepage__projects-status'>http://promorepublic.com</div>
                            <div className='homepage__projects-description'>Social media marketing soft</div>
                        </div>
                    </div>

                    <div className='homepage__projects-item'>
                        <img className='homepage__projects-logo' src={ prefixLink(logoTripMe) } alt='{ config.siteTitle } Logo' />
                        <div className='homepage__projects-content'>
                            <div className='homepage__projects-name'>TripMe</div>
                            <div className='homepage__projects-position'>CEO, Co-founder, Design</div>
                            <div className='homepage__projects-status'>Project on hold</div>
                            <div className='homepage__projects-description'>Travel App. It’s a mobile app that collect all the town secret places and guides you along the steps of famous people</div>
                        </div>
                    </div>

                    <div className='homepage__projects-item'>
                        <img className='homepage__projects-logo' src={ prefixLink(logoCoriolanUi) } alt='{ config.siteTitle } Logo' />
                        <div className='homepage__projects-content'>
                            <div className='homepage__projects-name'>Coriolan</div>
                            <div className='homepage__projects-position'>Head of Coriolan Project. Senior Web Designer</div>
                            <div className='homepage__projects-status'>NDA/Gambling</div>
                            <div className='homepage__projects-description'>Frontend framework</div>
                        </div>
                    </div>

                    <div className='homepage__projects-item'>
                        <img className='homepage__projects-logo' src={ prefixLink(logoFabrique) } alt='{ config.siteTitle } Logo' />
                        <div className='homepage__projects-content'>
                            <div className='homepage__projects-name'>Fabrique</div>
                            <div className='homepage__projects-position'>Design Team lead</div>
                            <div className='homepage__projects-status'>NDA/Gambling</div>
                            <div className='homepage__projects-description'>Site builder</div>
                        </div>
                    </div>
                </div>

                <div dangerouslySetInnerHTML={{ __html: page.body}} />
            </div>
        );
    }
}

HomePage.propTypes = {
    page: React.PropTypes.object,
}

export default HomePage
