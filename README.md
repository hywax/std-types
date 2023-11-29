[![std-types](https://raw.githubusercontent.com/hywax/std-types/main/public/cover.jpg)](https://github.com/hywax/muuto)

# STD Types

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

Extended types for standard library JS.

## Installation

```bash
# Using pnpm
pnpm add std-types

# Using yarn
yarn add std-types

# Using npm
npm install std-types
```

## Usage

Create a `std-types.d.ts` file in your project with these contents:

```ts
import 'std-types'

// or

import 'std-types/objects'
```

## Types

**Objects:**
* `keys` - returns an array of a given object's own enumerable string-keyed property names.
* `entries` - returns an array of a given object's own enumerable string-keyed property key-value pairs

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/std-types/latest.svg
[npm-version-href]: https://npmjs.com/package/std-types

[npm-downloads-src]: https://img.shields.io/npm/dt/std-types.svg
[npm-downloads-href]: https://npmjs.com/package/std-types

[license-src]: https://img.shields.io/npm/l/std-types.svg
[license-href]: https://npmjs.com/package/std-types
