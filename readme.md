## Exercice : mini-site NYC Restaurants


A partir du **dump MongoDB "dataset.json"** déjà utilisé, réaliser un site permettant de lister les restaurants et ajouter des commentaires.

Les wireframes suivants contiennent les éléments requis pour cet exercice. Vous avez également la possibilité d'ajouter des comportements ou pages supplémentaires. Vous devez faire preuve de créativité à ce niveau.

La base du projet vous est livrée afin d'accélérer le démarrage. Il s'agit d'un projet créé avec le générateur d'**Express**. Un **modèle Mongoose** ainsi qu'**un routeur pour les restaurants** ont été créé.

Pour ce projet, vous utiliserez :

* Express,
* MongoDB,
* Mongoose,
* Jade.

Vous pouvez également utiliser n'importe quel package **npm**.

Vous pouvez aussi utiliser un framework pour l'interface (**Bootstrap**, **Foundation** ...) en le "hot-linkant" depuis un CDN par exemple si vous le souhaitez.

N'hésitez pas à utiliser des middlewares ou d'autres solutions pour rendre le code plus lisible.

Pensez aussi à bien documenter votre code.

### Pages

#### Layout

1. Un menu contient les liens vers la page d'accueil et la page qui liste les restaurants.
2. Le lien actif doit être mis en valeur (souligné, ...).

#### Accueil

1. Doit être accessible sur l'URL racine (``http://localhost:3000``)
2. Afficher les 10 restaurants avec le meilleur score moyen (grades.score)
3. Afficher les 10 derniers commentaires du site (tout restaurant confondu)
4. Les restaurants listés sont des liens vers les pages de vue correspondantes.

#### Liste de restaurants

1. Doit être accessible sur l'URL de type : ``http://localhost:3000/restaurants``
2. Lister les restaurants par ordre alphabétique.
3. Afficher 10 restaurants par page -> pagination nécessaire
4. Pour la pagination, faire en sorte d'afficher seulement les 5 pages précédente ainsi que les 5 suivantes.
5. Permettre l'utilisation de filtres avec le type de cuisine et/ou quartier.
6. Attention, à bien traiter les URL's invalides (page ou filtre inexistant).

#### Vue de restaurants

1. Doit être accessible sur l'URL de type : ``http://localhost:3000/restaurants/view/RESTAURANT_ID``
2. Afficher les informations d'un restaurant (nom, quartier, type, adresse).
3. Afficher sa localisation sur une map grâce à ses coordonnées geographiques et Google Maps.
4. Afficher toutes ses notes ainsi que le score moyen et le nombre total de scores.
5. Afficher un formulaire et une liste de commentaires liés au restaurant.

### Tips

1. Commencez simplement par compléter le schéma du modèle "restaurants".

2. Vous pouvez utiliser l'API statique de Google maps pour afficher la carte de localisation : ``https://developers.google.com/maps/documentation/static-maps``.

3. Pour vous faciliter la tâche avec la pagination, il existe des plugins Mongoose (mongoose-paginate, ...) sur npm.

4. Attention, le dump de données peut contenir des données mal renseignées (nom vide, ...), à vous de faire en sorte que ce genre de données ne soient pas affichées.

5. Il faudrait s'assurer de valider les commentaires en empêchant d'ajouter des textes vides. Utilisez la validation mongoose pour cela et n'hésitez pas à utiliser connect-flash par exemple pour afficher l'erreur ou le succès d'un ajout de commentaire.

6. A priori, toutes les informations dont vous avez besoin sont dans les documentations en ligne de **Mongoose**, **ExpressJS** et **Jade**.

7. Utilisez **Nodemon** pour éviter de redémarrer le projet en permanence : http://nodemon.io (commande : ``nodemon bin/www` après l'avoir installé en global).


### Créativité / Prise d'initiatives

La créativité et la prise d'initiative seront valorisées. Une ou plusieurs autres fonctionnalités que celles listées dans les wireframes sont attendues.

Si vous manquez d'idées, vous pouvez par exemple proposer :

* des listes de suggestions de restaurants dans les fiches restaurants,
* un système d'ajout de notes aux restaurants,
* ...

### Notation

* Répondre au besoin fonctionnel (accueil+menu) : **3**
* Répondre au besoin fonctionnel (liste) : **4**
* Répondre au besoin fonctionnel (vue) : **4**
* Créativité / Prise d'initiative : **3**
* Modèle(s) et schéma(s) Mongoose: **2**
* Documentation / Lisibilité du code : **2**
* Interface graphique (Ergonomie) : **2**
