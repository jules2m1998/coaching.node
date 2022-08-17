// Importation du packet permettant la création d'un serveur http
const http = require('http');

// Déclaration de l'hote qui permettra l'acces au serveur
const hostname = '127.0.0.1';

// Déclaration du port qui permettra l'acces au serveur
const port = 3000;

// Creation du serveur http
/**
 * @param req information sur la requête
 * @param res information sur la reponse
 */
const server = http.createServer((req, res) => {
    // Status de la réponse
    res.statusCode = 200;
    // type de contenu envoyé dans la réponse
    res.setHeader('Content-Type', 'text/plain');
    // Envoie de la réponse
    res.end('Hello World');
});

// Démarrage du serveur sur le port et le nom d'hote défini
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});