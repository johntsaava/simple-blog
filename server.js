import jsonServer from 'json-server';

const server = jsonServer.create();
const router = jsonServer.router('db.json');

server.use(middlewares);

server.use(router);

server.listen(3000, () => {
  console.log('JSON Server is running');
});

module.exports = server;
