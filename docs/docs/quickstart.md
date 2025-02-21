# Quickstart

Jumpstart your development with this Quickstart guide. Learn to seamlessly integrate Remult in various stacks, from installation to defining entities for efficient data querying and manipulation.

### Try Remult Online

The fastest way to try Remult is in an online REPL.

This [minimal example](https://codesandbox.io/p/devbox/github/remult/minimal-example/tree/main/?file=%2Fclient%2Fmain.ts%3A6%2C46&layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clqwakgge0005356j3v061u2d%2522%252C%2522sizes%2522%253A%255B80.61755146262189%252C19.38244853737811%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clqwakgge0002356jxigi72yo%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clqwakgge0003356j81phvue5%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clqwakgge0004356jcszzeo9u%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B64.52957066498075%252C35.47042933501925%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clqwakgge0002356jxigi72yo%2522%253A%257B%2522id%2522%253A%2522clqwakgge0002356jxigi72yo%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clqwakgge0001356jq845xmyk%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252FREADME.md%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%252C%257B%2522id%2522%253A%2522clqxi5m9u0002356js6qhlpc4%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522initialSelections%2522%253A%255B%257B%2522startLineNumber%2522%253A6%252C%2522startColumn%2522%253A46%252C%2522endLineNumber%2522%253A6%252C%2522endColumn%2522%253A46%257D%255D%252C%2522filepath%2522%253A%2522%252Fclient%252Fmain.ts%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%252C%2522activeTabId%2522%253A%2522clqxi5m9u0002356js6qhlpc4%2522%257D%252C%2522clqwakgge0004356jcszzeo9u%2522%253A%257B%2522id%2522%253A%2522clqwakgge0004356jcszzeo9u%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522TASK_PORT%2522%252C%2522taskId%2522%253A%2522dev%253Aclient%2522%252C%2522port%2522%253A5173%252C%2522id%2522%253A%2522clqwaoa0x005w356j8keb0b8r%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522path%2522%253A%2522%252F%2522%257D%255D%252C%2522activeTabId%2522%253A%2522clqwaoa0x005w356j8keb0b8r%2522%257D%252C%2522clqwakgge0003356j81phvue5%2522%253A%257B%2522id%2522%253A%2522clqwakgge0003356j81phvue5%2522%252C%2522activeTabId%2522%253A%2522clqwao2bo0048356jtqck17f3%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%253Aserver%2522%252C%2522id%2522%253A%2522clqwao2bo0048356jtqck17f3%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%253Aclient%2522%252C%2522id%2522%253A%2522clqwao2bo0049356jh15gt80q%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D) contains a monorepo with a simple [Express](https://expressjs.com/) backend, a vanilla JS client powered by [Vite](https://vitejs.dev/), a few entity classes and a simple script which performs various operations on them from client-side code.

## Installation

The _remult_ package is all you need for both frontend and backend code. If you're using one `package.json` for both frontend and backend (or a meta-framework) - **install Remult once** in the project's root folder. If you're using multiple `package.json` files (monorepo) - **install Remult in both server and client folders**.

::: code-group

```sh [npm]
npm install remult
```

```sh [yarn]
yarn add remult
```

```sh [pnpm]
pnpm add remult
```

```sh [bun]
bun add remult
```

:::

## Server-side Initialization

Remult is initialized on the server-side as a request handling middleware, with **a single line of code**. Here is the code for setting up the Remult middleware:

::: code-group

```ts [Express]
import express from 'express'
import { remultExpress } from 'remult/remult-express'

const app = express()

app.use(remultExpress({})) // [!code highlight]

app.listen(3000)
```

<!-- prettier-ignore-start -->
```ts [Fastify]
import fastify from 'fastify'
import { remultFastify } from 'remult/remult-fastify'

(async () => {
  const server = fastify()

  await server.register(remultFastify({})) // [!code highlight]

  server.listen({ port: 3000 })
})()
```
<!-- prettier-ignore-end -->

```ts [Next.js]
// src/app/api/[...remult]/route.ts

import { remultNextApp } from 'remult/remult-next'

export const api = remultNextApp({}) // [!code highlight]

export const { GET, POST, PUT, DELETE } = api
```

```ts [Sveltekit]
// src/hooks.server.ts

import { remultSveltekit } from 'remult/remult-sveltekit'

export const handle = remultSveltekit({}) // [!code highlight]
```

<!-- prettier-ignore-start -->
```ts [Hapi]
import { type Plugin, server } from '@hapi/hapi'
import { remultHapi } from 'remult/remult-hapi'

(async () => {
  const hapi = server({ port: 3000 })

  await hapi.register(remultHapi({})) // [!code highlight]

  hapi.start()
})()
```
<!-- prettier-ignore-end -->

```ts [Nest]
// src/main.ts

import { remultExpress } from 'remult/remult-express'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.use(remultExpress({})) // [!code highlight]

  await app.listen(3000)
}
bootstrap()
```

```ts{9-17} [Koa]
import * as koa from 'koa'
import * as bodyParser from 'koa-bodyparser'
import { createRemultServer } from 'remult/server'

const app = new koa()

app.use(bodyParser())

const api = createRemultServer({})

app.use(async (ctx, next) => {
  const r = await api.handle(ctx.request)
  if (r) {
    ctx.response.body = r.data
    ctx.response.status = r.statusCode
  } else return await next()
})

app.listen(3000, () => {})
```

:::

## Connecting a Database

Use the `dataProvider` property of Remult's server middleware to set up a database connection for Remult.

::: tip Recommended - Use default local JSON files and connect a database later
If the `dataProvider` property is not set, Remult stores data as JSON files under the `./db` folder.
:::

Here are examples of connecting to some commonly used back-end databases:

::: tabs

== Postgres
Install node-postgres:

```sh
npm i pg
```

Set the `dataProvider` property:

```ts{3,7,11-15}
import express from "express"
import { remultExpress } from "remult/remult-express"
import { createPostgresDataProvider } from "remult/postgres"

const app = express()

const connectionString = "postgres://user:password@host:5432/database"

app.use(
  remultExpress({
    dataProvider:
      createPostgresDataProvider({
        connectionString, // default: process.env["DATABASE_URL"]
        // configuration: {} // optional = a `pg.PoolConfig` object or "heroku"
      })
  })
)
```

== MySQL

Install knex and mysql2:

```sh
npm i knex mysql2
```

Set the `dataProvider` property:

```ts{3,9-18}
import express from "express"
import { remultExpress } from "remult/remult-express"
import { createKnexDataProvider } from "remult/remult-knex"

const app = express()

app.use(
  remultExpress({
    dataProvider: createKnexDataProvider({
      // Knex client configuration for MySQL
      client: "mysql2",
      connection: {
        user: "your_database_user",
        password: "your_database_password",
        host: "127.0.0.1",
        database: "test"
      }
    })
  })
)
```

== MongoDB

Install mongodb:

```sh
npm i mongodb
```

Set the `dataProvider` property:

```ts{3-4,10-14}
import express from "express"
import { remultExpress } from "remult/remult-express"
import { MongoClient } from "mongodb"
import { MongoDataProvider } from "remult/remult-mongo"

const app = express()

app.use(
  remultExpress({
    dataProvider: async () => {
      const client = new MongoClient("mongodb://localhost:27017/local")
      await client.connect()
      return new MongoDataProvider(client.db("test"), client)
    }
  })
)
```

== SQLite

Install knex and sqlite3:

```sh
npm i knex sqlite3
```

Set the `dataProvider` property:

```ts{3,9-15}
import express from "express"
import { remultExpress } from "remult/remult-express"
import { createKnexDataProvider } from "remult/remult-knex"

const app = express()

app.use(
  remultExpress({
    dataProvider: createKnexDataProvider({
      // Knex client configuration for SQLite
      client: "sqlite3",
      connection: {
        filename: "./mydb.sqlite"
      }
    })
  })
)
```

== Microsoft SQL Server

Install knex and tedious:

```sh
npm i knex tedious
```

Set the `dataProvider` property:

```ts{5,11-25}
// index.ts

import express from "express"
import { remultExpress } from "remult/remult-express"
import { createKnexDataProvider } from "remult/remult-knex"

const app = express()

app.use(
  remultExpress({
    dataProvider: createKnexDataProvider({
      // Knex client configuration for MSSQL
      client: "mssql",
      connection: {
        server: "127.0.0.1",
        database: "test",
        user: "your_database_user",
        password: "your_database_password",
        options: {
          enableArithAbort: true,
          encrypt: false,
          instanceName: `sqlexpress`
        }
      }
    })
  })
)
```

== Oracle

Install knex and oracledb:

```sh
npm i knex oracledb
```

Set the `dataProvider` property:

```ts{5,11-19}
// index.ts

import express from "express"
import { remultExpress } from "remult/remult-express"
import { createKnexDataProvider } from "remult/remult-knex"

const app = express()

app.use(
  remultExpress({
    dataProvider: createKnexDataProvider({
      // Knex client configuration for Oracle
      client: "oracledb",
      connection: {
        user: "your_database_user",
        password: "your_database_password",
        connectString: "SERVER"
      }
    })
  })
)
```

== JSON Files

Set the `dataProvider` property:

```ts{5-6,12-14}
// index.ts

import express from "express"
import { remultExpress } from "remult/remult-express"
import { JsonDataProvider } from "remult"
import { JsonEntityFileStorage } from "remult/server"

const app = express()

app.use(
  remultExpress({
    dataProvider: async () =>
      new JsonDataProvider(new JsonEntityFileStorage("./db"))
  })
)
```

:::

## Integrate Auth

**Remult is completely unopinionated when it comes to user authentication.** You are free to use any kind of authentication mechanism, and only required to provide Remult with a [`getUser`](./ref_remultserveroptions.md#getuser) function that extracts a user object (which implements the minimal Remult `UserInfo` interface) from a request.

Here are examples of integrating some commonly used auth providers:

::: code-group

```ts [express-session]
import express from 'express'
import session from 'express-session'
import { remultExpress } from 'remult/remult-express'

const app = express()

app.use(
  session({
    /* ... */
  }),
)

app.post('/api/signIn', (req, res) => {
  req.session!['user'] = { id: 1, name: 'admin', roles: ['admin'] }
})

app.use(
  remultExpress({
    getUser: (req) => req.session!['user'], // [!code highlight]
  }),
)
```

```ts{8-13} [next-auth]
// src/app/api/[...remult]/route.ts

import { remultNextApp } from 'remult/remult-next'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]/route'

export const api = remultNextApp({
  getUser: async () => {
    const user = (await getServerSession(authOptions))?.user
    return user?.email && user?.name
      ? { id: user?.email, name: user?.name }
      : undefined
  },
})

export const { POST, PUT, DELETE, GET, withRemult } = api
```

:::

## Defining and Serving an Entity

Remult entity classes are shared between frontend and backend code.

```ts
// shared/product.ts

import { Entity, Fields } from 'remult'

@Entity('products', {
  allowApiCrud: true,
  allowApiDelete: 'admin',
})
export class Product {
  @Fields.uuid()
  id!: string

  @Fields.string()
  name = ''

  @Fields.number()
  unitPrice = 0
}
```

Alternatively, [generate entities](./entities-codegen-from-db-schema.md) from an existing Postgres database.

### Serve Entity CRUD API

All Remult server middleware options contain an [`entities`](./ref_remultserveroptions.md#entities) array. Use it to register your Entity.

```ts
// backend/index.ts

app.use(
  remultExpress({
    entities: [Product], // [!code highlight]
  }),
)
```

## Using your Entity on the Client

To start querying and mutating data from the client-side using Remult, use the [`remult.repo`](./ref_remult.md#repo) function to create a [`Repository`](./ref_repository.md) object for your entity class. This approach simplifies data operations, allowing you to interact with your backend with the assurance of type safety.

```ts
// frontend/code.ts

import { remult } from 'remult'
import { Product } from '../shared/product'

const productsRepo = remult.repo(Product)

async function playWithRemult() {
  // add a new product to the backend database
  await productsRepo.insert({ name: 'Tofu', unitPrice: 5 })

  // fetch products from backend database
  const products = await productsRepo.find({
    where: { unitPrice: { '>=': 5 } },
    orderBy: { name: 'asc' },
    limit: 10,
  })
  console.log(products)

  // update product data
  const tofu = products.filter((p) => p.name === 'Tofu')
  await productsRepo.save({ ...tofu, unitPrice: tofu.unitPrice + 5 })

  // delete product
  await productsRepo.delete(tofu)
}

playWithRemult()
```

## Client-side Customization

::: tip Recommended Defaults
By default, remult uses the browser's [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), and makes data API calls using the base URL `/api` (same-origin).
:::

### Changing the default API base URL

To use a different origin or base URL for API calls, set the remult object's `apiClient.url` property.

```ts
remult.apiClient.url = 'http://localhost:3002/api'
```

### Using an alternative HTTP client

Set the `remult` object's `apiClient.httpClient` property to customize the HTTP client used by Remult:

::: code-group

```ts [Axios instead of Fetch]
import axios from 'axios'
import { remult } from 'remult'

remult.apiClient.httpClient = axios
```

```ts [Angular HttpClient instead of Fetch]
//...
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { remult } from 'remult'

@NgModule({
  //...
  imports: [
    //...
    HttpClientModule,
  ],
})
export class AppModule {
  constructor(http: HttpClient) {
    remult.apiClient.httpClient = http
  }
}
```

:::
