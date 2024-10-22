import { GraphQLNonNull, GraphQLInputObjectType, GraphQLString, GraphQLID } from 'graphql';

import { PostType } from '../typeDefs';

const CreatePostInput = new GraphQLInputObjectType({
  name: 'CreatePostInput',
  fields: {
    title: { type: new GraphQLNonNull(GraphQLString) },
    content: { type: GraphQLString },
    userId: { type: new GraphQLNonNull(GraphQLID) },
  },
});

export const createPostMutation = {
  type: new GraphQLNonNull(PostType),
  args: {
    input: { type: new GraphQLNonNull(CreatePostInput) },
  },
  resolve: async (_, args, context) => {
    const { postAPI } = context;
    const post = await postAPI.createPost(args.input);
    return post.data;
  },
};

/*
type Mutation {
  createPost(input: CreatePostInput!): Post!
}

input CreatePostInput {
  title: String!
  content: String
  userId: ID!
}
*/
