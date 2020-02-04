module.exports = (api) => {
    api.cache(true);

    const presets = [
        ['@babel/preset-env', {
            corejs: 3,
            shippedProposals: true,
            targets: {
                browsers: [],
                node: true,
            },
            useBuiltIns: 'usage',
        }],
    ];

    const plugins = [];

    return {
        presets,
        plugins,

        // Other options
        sourceMaps: true,
    };
};
