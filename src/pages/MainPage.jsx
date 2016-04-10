import React, {Component} from 'react';
import {Link} from 'react-router-component';

import Header from '../components/Header/Header';

export default class MainPage extends Component {
    render () {
        return (
            <div>
                <Header />
                Hello world!!! <Link href="#/about">About</Link>
            </div>
        )
    }
}