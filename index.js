import express from "express";
import path from "path";
import {fileURLToPath} from 'url';

const app = express();
const port = 3000;

/**
 * Retourne le chemin absolu en fonction du nom du fichier et du dossier qui contient index.js
 * @param {string} chemin 
 * @return {string} le chemin absolu
 */
const getAbsolutePath = (chemin) => {
    const __filename = fileURLToPath(import.meta.url);
    return path.join(path.dirname(__filename),'app',chemin);
}

app.get("/", (req, res) => {
    res.render(getAbsolutePath('index.html'));
})

app.get("/home", (req, res) => {
    res.sendFile(getAbsolutePath('home.html'));
})

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`)
})