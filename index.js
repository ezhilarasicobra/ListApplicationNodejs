const app = require('./app');
const http = require('http');
const { PORT } = require('./utils/config');
const connectToDB = require('./db');

connectToDB();

const server = http.createServer(app);

server.listen(8000, () => {
  console.log(`Server running on port 8000`);
});
