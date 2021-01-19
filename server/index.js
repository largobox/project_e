import express from 'express'
import path from 'path'
import { ApolloServer } from 'apollo-server-express' // ToDo. After beta version need go to 'apollo-server'
import { typeDefs, resolvers } from './schema'
import 'database'

const server = new ApolloServer({ typeDefs, resolvers });
const app = express()

server.applyMiddleware({ app });

app.use(express.static(path.join(__dirname, 'public')))

app.get('/*', (req, res) => {
    res.sendFile('index.html', {root: __dirname })
});

app.listen({ port: 3000 }, () =>
  console.log('Graphiql browse to http://localhost:3000' + server.graphqlPath)
);