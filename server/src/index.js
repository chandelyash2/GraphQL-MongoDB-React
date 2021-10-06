import express from 'express'
import {ApolloServer ,gql} from 'apollo-server-express'
import mongoose from 'mongoose'
import {typeDefs} from './typeDefs'
import {resolvers} from './resolvers'

const startServer =async()=>{
await mongoose.connect("mongodb+srv://codeyash02:Ji9hVZyLA7V4qSIA@cluster0.zak9q.mongodb.net/GqltDatabase?retryWrites=true&w=majority",{
  useNewUrlParser: true,
  useUnifiedTopology: true,

})

const server =new ApolloServer({typeDefs,resolvers})
await server.start()
const app =express()
server.applyMiddleware({app})
await new Promise((resolve) => app.listen({ port: 4000 }, resolve));
console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}
startServer({typeDefs,resolvers})