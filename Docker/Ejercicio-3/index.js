const http = require('http');
const port = process.env.PORT || 3000;
const message = process.env.MESSAGE || 'Hola desde Node.js!';

const requestHandler = (request, response) => {
  response.end(message);
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('Algo salió mal', err);
  }
  console.log(`Servidor escuchando en el puerto ${port}`);
});
