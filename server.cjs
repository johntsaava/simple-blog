const jsonServer = require('json-server');
const os = require('os');
console.log('tmpdir', os.tmpdir());

const server = jsonServer.create();
const router = jsonServer.router('tmp/db.json');
const middlewares = jsonServer.defaults();

server.use(
  jsonServer.rewriter({
    '/api/*': '/$1',
  }),
);
server.use(middlewares);
server.use(router);

server.listen(3000, () => {
  console.log('JSON Server is running');
});

module.exports = server;
