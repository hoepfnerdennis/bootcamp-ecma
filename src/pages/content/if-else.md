---
title: Bedingte Anweisungen
description: Bedingte Anweisungen
layout: ../../layouts/MainLayout.astro
---

## `if`, `else`, `else if` und `boolean`-Variablen

```js
const numberOfItems = 3;
const isSmallerZero = numberOfItems < 0;
const equalsZero = numberOfItems === 0;

if (isSmallerZero) {
  console.log("Kleiner als 0");
} else if (equalsZero) {
  console.log("Gleich 0");
} else {
  console.log("Größer als 0");
}
```

**Kompakte Schreibweise**

```js
const isGreaterZero = numberOfItems > 0;

isGreaterZero ? console.log("Größer als 0") : console.log("Kleiner gleich 0");

or;

const resultText = isGreaterZero ? "Größer als 0" : "Kleiner gleich 0";
console.log(resultText);
```

## Operatoren

- `>`, `>=`
- `<`, `<=`
- `==`, `!=`
- `===`, `!==`
