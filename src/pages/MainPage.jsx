import React, {Component} from 'react';
import {Link} from 'react-router-component';

import BasePage from './../components/BasePage/BasePage';
import Header from '../components/Header/Header';

export default class MainPage extends BasePage {
    render () {
        return (
            <div>
                <Header />
                Hello world!!! <Link href="#/about">About</Link>
            </div>
        )
    }
}