import { GraphQLNonNull } from 'graphql';

import { UserType } from '../typeDefs';

export const createUserMutation = {
  type: new GraphQLNonNull(UserType),
  args: {},
  resolve: async (_, args) => { },
};
