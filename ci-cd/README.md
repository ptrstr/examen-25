# CI/CD as Code
Salut cher employé de Lego City,

Depuis plusieurs années, nos architectes tentent de construire la ville et que nos plans ne semblent pas fonctionner ensemble.
Pour cela, on espère implémenter des outils pour faire en sorte que ces plans fonctionnent ensembles.
Pour ce faire, il faudra donc concevoir le pipeline Github (Actions/Workflow) pour valider les plans avant de passer à un autre.

## Étape 0: Choisir un projet de départ.

Vous devez choisir un projet de départ qui peut être testé, un template et pas quelquechose que vous avez déjà travaillé dessus (des serveurs surtout), des examples
https://github.com/app-generator/sample-django-datatables/tree/master (plus simple, mais un peu moins de points, car beaucoup des outils sont très accessibles)
https://github.com/nventive/DotNet.Backend.Template (plus complexes, mais plus de points)...
JavaScript surement dans le même niveau que Python
Des templates Rust pour les connaisseurs c'est aussi OK, probablement un niveau entre pour les points...

Une autre alternative -> Un de ceux du collab-project

# S'IL VOUS PLAIT, METTRE LE LIEN DU TEMPLATE UTILISÉ, MERCI

## Étape 1: Construire l'environnement de tests.
Vous devez, à l'aide d'un outil de test automatisés (unitaires), pouvoir montrer les tests qui fail, le taux de coverage, et le taux de succès.

Pour ce faire vous devez:
- Ajouter un outil de test automatisé
- Ajouter un outil de coverage
- Ajouter un outil de reporting


## Étape 2: Ajouter une étape de Linting.
Pour faire cette étape, il sera nécessaire d'ajouter un outil qui formatte bien vos fichier, selon des règles customizable.

Pour ce faire, on veut 2 fichiers de lint, un pour l'environnement local, et l'autre pour le remote.


## Étape 3: Construire un environnement stable.
Construire une image Docker pour reproduire l'instance serveur.

Pour ce faire, on veut
- une image docker personnalisée, avec les outils considérés comme nécessaire pour la construction
- on veut que la taille de l'image finale soit minimisée pour le partage, et que les étapes soient réutilisables (voire optimiser le caching).

## Étape 4: Faire le pipeline.

### Étape 4.1
Rouler le linting

Prérequis: Relié à Main

Pour ce faire: 
- Pouvoir rouler l'outil choisis
- Avoir un retour dans le résumé (summary) de l'exécution.

### Étape 4.2
Rouler les tests

Prérequis: Relié à Main ou flag d'exécution "TESTS" à True

Pour ce faire:
- Pouvoir rouler l'outil choisis
- Avoir un retour dans le résumé

### Étape 4.3
Créer un tag de version

Prérequis:
- Relié à Main ET/OU flag d'exécution "IMAGE" à True

Pour ce faire:
- Ce tag doit suivre la nomenclature SEMVER
- L'utilisation d'outil de tagging est permis, tel que https://github.com/semantic-release/semantic-release
- Ce tag doit être appliqué sur le commit correspondant et doit idéalement créer une variable d'environnement pour les autres workflow "SEM_VERSION"

### Étape 4.4
Construire l'image serveur

Prérequis: 
- Tests complétés
- Relié à Main ET/OU flag d'exécution "IMAGE" à True
- Au moins un changement du projet depuis le dernier commit

Pour ce faire:
- Construire l'image Docker avec ou sans une action de build
- Tag l'image avec le tag plus haut
- Publish l'image sur la liste de packages
- Mettre un délai d'expiration de 10 jours

### Étape 5
Montrer ses résultats :)

## Étape Real Bonus si c'est trop rapide??
Ajoute des outils qui check les vulnérabilités...


Good luck, have fun