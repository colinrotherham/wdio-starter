export default class Page {

    goToUrl (url) {
        return browser.url(url);
    }

    goHome (url) {
        return browser.url('/');
    }

    getTitle () {
        return browser.getTitle();
    }
}
