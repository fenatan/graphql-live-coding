import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import postAPI from './apis/postAPI'
import userAPI from './apis/userAPI'
import schema from './schema';

const server = new ApolloServer({ schema });

const startServer = async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: () => ({ userAPI, postAPI }),
  });
  console.log(`Servidor rodando em ${url}`);
};

startServer();
