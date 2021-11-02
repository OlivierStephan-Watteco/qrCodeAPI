# qrCodeAPI
API Node en REST qui renvoie le nom, l'url de la documentation, et le configurateur du capteur scanné.

## - Comment lancer le projet sans Docker

Avoir node sur sa machine, la LTS est utilisé pour le projet.  
https://nodejs.org/en/download/

`npm install`

Afin d'installer les dépendances du projet.

`npm test`

Pour tester le projet

`npm start`

Pour lancer le projet

Une fois le projet lancé on peut faire un:  
`curl localhost:3000`  
Afin de s'assurer que le projet est bien lancé et accessible.

##  - Comment lancer le projet avec Docker

L'image du projet est créée par le Dockerfile.  
Il faut être à la racine du projet pour lancer ces étapes.

`docker build -t <tag-name> .`

tag-name : nom que tu choisis pour ton image, node-api par exemple

`docker run -p <hostPort>:<containerPort> imageName`

hostPort : le port sur lequel le container va être accessible sur la machine qui héberge le container.  
containerPort : le port utilisé dans le container pour communiquer, ici port 3000 et c'est modifiable dans le index.js  
imageName : nom donné à l'étape de build


L'api est maintenant accessible via localhost:hostPort
