import { ApolloServer } from 'apollo-server-micro';
import { context } from './context';
import { schema } from './schema';

export const apolloServer = new ApolloServer({
  schema,
  context,
});
