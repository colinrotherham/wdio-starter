module.exports = {
    presets: [
        ['@babel/env', {
            shippedProposals: true,
            useBuiltIns: 'usage',
            targets: {
                node: true
            }
        }]
    ]
}
