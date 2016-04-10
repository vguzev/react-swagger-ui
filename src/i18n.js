import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(XHR)
    .use(LanguageDetector)
    .init({
        fallbackLng: 'en',
        // have a common namespace used around the full app
        defaultNS: 'common',
        ns: ['common'],
        debug: true,

        interpolation: {
            escapeValue: false // not needed for react!!
        },
        load: 'all',
        lngWhiteList: ['en', 'ru'],
        nsSeparator: ":",
        keySeparator: '.',
        contextSeparator: "#",
        pluralSeparator: "-",
        escapeInterpolation: false
    });

export default i18n;