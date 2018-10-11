import { Given, When, Then } from 'cucumber';
import chai from 'chai';
import Page from '../pages/page';

let expect = chai.expect;
let page = new Page();

Given(/^I go to the home page$/, async () => {
    return page.goHome();
});

Given(/^I visit the URL '([^']*)?'$/, async matchHref => {
    return page.goToUrl(matchHref);
});

When(/^I click the link '([^']*)?'$/, async matchLink => {
    return browser.click(`a=${matchLink}`);
});

Then(/^I should see the title '([^']*)?'$/, async matchTitle => {
    let title = await page.getTitle();
    return expect(title).to.equal(matchTitle);
});
