import { GraphQLClient } from 'graphql-request';

const client = new GraphQLClient(process.env.GRAPHQL_HOST, {
  headers: {
    Authorization: `Bearer ${process.env.MY_TOKEN}`
  }
});

export default client;
