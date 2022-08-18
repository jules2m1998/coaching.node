# Formation node js coaching

## Pour initialiser un projet node

``` console
npm init -y
```

* **npm** est le gestionnaire de packet pour node js il permet d'installer des librairies developpées par la communauté nodejs.
* **init** est un attribut pour npm permettant d'initialiser un projet node
* **-y** est un drapeau de l'attibut init permettant d'initialiser un projet en répondant oui à toutes les questions posée en console.


## Pour créer un serveur nodejs

``` console
npm run dev
```

* **run** attribut de npm permettant l'exécution d'un script dans le fichier ***package.json***.
* **dev** le nom du script à exécuter.

## Utilisation du serveur express

On rencontre deux problèmes

* Il faut récupérer les routes les unes après les autres dans des if et on doit aussi lire les fichiers html à la main.

``` js
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
```

* Et il faut à chaque modification du fichier ***index.js*** redémarrer le serveur node js.

Pour résoudre ces problèmes nous allons :

* Utiliser une librairie js appelé **express js** pour creer un serveur plus simplement et utiliser les routes autrement qu'avec des if.
* Et la librairie **nodemon** pour le redémarrage du serveur à chaque modification du fichier ***index.js***

### Installation de nodemon

```console
npm install -g nodemon
```

Le drapeau **-g** permet une installation globale sur tout le système d'exploitation

Une fois l'installation effectuée modifier la ligne ```"dev": "node index"``` par ```"dev": "nodemon index"``` le fichier **package.json**

### Installation de express

```console
npm install express --save
```

### Installation du moteur de template

Nous permettra d'envoyer des données à nos pages html

```console
npm install ejs --save
```