module.exports = {
    presets: [
        ['@babel/env', {
            shippedProposals: true,
            useBuiltIns: 'usage',
            targets: {
                browsers: [],
                node: true,
            },
        }]
    ],
    sourceMap: true,
}
