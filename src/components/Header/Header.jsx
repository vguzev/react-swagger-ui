import React, {Component} from 'react';
import {Link} from 'react-router-component';
import * as HeaderLess from './Header.less';

export default class Header extends Component {
    render () {
        return (
            <div className="header">
                <a className="logo" href="http://swagger.io">swagger</a>
                <div><input type="text" placeholder="Search..." /></div>
            </div>
        )
    }
}