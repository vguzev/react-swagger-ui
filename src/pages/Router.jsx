import React, {Component} from 'react';
import {Locations, Location, NotFound} from 'react-router-component';

import AboutPage from './AboutPage';
import MainPage from './MainPage';
import NotFoundPage from './NotFoundPage';

export default class Router extends Component {
    render () {
        return (
            <Locations hash>
                <Location path="/" handler={MainPage}/>
                <Location path="/about" handler={AboutPage}/>
                <NotFound handler={NotFoundPage} />
            </Locations>
        )
    }
}