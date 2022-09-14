---
title: JSON
description: JSON
layout: ../../layouts/MainLayout.astro
---

Die JavaScript Object Notation (JSON) ist ein standardisiertes, textbasiertes Format, um strukturierte Daten auf Basis eines JavaScript Objekts darzustellen. Es wird häufig für die Übertragung von Daten in Webanwendungen verwendet (z.B. das Senden einiger Daten vom Server zum Client, damit sie auf einer Webseite angezeigt werden können oder umgekehrt).

JSON existiert als eine Zeichenkette (String) — das ist nützlich, um Daten über das Netzwerk zu übermitteln. Es muss in ein natives JavaScript Objekt umgewandelt werden, wenn du auf die Daten zugreifen willst. Das ist kein großes Ding — JavaScript stellt ein globales JSON-Objekt zur Verfügung, das Methoden zur Konvertierung zwischen den beiden zur Verfügung stellt.

### Konvertierung

```
JSON.parse()
JSON.stringify()
```

### Deklaration und Beispiel

```
{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": [
        "Radiation resistance",
        "Turning tiny",
        "Radiation blast"
      ]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}
```

### Zugriff

```
superHeroes.homeTown
superHeroes['active']
superHeroes['members'][1]['powers'][2]

```
