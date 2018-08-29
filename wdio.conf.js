const args = require('command-line-args');

// Allow command line overrides
const flag = args([
    { name: 'browserstack', type: Boolean },
]);

const config = {
    baseUrl: 'https://adactio.com',
    screenshotPath: './coverage/screenshots/',
    maxInstances: 10,

    // Browsers
    capabilities: [
        {
            browserName: 'chrome',
            chromeOptions: {
                args: [
                    '--disable-gpu',
                    '--disable-setuid-sandbox',
                    '--headless',
                    '--no-sandbox',
                ],
            },
        },
        {
            browserName: 'firefox',
            'moz:firefoxOptions': {
                args: [
                    '-headless',
                ],
            },
        },
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
    services: ['selenium-standalone'],
    sync: false,

    // Run before tests
    before: async () => {
        try { await browser.windowHandleFullscreen(); } catch (error) {}
    }
};

// Adjust config for Browserstack
if (flag.browserstack) {
    config.services = ['browserstack'];
    config.maxInstances = 1;

    // Browserstack credentials
    config.user = process.env.BROWSERSTACK_USERNAME;
    config.key = process.env.BROWSERSTACK_ACCESS_KEY;

    config.browserstackLocal = true;
    config.browserstackLocalForcedStop = true;

    // Browserstack options
    config.browserstackOpts = {
        localIdentifier: `wdio_${Date.now()}`,
        key: config.key,
        forceLocal: true,
    };

    // Browserstack browsers
    config.capabilities = [
        {
            device: 'Google Pixel',
            realMobile: true
        },
        {
            browserName: 'chrome',
            os: 'Windows',
            os_version: '10'
        },
        {
            browserName: 'firefox',
            os: 'Windows',
            os_version: '10'
        },
        {
            browserName: 'iPhone',
            os: 'OS X'
        },
        {
            browserName: 'internet explorer',
            os: 'Windows',
            os_version: '8.1'
        },
        {
            browserName: 'internet explorer',
            os: 'Windows',
            os_version: '10'
        },
    ];

    // Force local tunnel
    config.onPrepare = async (config, capabilities) => {
        for (const capability of capabilities) {
            capability['browserstack.localIdentifier'] = config.browserstackOpts.localIdentifier;
            capability['browserstack.local'] = true;
        }
    };
}

exports.config = config;
