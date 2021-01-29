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
            app: path.resolve(__dirname, 'client/app'),
            helper: path.resolve(__dirname, 'client/helper'),
            core: path.resolve(__dirname, 'client/component/core'),
            page: path.resolve(__dirname, 'client/app/page'),
            layout: path.resolve(__dirname, 'client/layout'),
            api: path.resolve(__dirname, 'client/api'),
            store: path.resolve(__dirname, 'client/app/store'),
            constant: path.resolve(__dirname, 'client/constant'),
            error: path.resolve(__dirname, 'client/error'),            
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
            shared: path.resolve(__dirname, 'shared'),
            database: path.resolve(__dirname, 'server/database'),
            // Workaround. apollo-server issues #4637 on github OR go from 'apollo-server-express' to 'apollo-server'
            graphql$: path.resolve(__dirname, './node_modules/graphql/index.js'),
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
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    }
}

module.exports = [clientConfig, serverConfig];