export default class Page {

    async goToUrl (url) {
        return browser.url(url);
    }

    async goHome (url) {
        return browser.url('/');
    }

    async getTitle () {
        return browser.getTitle();
    }
}
