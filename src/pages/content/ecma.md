---
title: ECMA-Script
description: ECMA-Script
layout: ../../layouts/MainLayout.astro
---

## Entstehung

- Java-Script ist eine dynamische Skriptsprache, welche den Funktionsumfang von HTML-Dokumenten erweitert
- Entstand 1995 im Rahmen der Entwicklung des Browsers Netscape um Benutzerinteraktionen auszuwerten, Inhalte zu verändern, nachzuladen oder zu generieren
- 2010 wurde es mit dem Projekt Node.js ermöglicht, Java-Script außerhalb des Webbrowsers auszuführen. Seither kann man Server mithilfe von Java-Script programmieren

## Sprachstandards

- Wurde 1997 zuerst unter dem Namen ECMA-Script durch ECMA International standardisiert
- Spricht man von Java-Script oder Vanilla-JS, meint man in der Regel den fünften Sprachstandard von 2009 (ES5)
- ES5 wird von allen gängigen Browsern verstanden
- Der Sprachstandard ES2015 oder ES6 ist weit verbreitet und hat ES unter anderem um ein Klassenkonzept und Modulsystem erweitert
- Es wurde seit ES6 jedes Jahr ein neuer Standard veröffentlicht, somit ist ES2020 der aktuellste
- Viele moderne Browser verstehen auch Teile der neuen Standardisierungen, jedoch sind nicht alle Features flächendeckend umgesetzt, weswegen es sich empfiehlt den Code auf den Standard ES5 zu transpilieren

## Code-Transpilation

- Transformation des Codes mithilfe des Tools `babel`
- Es können Sprach-Features der Standardisierungen und auch aktuelle noch nicht standardisierte Konzepte genutzt werden, ohne Inkompatibilitäten mit gewissen Browsern zu riskieren

## Unterschiede zu Type-Script

- Type-Script ist Programmiersprache, welche aktuelle ES-Sprachstandards um eine Typisierung erweitert
- Bei der Transformation des Codes mit dem Tool `tsc` wird versucht, anhand selbst definierter und auch automatisch ermittelten Typen, Fehler in der Prgrammierung zu finden

## Unterschiede zu Java

- JS und Java haben eine sehr unterschiedliche Syntax, Semantik und Verwendung und sind deswegen nicht zu verwechseln!

## Links

- [MDN JS](https://developer.mozilla.org/de/docs/Web/JavaScript)
- [Wikipedia JS](https://de.wikipedia.org/wiki/JavaScript)
- [Babel JS](https://babeljs.io/)
- [TS](https://www.typescriptlang.org/)
