const http = require('http');

const server = http.createServer((req, res) => {
  res.end('This is my first response');
});

// Chequeamos si hay algún puerto configurado por defecto, sino, lanzamos contra 3000
server.listen(process.env.PORT || 3000)
