---
title: Web Technologien
description: Web Technologien
layout: ../../../layouts/MainLayout.astro
---

## URI

- Uniform-Resource-Identifier

```
          userinfo       host      port
          ┌──┴───┐ ┌──────┴──────┐ ┌┴┐
  https://john.doe@www.example.com:123/forum/questions/?tag=networking&order=newest#top
  └─┬─┘   └───────────┬──────────────┘└───────┬───────┘ └───────────┬─────────────┘ └┬┘
  scheme          authority                  path                 query           fragment
```

(von [Wikipedia](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier))

## Unterscheidung zu URL

- Uniform-Resource-Locator
- Beschreibt nur eine bestimmte Resource, welche durch ihren Path und Query spezifiziert wird
- Bsp: Die URI `http://example.com/wiki/Main_Page` enthält den Uniform-Resource-Locator von `/wiki/Main_Page` auf dem Host `example.com`.

## Requests & Responses

Eine Anfrage an einen Server bezeichnet man als Request.
Diese wird von einem Server mit einem Response beantwortet.

Request und Response bestehen primär aus zwei Teilen (ihrem Envelope).
Dies ist einmal eine Definition von verschiedenen Headern, welche die Meta-Informationen des Envelopes darstellen.
Weiterhin ist noch der Body enthalten, welcher beispielsweise die Daten einer Formulareingabe einer Webseite enhält.

Ein Request wird immer an eine bestimmte Resource gesendet und es wird durch ein HTTP-Verb angegeben, welche Aktion der jeweilige Server an der Resource durchführen soll.

Ein Response enhält immer einen Statuscode, welcher angibt ob die Anfrage ein Erfolg war, oder in einem Fehlerfall den Fehler spezifiziert.

### Request-Envelope

```
verb  url
┌┴┐ ┌──┴──────┐
PUT /api/user/3 (Es soll ein User mit der Id: 3 aktualisiert werden.)

┌────────────────────────────┐
|HEADERS                     |
| Accept: application/json   |
| User-Agent: Chrome         |
──────────────────────────────
|BODY                        |
| {                          |
|   "id": 3,                 |
|   "name": "John Doe"       |
| }                          |
└────────────────────────────┘
```

- [HTTP-Verben](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)

### Response-Envelope

```
┌──────────────────────────────────┐
|HEADERS                           |
| Content-Type: application/json   |
────────────────────────────────────
|BODY                              |
| {}                               |
└──────────────────────────────────┘
Status: 200 (OK)
```

- [HTTP-Statuscodes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
  - Gängig sind 200/201, 400/401/403/404, 300/301

## REST

Representational-State-Transfer

```
[CLIENT] <==={REST-Interface}===> [SERVER]
   └────────────────┬─────────────────┘
   unabhängige Entwicklung voneinander
   (CI/CD, Releases, Programmier-modell/-sprache,..)
```

- Architekturmodell
- Client-Server-Architektur
  - vereinfacht, entkoppelt beide Systeme voneinader mithilfe eines gemeinsamen Interfaces
- Uniform Interface (siehe [URI/URL](uri.md))

### Resource-based

- Things vs. actions
- Nouns vs. verbs
- `GET /api/user/1` vs. `/api/getUser?id=1`
- Resource ist unabhäning ihrer Repräsentation
- Es kann verschiedene Repräsentationen pro Resource geben
  - XML, JSON (siehe [JSON](json.md)), ..
  - JSON ist im Web als Austauschformat nahezu der Standart
- Art einer Action an einer Resource wird durch Angabe eines HTTP-Verbs bestimmt
  - GET (erhalten/anfordern)
  - POST (erzeugen)
  - PUT (aktualisieren)
  - DELETE (löschen)
- Implementiert eine Resource alle dieser Verben entspricht es dem CRUD-Modell (Create-Read-Update-Delete)

### Stateless

- Alles was zur Durchführung einer Action an einer Resource benötigt wird, ist im Request enthalten
  - self-contained
  - URI
    - path-param
    - query-param
  - BODY
  - HEADER

### Links

- [CRUD](https://de.wikipedia.org/wiki/CRUD)
- [HTTP-Verben](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
