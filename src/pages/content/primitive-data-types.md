---
title: Datentypen
description: Datentypen
layout: ../../layouts/MainLayout.astro
---

## Primitives

### Number

Eine Zahl.

```js
const example = 21;
const secondExample = 2.42;
```

### String

Eine Zeichenkette.

```js
const example = "Hallo";
```

### Boolean

Wahrheitswert, kann wahr (true) oder falsch (false) sein

```js
const example = true;
```

### undefined

Der Typ Undefined hat nur einen möglichen Wert, nämlich undefined.

Der Wert undefined steht für »leer, noch kein Wert zugewiesen«. Verschiedene JavaScript-interne Operationen können undefined zurückgeben.

Wenn Sie zum Beispiel eine Variable deklarieren, ohne ihr einen Wert zuzuweisen, so hat die Variable dennoch einen Wert – nämlich undefined. Wenn Sie auf eine Eigenschaft eines Objekts zugreifen, die nicht existiert, so bekommen Sie den Wert undefined zurück.

undefined wird also intern in JavaScript an verschiedenen Stellen genutzt, um »kein Wert« darzustellen.

```js
console.log();
```

### null

Der Typ Null hat ebenfalls nur einen möglichen Wert, nämlich null.

Der Wert null steht für »absichtlich kein Wert«. Er steht auch für »absichtlich kein Objekt« dort, wo ein Objekt sein könnte.

Es gibt in JavaScript beispielsweise Funktionen, die üblicherweise Objekte zurückgeben. Wenn Sie kein Objekt zurückgeben können, etwa weil sie nichts gefunden haben, dann geben sie null zurück.

Der Unterschied zwischen undefined und null ist sehr subtil. Beide sind Platzhalter für »leer« und »kein Wert« mit dem feinen Unterschied »kein Wert zugewiesen« und »absichtlich kein Objekt«.

```js
const example = null;
console.log(example);
```

---

#### Quelle

https://wiki.selfhtml.org/wiki/JavaScript/Datentyp

#### [Zur Client-Readme](../README.md)

## Kommentare

```js
// einzeiliger Kommentar
/* mehrzeiliger
 * Kommentar
 */
```

## Typen

- Null
- Boolean `true`
- Number `1` oder `2.4`
- String `"Text"`
- Array `[1, 2, 3]`
- Object `{key: value}`

## Variablen

- In ECMA-Script gibt es drei verschiedene Arten von Variablen:
- `var`: Legt eine neue Variable an
- `let`: Legt eine veränderliche Variable an (ab ES6)
- `const`: Legt eine kostante Variable an (ab ES6)

```js
var variable;
const MAGIC_NUMBER = 3;
const name = "Robert";
let numberOfItems = 1;
numberOfItems = 3;
```

## Prüfen auf einen Typ `typeof`

- Mit `typeof` kann ein bestimmter Typ ermittelt werden

```js
const test = { isValid: false, key: 1, name: "robert", subscribed: null };
typeof test.isValid;
```

## Komplexe Typen

### Objekte

```js
const object = { hello: "world" };
```

```js
const object = {
  hello: "world",
  foo: {
    bar: 123,
    baz: "foo",
  },
};
```

```js
const object = {
  hello: "world",
  foo: "bar",
};
const { hello, foo } = object;
hello; // "world"
foo; // "bar"
```

### Arrays

```js
const array = ["hello", "world"];
```

```js
const array = ["hello", "world"];
const [foo, bar] = array;
foo; // "hello"
bar; // "world"
```
