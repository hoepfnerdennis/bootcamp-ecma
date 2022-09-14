---
title: Schleifen
description: Schleifen
layout: ../../layouts/MainLayout.astro
---

**for**

```js
const letters = ["a", "b", "c"];
for (let i = 0; i < letters.length; i++) {
  console.log("letter: ", letters[i]);
}
```

**forEach**

```js
const letters = ["a", "b", "c"];
letters.forEach((letter) => console.log("letter:", letter));
```

**map**

```js
const letters = ["a", "b", "c"];
const uppercaseLetters = letters.map((letter) => letter.toUpperCase());
console.log("letters in uppercase: ", uppercaseLetters);
```

**find**

```js
const persons = [
  { name: "Jörg", age: 42 },
  { name: "Thorsten", age: 23 },
  { name: "Christina", age: 16 },
];
const foundPerson = persons.find((person) => person.age === 42);
console.log("The person who is 42 is: ", foundPerson.name, foundPerson);
```

**filter**

```js
const persons = [
  { name: "Jörg", age: 42 },
  { name: "Thorsten", age: 23 },
  { name: "Christina", age: 16 },
];
const adults = persons.filter((person) => person.age >= 18);
console.log("The adults are: ", adults);
```

## Links

- [MDN Array](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array)
