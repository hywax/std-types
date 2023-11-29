[![std-types](https://raw.githubusercontent.com/hywax/std-types/main/public/cover.jpg)](https://github.com/hywax/muuto)

# STD Types

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

Extended types for standard library JS.

## Installation

```bash
# Using pnpm
pnpm add @hywax/std-types

# Using yarn
yarn add @hywax/std-types

# Using npm
npm install @hywax/std-types
```

## Usage

Create a `std-types.d.ts` file in your project with these contents:

```ts
import '@hywax/std-types'

// or

import '@hywax/std-types/objects'
```

## Types

**Objects:**
* `keys` - returns an array of a given object's own enumerable string-keyed property names.
* `entries` - returns an array of a given object's own enumerable string-keyed property key-value pairs

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@hywax/std-types/latest.svg
[npm-version-href]: https://npmjs.com/package/@hywax/std-types

[npm-downloads-src]: https://img.shields.io/npm/dt/@hywax/std-types.svg
[npm-downloads-href]: https://npmjs.com/package/@hywax/std-types

[license-src]: https://img.shields.io/npm/l/@hywax/std-types.svg
[license-href]: https://npmjs.com/package/@hywax/std-types
