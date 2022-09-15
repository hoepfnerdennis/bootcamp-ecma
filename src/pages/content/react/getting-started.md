---
title: Projekt aufsetzen
description: Projekt aufsetzen
layout: ../../../layouts/MainLayout.astro
---

## create-react-app

Das Projekt ist eine react Anwendung, die mit `create-react-app` erstellt werden kann.

Führe dazu `npx create-react-app weather-app` aus.

Anschließend wechsle in den den erstellten Ordner `cd weather-app`.

## openweathermap.org

Diese App verwendet die API von [openweathermap.org](https://openweathermap.org). Um die Anwendung zu verwenden, erstelle dir dort einen API-Token.

Dieser muss dann in ein .env-File eingetragen werden.

```bash
REACT_APP_API_KEY=<API KEY>
```

Hier findest du die Bestimmungen von openweathermap.org: https://openweathermap.org/price#weather

## Styling

Zur einfachen Verwendung und schnellem Start, verwenden wir eine Komponenten-Bibliothek von Material-UI.

Installiere hierzu folgende Pakete: `npm install @emotion/react @emotion/styled @mui/icons-material @mui/material`.

Weitere Informationen zu Material-UI findest du in ihrer Doku: https://mui.com/material-ui/getting-started/overview/

### Beispiel: Material-UI Überschrift

Doku: https://mui.com/material-ui/react-typography/#component

```jsx
import { Typography } from "@mui/material";

function Weather() {
  return <Typography variant="h2">Wetter</Typography>;
}
```

## Skripte

Folgende Skripte stehen dir zur Verfügung:

### `npm run start`

Startet die App im development mode.

Öffne http://localhost:3000, um sie im Browser zu sehen.

Die Seite aktualisiert sich bei Änderungen von selbst (in der Regel).

Es ist bereits ein linter integriert, dessen Fehler in der Konsole ausgegeben werden.

### `npm run build`

Erzeugt eine produktionsfertige Version der App.

Der Code wird dabei optimiert, komprimiert und gebündelt bereit gestellt, um die bestmögliche Performance zu gewährleisten.
