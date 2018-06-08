
Sample WebdriverIO + cucumber test project
==========================================

### Prerequisites
Install Homebrew (package manager for macOS)
https://brew.sh/

> For Windows, install [Chocolatey](https://chocolatey.org/) and replace the `brew` commands below with the `choco` equivalents.

### Tooling setup
Via command prompt (administrator privileges).

Install Node.js tooling
```sh
brew install nodejs
npm install -g npm@latest
```

For Windows, install build tooling
```sh
npm install -g --production windows-build-tools
```

For macOS, install build tooling:
1. Download and install Xcode
2. Xcode -> Preferences -> Downloads -> Command Line Tools
3. `brew cask install java`

### Project setup
Via command prompt in the project directory (local user privileges).

Install Node.js dependencies
```sh
npm install
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
