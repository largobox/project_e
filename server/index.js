import express from 'express'
import path from 'path'
import { graphqlHTTP } from 'express-graphql'
import schema from './schema'
import 'database'

const app = express()

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.use(express.static(path.join(__dirname, 'public')))

app.get('/*', (req, res) => {
    res.sendFile('index.html', {root: __dirname })
});

app.listen(3000)