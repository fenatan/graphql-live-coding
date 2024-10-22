import {
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLList,
} from 'graphql';

import { PostType } from '../post/typeDefs';

export const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'User type definition',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: {
      type: new GraphQLNonNull(GraphQLString), resolve: (user) => {
        return `${user.firstName} ${user.lastName}`;
      }
    },
    email: { type: new GraphQLNonNull(GraphQLString) },
    age: { type: GraphQLInt },
    isAdmin: { type: new GraphQLNonNull(GraphQLBoolean) },
    rating: { type: GraphQLFloat },
    posts: {
      type: new GraphQLList(new GraphQLNonNull(PostType)), resolve: async (user, _, context) => {
        const { postAPI } = context;
        const posts = await postAPI.getPostsByUser(user.id);
        return posts.data;
      }
    },
  }),
});


/*
type User {
  id: ID!
  name: String!
  email: String!
  age: Int
  isAdmin: Boolean!
  rating: Float
  posts: [Post!]
}
*/
