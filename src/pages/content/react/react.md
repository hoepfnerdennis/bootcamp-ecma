---
title: React
description: React
layout: ../../../layouts/MainLayout.astro
---

Wer könnte react besser erklären, als die, die es gebaut haben...

Wirf einen Blick in die Doku von react: https://reactjs.org/docs/getting-started.html

Oder in ihre neue Doku, die viel schöner aussieht (aber noch beta und under construction): https://beta.reactjs.org/

## props

```jsx
function Body({ name }) {
  return <span>Hallo ich bin {name}</span>;
}

function App() {
  return <Body name="Karen" />;
}
```

## state und event binding

```jsx
import { useState } from "react";

function Input() {
  const [city, setCity] = useState("");

  const handleInput = (event) => {
    setCity(event.target.value);
  };

  return (
    <div>
      {city}
      <input type="text" onChange={handleInput} value={city} />
    </div>
  );
}
```
