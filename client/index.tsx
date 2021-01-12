import * as React from 'react'
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
} from '@apollo/client';
import { Router } from 'react-router-dom'
import { render } from 'react-dom'
import App from './app'
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme'
import { createBrowserHistory } from "history";

const history = createBrowserHistory()
const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache()
});

render(
    <Router history={history}>
        <ApolloProvider client={client}>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </ApolloProvider>
    </Router>,
    document.getElementById('root')
)