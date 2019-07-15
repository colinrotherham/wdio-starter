Feature: Home page

Scenario: User sees the home page
    Given I go to the home page
    Then I should see the title 'Adactio: Jeremy Keith'

Scenario: User sees the Journal page
    Given I go to the home page
    When I click the link 'Journal'
    Then I should see the title 'Adactio: Journal'

Scenario: User sees the Links page
    Given I go to the home page
    When I click the link 'Links'
    Then I should see the title 'Adactio: Links'

Scenario: User sees the 404 page
    Given I go to the home page
    But I visit the URL '/fdgdffg'
    Then I should see the title 'Adactio: 404'
