import React, {Component} from 'react';
import {Link} from 'react-router-component';
import * as HeaderLess from './Header.less';

export default class Header extends Component {
    render () {
        return (
            <header className="site-header">
                <div className="swagger-ui-wrap">
                    <a className="logo" href="http://swagger.io" target="_blank">swagger</a>
                    <div className="search-box">
                        <form>
                            <input
                                type="text"
                                placeholder="Type REST name here..."
                                autoFocus
                            />
                            <input
                                type="submit"
                                value="Search"
                                className="btn btn-success"
                            />
                        </form>
                    </div>
                </div>
            </header>
        )
    }
}