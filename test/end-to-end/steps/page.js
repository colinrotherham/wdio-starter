import chai from 'chai';
import Page from '../pages/page';

let expect = chai.expect;
let page = new Page();

export default function () {
    this.Given(/^I go to the home page$/, async () => {
        return page.goHome();
    });

    this.Given(/^I visit the URL '([^']*)?'$/, async (matchHref) => {
        return page.goToUrl(matchHref);
    });

    this.When(/^I close the privacy policy overlay$/, async (matchLink) => {
        return browser.click(`button=×`);
    });

    this.When(/^I click the link '([^']*)?'$/, async (matchLink) => {
        return browser.click(`a=${matchLink}`);
    });

    this.Then(/^I should see the title '([^']*)?'$/, async (matchTitle) => {
        let title = await page.getTitle();
        expect(title).to.equal(matchTitle);
    });
}
