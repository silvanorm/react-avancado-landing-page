import { GraphQLClient } from 'graphql-request';

const client = new GraphQLClient('http://localhost:1337/graphql', {
  headers: {
    Authorization: `Bearer ${process.env.MY_TOKEN}`
  }
});

export default client;
