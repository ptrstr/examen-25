# Optimisation
## Contexte

Vous venez de commencer votre stage obligatoire d'été, que vous pensiez super fun. Cependant, vous finissez un peu trop vite les projets qu'on vous assigne. Avec plus rien à faire et décidément très ennuyé par le manque de choses à faire, vous décidez de maximiser votre fun pour le reste de l'été.

Pour ce faire, vous décidez d'écrire un programme pour maximiser votre fun tout en gardant votre balance moyenne d'argent par semaine supérieure à 0. Vous avez une liste d'activités possibles que vous pouvez faire chaque jour de la semaine. Chaque activité a une durée en heures, un coût en argent, et un niveau de fun associé.

## Objectif

L'objectif est de planifier vos activités de manière à maximiser votre fun total pour le reste de l'été, tout en respectant les contraintes suivantes :
1. La balance moyenne d'argent par semaine doit être supérieure à 0.
2. Plusieurs activités ne peuvent pas se chevaucher.

## Pointage
Le score est composé d'une moyenne du fun maximal obtenu entre les 4 fichiers en entrée.
Le pointage est relatif au meilleur score parmi ceux qui font l'examen. Le premier obtient 100 points et les suivants obtiendront leur fraction par rapport à leur rapport de fun équivalent.

## Modèle de Données

Votre programme devra lire en entrée les fichiers json: small.json, medium.json, large.json, xlarge.json et retourner pour chacun des sources le fun obtenu et écrire dans un dossier output l'horaire contenant les possibilitées choisies.
```json
[
  {
    "week_day": "Wed",
    "start_hour": 17,
    "hour_duration": 5,
    "money": 129.72,
    "fun": -0.78
  },
  {
    "week_day": "Thu",
    "start_hour": 12,
    "hour_duration": 11,
    "money": -1155.12,
    "fun": 4.34
  },
  {
    "week_day": "Mon",
    "start_hour": 10,
    "hour_duration": 4,
    "money": 165.84,
    "fun": -0.22
  }
]
```
