import React from 'react';
import ReactDOM from 'react-dom';
import Router from './pages/Router';
import { I18nextProvider } from 'react-i18next'; // as we build ourself via webpack
import i18n from './i18n';

ReactDOM.render(
    <I18nextProvider i18n={ i18n }><Router /></I18nextProvider>,
    document.getElementById('app')
);