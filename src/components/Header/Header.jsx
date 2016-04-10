import React, {Component} from 'react';
import {Link} from 'react-router-component';
import * as HeaderLess from './Header.less';
import { translate } from 'react-i18next';

class Header extends Component {
    render () {
        const { t } = this.props;
        return (
            <header className="site-header">
                <div className="swagger-ui-wrap">
                    <a className="logo" href="http://swagger.io" target="_blank">swagger</a>
                    <div className="search-box">
                        <form>
                            <input
                                type="text"
                                placeholder={t('common:Header.searchInputPlaceholder')}
                                autoFocus
                            />
                            <input
                                type="submit"
                                value={t('common:Header.searchButton')}
                                className="btn btn-success"
                            />
                        </form>
                    </div>
                </div>
            </header>
        )
    }
}

export default translate([])(Header);