# json-server vercel deploy guide

### 1. Install json-server 0.17.4

Run the following command to install json-server version 0.17.4:

```
npm i json-server@0.17.4
```

### 2. Add vercel.json file

Create a `vercel.json` file with the following content:

```json
{
  "builds": [
    {
      "src": "server.cjs",
      "use": "@vercel/node",
      "config": {
        "includeFiles": ["db.json"]
      }
    },
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist",
        "buildCommand": "npm run build"
      }
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "server.cjs"
    },
    {
      "src": "/assets/(.*)",
      "dest": "/assets/$1"
    },
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

### 3. Add server.cjs file

Create a `server.cjs` file with the following content:

```javascript
const jsonServer = require('json-server');
const fs = require('fs');
const path = require('path');
const db = JSON.parse(fs.readFileSync(path.join('db.json')));

const server = jsonServer.create();
const router = jsonServer.router(db);
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
```

### 4. Change run-db script

Update the `package.json` file to include the following script:

```json
"run-db": "node server.cjs",
```

### 5. axios baseURL should start with /api

In your application, ensure that the axios baseURL starts with `/api`:

```javascript
export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
});
```

### 6. env file example

In your environment file, set `VITE_API_BASE_URL` to the following:

```bash
VITE_API_BASE_URL=http://localhost:3000/api
```

### 7. Demo Link

Check out the live demo at: https://simple-blog-tau-six.vercel.app/
