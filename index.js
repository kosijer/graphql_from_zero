// [SERVER] index.js

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;



const fetch = require("node-fetch");

const { ApolloServer } = require("apollo-server");



const typeDefs = `

    type Query {

        hello: String!

    }

`;



const resolvers = {

    Query: {

        hello: async () => {

    const resultA = await fetch('http://www.exampleA.com').then(res => res.json());
    const resultB = await fetch('http://www.exampleB.com').then(res => res.json());

    return { ...resultA, ...resultB }

    }
  }

};



const server = new ApolloServer({

    typeDefs,

    resolvers

});



server.listen().then(({ url }) => 

    console.log(`Server running on port ${url}`));



