# cloudflare-testing

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm create cloudflare@latest --<APP_NAME> --framework=vue
```

```sh
npm install
```

```sh
npm install express
```

Replace server/index.js with express code

Create D1 Database
```sh
npx wrangler d1 create <DB_NAME>
```

Let wrangler add db on your behalf, set binding name to DB or other custom Constant, Choose No for connecting to remote resource for local dev

Add schema/schemas.sql and define schema for your DB

Add schema to local DB for testing
```sh
npx wrangler d1 execute <DB_NAME> --file=./schemas/schema.sql
```

OR add schema to remote DB for production
```sh
npx wrangler d1 execute <DB_NAME> --remote --file=./schemas/schema.sql 
```

Test in Production
```sh
curl https://<YOUR_CUSTOM_DOMAINl>/api/<ROUTE>
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
