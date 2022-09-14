---
title: Verwendung mehrerer Dateien
description: Verwendung mehrerer Dateien
layout: ../../layouts/MainLayout.astro
---

## Importieren von Dateien oder Funktionen

```js
// ganze Datei importieren
import "./api.js";

// nur die Funktion getEntries importieren
import { getEntries } from "./api.js";
```

## Exportieren von Funktionen

```js
export function getEntries() {}

function getData() {}
export { getData };
```
