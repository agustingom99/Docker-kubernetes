const http = require('http');
const port = 3000;

const requestHandler = (request, response) => {
  response.end('Hola desde Node.js!');
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('Algo salió mal', err);
  }
  console.log(`Servidor escuchando en el puerto ${port}`);
});
