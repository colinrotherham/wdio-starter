let config = {
    baseUrl: 'https://adactio.com',
    screenshotPath: './coverage/screenshots/',
    maxInstances: 10,

    // Browsers
    capabilities: [
        { browserName: 'chrome' },
        { browserName: 'firefox' }
    ],

    // Test files
    specs: [
        './test/end-to-end/features/**/*.feature'
    ],

    // Cucumber setup
    cucumberOpts: {
        compiler: [
            'js:@babel/register'
        ],
        require: [
            './test/end-to-end/steps/page'
        ],
        tagExpression: 'not @skip',
    },

    coloredLogs: true,
    exclude: [],
    framework: 'cucumber',
    logLevel: 'error',
    reporters: ['spec'],
    seleniumInstallArgs: { version: '3.4.0' },
    seleniumArgs: { version: '3.4.0' },
    services: ['selenium-standalone'],
    sync: false,

    // Run before tests
    before: async () => {
        await browser.windowHandleFullscreen();
    }
};

exports.config = config;
