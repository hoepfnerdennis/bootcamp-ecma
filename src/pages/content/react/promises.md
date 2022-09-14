---
title: Asynchrone Verarbeitung
description: Asynchrone Verarbeitung
layout: ../../../layouts/MainLayout.astro
---

## Promise

Das Promise-Objekt (dt./deutsch Ein Versprechens-Objekt, das später eingelöst wird) wird für asynchrone Berechnungen verwendet.

Ein Promise kann sich in einem von drei Zuständen befinden:

**pending (schwebend)**: initialer Status, weder fulfilled noch rejected.

**fulfilled (erfüllt)**: heisst das die Operation erfolgreich abgeschlossen wurde.

**rejected (zurück gewiesen)**: heisst das die Operation gescheitert ist.

### Resolve eines Promise

```js
const promise = new Promise((resolve, reject) => {
  // the function is executed automatically when the promise is constructed

  // after 1 second signal that the job is done with the result "done"
  setTimeout(() => resolve("done"), 1000);
});
```

### Reject eines Promise

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// reject runs the second function in .then
promise
  .then((result) => alert(result)) // doesn't run
  .catch((error) => alert(error)); // shows "Error: Whoops!" after 1 second
```

```js
const promise = loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"
);

promise
  .then((script) => alert(`${script.src} is loaded!`))
  .catch((error) => alert(`Error: ${error.message}`));

promise.then((script) => alert("Another handler..."));
```

- [MDN Promise](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)

## async/await

async und await ist eine andere Art, ein Promise zu verwenden. Die Funktionsweise dahinter ist die selbe. Mit async und await
kann eine sequenzielle Schreibweise verwendet werden, was die Lesbarkeit einer Funktion deutlich einfacher macht. Gerade dann,
wenn mehrere Promises voneinader abhängig sind.

Hier ein Beispiel in klassischer Promise Schreibweise und anschließend mit async und await.

```js
function getWeather() {
  getCurrentLocation().then((location) => {
    getWeather(location).then((weather) => {
      alert(weather);
    });
  });
}
```

```js
async function getWeather() {
  const location = await getCurrentLocation();
  const weather = await getWeather(location);
  alert(weather);
}
```

Noch deutlicher wird es, wenn man noch ein error-handling ergänzt.

```js
function getWeather() {
  getCurrentLocation()
    .then((location) => {
      getWeather(location)
        .then((weather) => {
          alert(weather);
        })
        .catch((error) => {
          handleError(error);
        });
    })
    .catch((error) => {
      handleError(error);
    });
}
```

```js
async function getWeather() {
  try {
    const location = await getCurrentLocation();
    const weather = await getWeather(location);
    alert(weather);
  } catch (error) {
    handleError(error);
  }
}
```
