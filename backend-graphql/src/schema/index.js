import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import User from './types/user';
import Post from './types/post';

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    ...User.queries,
    ...Post.queries,
  }),
});

const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    ...User.mutations,
    ...Post.mutations,
  }),
});

const schema = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
});

export default schema;
