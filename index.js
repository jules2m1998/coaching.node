// Importation du packet permettant la création d'un serveur http
import { createServer, IncomingMessage, ServerResponse } from 'http';
import {readFile} from "fs";

// Déclaration de l'hote qui permettra l'acces au serveur
const hostname = '127.0.0.1';

// Déclaration du port qui permettra l'acces au serveur
const port = 3000;

/**
 * Fonction exéctée lors de l'access au serveur
 * @param req {IncomingMessage} information sur la requête
 * @param res {ServerResponse} information sur la reponse
 */
function requestListener(req, res) {
    console.log(req.url);
    if (req.url === "/") {
        res.statusCode = 200;
        // type de contenu envoyé dans la réponse
        res.setHeader('Content-Type', 'text/html');
        // Lecture du fichier home.html et rendu de son contenu
        readFile("./app/index.html", (err, data) => {
            if (err) {
                console.log(err);
                res.statusCode = 500;
                res.end("Une erreure interne s'est produite...")
                return
            }
            const date = new Date();
            const name = "Jules Junior Meva'a";
            const page = data
            .toString()
            .replace("${date}", `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
            .replace("${name}", name)
            res.end(page);
        });
    }else if (req.url === "/home") {
        // Status de la réponse
        res.statusCode = 200;
        // type de contenu envoyé dans la réponse
        res.setHeader('Content-Type', 'text/html');
        // Lecture du fichier home.html et rendu de son contenu
        readFile("./app/home.html", (err, data) => {
            if (err) {
                console.log(err);
                res.statusCode = 500;
                res.end("Une erreure interne s'est produite...")
                return
            }
            res.end(data);
        });
    }else{
        res.statusCode = 404;
        res.end("Page introuvable !");
    }
}

// Creation du serveur http
const server = createServer(requestListener);

// Démarrage du serveur sur le port et le nom d'hote défini
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});