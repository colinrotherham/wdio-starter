
Sample WebdriverIO + cucumber test project
==========================================

### Prerequisites
Install Homebrew (package manager for macOS)
https://brew.sh/

### Tooling setup
Via command prompt (administrator privileges).

Install Node.js tooling
```sh
brew install nodejs
npm install -g npm@latest
```

For macOS, install build tooling:
1. Download and install Xcode
2. Xcode -> Preferences -> Downloads -> Command Line Tools
3. Install Java 11

```sh
brew tap caskroom/versions
brew cask install java11
```

### Project setup
Via command prompt in the project directory (local user privileges).

Install Node.js dependencies
```sh
npm ci
```

### Testing

Run the test scripts
```sh
npm test
```

Run individual scenarios marked with `@tag` etc
```sh
npm test -- --cucumberOpts.tagExpression=@tag
```

```cucumber
@tag
Scenario: User sees the Links page
    Given I go to the home page
    When I click the link 'Links'
    Then I should see the title 'Adactio: Links'
```

To skip a scenario, mark with `@skip` (see *wdio.conf.js*)

### Browserstack
If you have a Browserstack account, add your credentials as environment variables:  
`BROWSERSTACK_USERNAME` and `BROWSERSTACK_ACCESS_KEY`

Then run your tests on Browserstack instead:

```sh
npm test -- --browserstack
```
