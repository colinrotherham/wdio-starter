Feature: Home page

Scenario: User sees the home page
    Given I go to the home page
    Then I should see the title 'Polygon'

Scenario: User sees the Circuit Breaker page
    Given I go to the home page
    When I click the link 'Features'
    Then I should see the title 'Feature - Polygon'

Scenario: User sees the 404 page
    Given I visit the URL '/fdgdffg'
    Then I should see the title '404 Not found'
