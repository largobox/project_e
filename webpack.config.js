const path = require('path');

const clientConfig = {
    devtool: 'source-map', // Turn off warnings in browser console. Need read about this option
    mode: 'development',
    entry: './client/index.tsx',
    output: {
        filename: 'client.js',
        path: path.resolve(__dirname, 'dist/public'),
    },
    resolve: {
        alias: {
            // ToDo. this aliases duplicate options in tsconfig.json
            component: path.resolve(__dirname, 'client/component'),
            helper: path.resolve(__dirname, 'client/helper'),
            core: path.resolve(__dirname, 'client/component/core'),
            page: path.resolve(__dirname, 'client/app/page'),
            layout: path.resolve(__dirname, 'client/layout'),
            api: path.resolve(__dirname, 'client/api'),
            store: path.resolve(__dirname, 'client/app/store'),
        },
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            ['@babel/preset-env'],
                            ['@babel/preset-react']
                        ]
                    }
                }
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    }
}

const serverConfig = {
    mode: 'development',
    target: 'node',
    entry: './server/index.js',
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        alias: {
            controller: path.resolve(__dirname, 'server/controller'),
            model: path.resolve(__dirname, 'server/model'),
            database: path.resolve(__dirname, 'server/database'),
        },
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /server\/index\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            [
                                '@babel/preset-env', {
                                    'targets': {
                                        'node': 'current'
                                    }
                                }
                            ]
                        ]
                    }
                }
            }
        ]
    }
}

module.exports = [clientConfig, serverConfig];