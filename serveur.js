const port = 5000; // mettons
const server = require('./route.js'); // importer les routes
console.log(server);

server.listen(port, () => {
  console.log('Serveur en exécution sur http://' + port + '/');
});