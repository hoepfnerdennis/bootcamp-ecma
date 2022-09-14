---
title: HTML
description: HTML
layout: ../../layouts/MainLayout.astro
---

Die Hypertext Markup Language ist eine Auszeichnungssprache, welche von Internet-Browsern interpretiert wird.
Sie ermöglicht uns Texte, Hyperlinks, Bilder und Videos semantisch zu strukturieren.
Es handelt sich um keine Programmiersprache im eigentlichen Sinne, da sie nur ein bestimmtes Datenformat darstellt.

HTML wird von dem World Wide Web Consortium (W3C) weiterentwickelt und die aktuelle Version ist HTML5.

## XML-Tags

- HTML basiert auf der Strukur von XML
- Tags bestehen immer aus einem öffnenden Tag `<html>` und einem schließendem Tag `</html>`
- Es gibt auch einteilige Tags wie `<br />`, welche mit einem `/` enden.
- HTML-Tags können Atribute erhalten: `<html lang="de">`

## Kommentare

- Man kann auch Kommentare verwenden: `<!-- Kommentar -->`

## Grundgerüst

- Jedes HTMl-Dokument besteht aus dem Grundgerüst `<!DOCTYPE html><html><head></head><body></body></html>`

## Häufig genutzte Elemente

- `<h1>`, `<h2>`,`<h3>`, `<h4>` Überschriften
- `<p>` Text-Paragraph
- `<a>` Link
- `<button>` Button
- `<label for="input-name">` Formularlabel
- `<input type="text" id="input-name" />` Texteingabefeld
- `<select id="input-name">` Dropdown; `<option>` Dropdownelement
- `<div>` Layout-Container (Block)
- `<span>` Layout-Container (Inline)
- `<ul>` Unsortierte Liste; `<ol>` Nummerierte Liste; `<li>` Listenelement

## Styling mit CSS

- Die Darstellung der HTML-Dokumente wird mit Cascading Style Sheets (CSS) definiert
- Man kann HTML-Elemente direkt stylen (Inline-Styles): `<h1 style="color: blue;">Hallo</h1>`
- Es können externe Stylesheets mit einem `link`-Tag im HTML-Head geladen werden: `<link href="style.css" rel="stylesheet">`
- Oder man plaziert im HTML-Head ein Inline-Stylesheet: `<style>h1 { color: blue; }</style>`
- Stylesheets können Klassen oder Ids enthalten, welche man den HTML-Elementen zuweisen kann:

```
<style>.blue-class { color: blue; } #content-container { width: 100px; }</style>
<p class="blue-class">Text</p>
<div id="content-container">Content</div>
```

## Dynamische Inhalte mit Java-Script

- Es kann mithilfe des `<script>`-Tags Java-Script in eine Webseite eingebunden werden:

```
<script type="text/javascript">
// Hello World!
</script>
```

- Externe Dateien können mit dem `src`-Atribut integriert werden: `<script src="script.js" type="text/javascript">`

## Links

- [MDN HTML](https://developer.mozilla.org/de/docs/Web/HTML)
- [MDN CSS](https://developer.mozilla.org/de/docs/Web/CSS)
- [Wikipedia HTML](https://de.wikipedia.org/wiki/Hypertext_Markup_Language)
- [Wikipedia CSS](https://de.wikipedia.org/wiki/Cascading_Style_Sheets)

TODOs

- Beispiele für die HTML-Elemente mit children einbauen
