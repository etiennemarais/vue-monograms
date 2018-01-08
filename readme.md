# Vue Monograms

Vue Component to generate a SVG monogram shape with letters in that resembles your first/last name.

### Supports

- [x] Hexagons (Plain)
- [ ] Hexagons (With internal patterns)
- [ ] Rectangles (Plain or with internal patterns)
- [ ] Circles (Plain or with internal patterns)
- [ ] Octagons (Plain or with internal patterns)

## Installation

You can include this plugin into your application by installing this package via `yarn`

```sh
yarn add vue-monograms
```

## Usage

Register the component in your `App.vue`.

```vue
import Monogram from 'vue-monograms';
Vue.component('monogram', Monogram);
```

You will be able to use this component throughout your application.

```
<template>
...
<monogram width="80" letters="XB" :primary-color="'#00a8e8'" />
...
</template>
```

# Properties

## `width`

The width attribute is required to calculate the sides and points coordinates of the hexagon, calculated in pixels as a number value.

## `letters`

The letters provide the reference to a name/surname, but can be any string.

## `primary-color` 

Primary background color fill for the shape. Identified as a string hex color value ex: `'#00a8e8'`
