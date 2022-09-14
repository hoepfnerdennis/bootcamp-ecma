---
title: Funktionen
description: Funktionen
layout: ../../layouts/MainLayout.astro
---

**function-Syntax**

```js
// Funktionskopf
function getData(name /**Parameterliste**/) {
  // Rückgabewert
  return "Text";
}
```

**Arrow Functions**

```js
// Funktionskopf
const getData = (name /**Parameterliste**/) => {
  // Rückgabewert
  return "Text"
};

Alternative:

const multiplyWithTwo = inputNumber => inputNumber * 2;
```

## Links

[MDN Doku](https://developer.mozilla.org/de/docs/Web/JavaScript/Guide/Functions)
