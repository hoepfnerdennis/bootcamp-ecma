---
title: Daten laden
description: Daten laden
layout: ../../../layouts/MainLayout.astro
---

Um Daten zu laden bietet der Browser die `fetch`-API. Mit dieser können asyncrone Requests getätigt werden.

## fetch in js

```js
fetch(`https://api.weather.com/${city}`)
  .then((res) => res.json())
  .then((weather) => {
    // do something
  });
```

## asynchrone Vorgänge in react

```jsx
function Weather({ city }) {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    fetch(`https://api.weather.com/${city}`)
      .then((response) => response.json())
      .then((result) => {
        setWeather(result);
      });
  }, [city]);

  return (
    <div>
      Die Temperatur in {city} ist {weather.temperature}
    </div>
  );
}
```
