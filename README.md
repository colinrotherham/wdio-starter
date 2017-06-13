
Sample WebdriverIO + cucumber test project
==========================================

### Prerequisites
Install Homebrew (package manager for macOS)
https://brew.sh/

> For Windows, install [Chocolatey](https://chocolatey.org/) and replace the `brew` commands below with the `choco` equivalents.

### Tooling setup
Via command prompt (administrator privileges).

Install Node.js tooling
```
brew install nodejs
npm install -g npm@latest
```

For Windows, install build tooling
```
npm install -g --production windows-build-tools
```

For macOS, install build tooling:
1. Download and install Xcode
2. Xcode -> Preferences -> Downloads -> Command Line Tools
3. `brew cask install java`

### Project setup
Via command prompt in the project directory (local user privileges).

Install Node.js dependencies
```
npm install
```

### Testing

Run the test scripts
```
npm test
```
