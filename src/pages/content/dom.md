---
title: Document Object Model
description: Document Object Model
layout: ../../layouts/MainLayout.astro
---

Dieser Elementenbaum ist jedoch nicht statisch, sondern kann durch DOM-Manipulation ausgelesen, verändert und erweitert werden.

Diese Methoden des document-Objekts ermöglichen es, auf jeden beliebigen Elementknoten direkt zuzugreifen:

- `getElementById()`: kann auf Elemente zugreifen, die ein dokumentweit eindeutiges id-Attribut enthalten
- `getElementsByName()`: kann auf Elemente zugreifen, die einen Namen besitzen (er muss nicht unbedingt eindeutig sein)
- `getElementsByTagName()`: kann auf alle Elemente zugreifen in der Form: "liefere mir das 27. td-Element im Dokument".
- `querySelector()`: gibt das erste Element zurück, das dem angegebenen CSS-Selektor entspricht.
- `querySelectorAll()`: gibt eine Liste von Elementen zurück, die dem angegebenen CSS-Selektor (auch mehrere, durch Komma getrennte, Angaben möglich) entsprechen

Ausgehend von einem ermittelten Elementknoten lässt sich dann schnell auf dessen Attribute und Inhalt zugreifen.

Ihr könnt aber auch mit JavaScript/DOM/Document/createElement ein Element neu erzeugen und dann mit

- `appendChild`
- `insertBefore`

in den DOM einhängen.

## Links

https://wiki.selfhtml.org/wiki/JavaScript/DOM#DOM-Manipulation
