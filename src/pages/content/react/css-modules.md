---
title: CSS Modules
description: CSS Modules
layout: ../../../layouts/MainLayout.astro
---

In unserer react Anwendung werden wir für Stylings nicht klassisch ein globales Stylesheet,
sondern CSS Modules verwenden.

Wir wollen unsere Styles, wie auch unseren Code, in Module unterteilen. So können insbesondere bei CSS
Nebeneffekte eingeschränkt oder vermieden werden. Unser Stylesheet bezieht sich dann nämlich nur auf die Komponente,
in der wir es verwenden.

Für CSS Modules wird ein Stylesheet mit dem Zusatz `module` angelegt `styles.module.css`.
Darin kann ganz klassisch für Klassen entsprechendes CSS geschrieben werden.

```css
.container {
  width: 100px;
  background-color: blue;
}
```

Die Besonderheit liegt in der Verwendung. Es wird wie ein Modul importiert und dann explizit über eine Objekt-Referenz
auf die Klasse zugegriffen, statt sie string zu definieren.

```jsx
import styles from "./styles.module.css";

function Component() {
  return <div className={styles.container}>Hello World</div>;
}
```

## `display: flex`

Zur Anordnung und Ausrichtung der Elemente auf der Seite und auch zueinander bieten HTML und CSS mehrere Möglichkeiten.

Eine sehr elegante Möglichkeit ist das Flex-Layout. Damit lassen sich Elemente einfach zueinander ausrichten und verhalten
sich dabei auch noch responsive.

Im Folgenden ist das Flex-Layout in einfachen Beispielen dargestellt.

**Standard ohne flex**

```html
<div class="container">
  <div>Element 1</div>
  <div>Element 2</div>
</div>
```

<div>
  <div style="background-color: cyan; color: black;">Element 1</div>
  <div style="background-color: yellow; color: black;">Element 2</div>
</div>

**flex-layout**

```css
.container {
  display: flex;
}
```

<div style="display: flex">
  <div style="background-color: cyan; color: black;">Element 1</div>
  <div style="background-color: yellow; color: black;">Element 2</div>
</div>

```css
.container {
  display: flex;
  flex-direction: column;
}
```

<div style="display: flex; flex-direction: column;">
  <div style="background-color: cyan; color: black;">Element 1</div>
  <div style="background-color: yellow; color: black;">Element 2</div>
</div>

```css
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
```

<div style="display: flex; flex-direction: column; align-items: center;">
  <div style="background-color: cyan; color: black;">Element 1</div>
  <div style="background-color: yellow; color: black;">Element 2</div>
</div>

Die tatsächliche Macht von `display: flex` ist hier besser beschrieben, als ich das dokumentieren könnte:
https://css-tricks.com/snippets/css/a-guide-to-flexbox/
