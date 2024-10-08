[![Nuxt Server Utils](.github/nuxt-server-utils.png)](https://nuxt-server-utils.henrijskons.eu/)

# 🛠️ Nuxt Server Utils

This is an updated for of https://github.com/jahidanowar/nuxt-server-utils

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]
[![Netlify Status](https://api.netlify.com/api/v1/badges/3000cacf-99d5-444f-a147-4bd7794a295b/deploy-status)](https://app.netlify.com/sites/lauvz-nuxt-server-utils/deploys)

A collection of utility functions for Nuxt API development.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
- [🏀 Online playground](https://stackblitz.com/edit/lauvz-nuxt-server-utils?file=nuxt.config.ts)
- [📖 &nbsp;Documentation](https://nuxt-server-utils.henrijskons.eu)

## Features

<details>
<summary>Filtering Collections (Mongoose)</summary>

- [x] Filtering
- [x] Sorting
- [x] Pagination
- [x] Selecting
- [x] Populating
- [x] Counting
- [x] Searching
</details>

<details>
<summary>Authorization</summary>

- [x] Authority checker utility
- [ ] Permission checker utility
- [ ] Policy utility
</details>

<details>
<summary>Resource Helper</summary>

- [x] Resource index utility
- [x] Resource show utility
- [x] Resource delete utility
- [ ] Resource update utility
</details>

<details>
<summary>Validation</summary>

- [x] Zod schema validator
</details>

## Quick Setup

1. Add `@lauvz/nuxt-server-utils` dependency to your project

```bash
# Using pnpm
pnpm add -D @lauvz/nuxt-server-utils

# Using yarn
yarn add --dev @lauvz/nuxt-server-utils

# Using npm
npm install --save-dev @lauvz/nuxt-server-utils
```

2. Add `@lauvz/nuxt-server-utils` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: ["@lauvz/nuxt-server-utils"],
});
```

That's it! You can now use Nuxt Server Utils in your Nuxt app ✨

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@lauvz/nuxt-server-utils/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/@lauvz/nuxt-server-utils
[npm-downloads-src]: https://img.shields.io/npm/dm/@lauvz/nuxt-server-utils.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/@lauvz/nuxt-server-utils
[license-src]: https://img.shields.io/npm/l/@lauvz/nuxt-server-utils.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/@lauvz/nuxt-server-utils
[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
