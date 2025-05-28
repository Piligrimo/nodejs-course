import { createServer } from 'http';
import { requestHandler } from './routes.js'

const server = createServer(requestHandler)

server.listen(3000);

console.log('http://localhost:3000/')