const http = require('http');
const app = require('./app');


const server = http.createServer(app);




server.listen(5002, () => {
    console.log('captain service is running on port 5002');
});