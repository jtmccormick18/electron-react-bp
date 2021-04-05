import React from 'react';

import {Row} from 'react-bootstrap';

import {Link} from 'react-router-dom';

// import { BrowserRouter as Router } from 'react-router-dom';

import { push as Menu } from 'react-burger-menu'
var styles = {
    bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '30px',
        left: '36px',
        top: '36px'
    },
    bmBurgerBars: {
        background: '#373a47'
    },
    bmBurgerBarsHover: {
        background: '#a90000'
    },
    bmCrossButton: {
        height: '24px',
        width: '24px'
    },
    bmCross: {
        background: '#bdc3c7'
    },
    bmMenuWrap: {
        position: 'fixed',
        height: '100%'
    },
    bmMenu: {
        background: '#373a47',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em'
    },
    bmMorphShape: {
        fill: '#373a47'
    },
    bmItemList: {
        color: '#b8b7ad',
        padding: 20
    },
    bmItem: {
        display: 'block',
        // padding:3
    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
    }
}


class SideNav extends React.Component {
    state = {
    }
    showSettings(event) {
        event.preventDefault();
    }

    render() {
        // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
        const { routes } = this.props;
        return (
            <Menu styles={styles} outerContainerId={'master-container'} pageWrapId={'inner-container'}>
                <Row className="text-center mb-3">
                    <img src={this.props.logo} height={50} width="auto"></img>
                </Row>
                {routes.map(route => (
                    // <a style={{color:'white'}} id={route.name} className="menu-item" href={route.path}>
                    //     <i className={route.icon} style={{height:'1.75em'}}/>
                    //     <span style={{marginLeft:10}}>
                    //         {route.name}
                    //     </span>
                    // </a>)
                    <Link to={route.path} id={route.name} className="menu-item nav-link">
                        {route.name}
                    </Link>
                    
                    )
                )
                }

            {/* <a onClick={this.showSettings} className="menu-item--small" href="">Settings</a> */}
            </Menu>
        );
    }
}
export default SideNav;