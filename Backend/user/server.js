const http = require('http');
const app = require('./app');


const server = http.createServer(app);




server.listen(5001, () => {
    console.log('User service is running on port 5001');
});