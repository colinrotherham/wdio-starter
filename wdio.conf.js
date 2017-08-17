let config = {
    baseUrl: 'https://www.polygon.com',
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
            'js:babel-register'
        ],
        require: [
            './test/end-to-end/steps'
        ]
    },

    coloredLogs: true,
    exclude: [],
    framework: 'cucumber',
    logLevel: 'error',
    reporters: ['spec'],
    services: ['selenium-standalone'],
    sync: false,

    // Run before tests
    before: function() {

        // Default browser size
        browser.setViewportSize({
            width: 1280,
            height: 768
        });
    }
};

exports.config = config;
