import {GraphQLID, GraphQLNonNull} from 'graphql'

import { UserType } from '../typeDefs';

export const getUserQuery = {
  type: UserType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID)  },
  },
  resolve: async (parent, args, context) => {
    const { userAPI } = context;
    const user= await userAPI.getUser(args.id);
    return user.data;
  },
};

/*
type Query {
  getUser(id: ID!): User
}
*/
