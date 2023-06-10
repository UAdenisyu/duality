module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                '@babel/plugin-proposal-decorators',
                {
                    legacy: true,
                },
            ],
            [
                'module-resolver',
                {
                    alias: {
                        assets: './src/assets',
                        components: './src/components',
                        constants: './src/constants',
                        hooks: './src/hooks',
                        stores: './src/stores',
                        navigation: './src/navigation',
                        screens: './src/screens',
                        styles: './src/styles',
                        types: './src/types',
                    },
                },
            ],
            'react-native-reanimated/plugin',
        ],
    };
};
