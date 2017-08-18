import chai from 'chai';
import { defineSupportCode } from 'cucumber';
import Page from '../pages/page';

let expect = chai.expect;
let page = new Page();

defineSupportCode(({ Given, When, Then }) => {

    Given(/^I go to the home page$/, () => {
        return page.goHome();
    });

    Given(/^I visit the URL '([^']*)?'$/, (matchHref) => {
        return page.goToUrl(matchHref);
    });

    When(/^I click the link '([^']*)?'$/, (matchLink) => {
        return browser.click(`a=${matchLink}`);
    });

    Then(/^I should see the title '([^']*)?'$/, async (matchTitle) => {
        let title = await page.getTitle();
        expect(title).to.equal(matchTitle);
    });
});
