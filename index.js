import express from "express";
import path from "path";
import {fileURLToPath} from 'url';

const app = express();
const port = 3000;

// choix du moteur de rendu
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    const date = new Date();
    // rendu avec des données
    res.render('app/index', {name: 'Jules junior', date, list: ["Tomate", "Salade", "Avocat"]});
})

app.get("/home", (req, res) => {
    res.render('app/home');
})

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`)
})