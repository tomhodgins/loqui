# loqui

**Style `console.log()` messages with ease**

## About

_Loqui_ is the latin word for 'speak' so it's a natural name for a plugin that helps you log messages to the console.

It's already possible for messages to `console.log()` to be styled, but the formatting for the messages and styling that `console.log()` accepts isn't always the nicest to write.

If you find yourself wanting to compose beautiful, flexible, styled messages on the JavaScript console you will want an abstraction that smoothes over the rough parts like this.

## How to use

This package is delivered in three formats:

- `loqui.cjs.js` is a CommonJS module (for Node)
- `loqui.es.js` is an ES module
- `loqui.browser.js` includes a function named `loqui` for use in the browser

This package is also available on npm as `loqui`:

```
npm install loqui
```

## Formatting

To use loqui we need to supply the function an array of messages to log, each paired with their own `text` and `style`. Here's an example of a very basic message:

```js
[
  {
    text: 'loqui test',
    style: 'background: dodgerblue; color: white;'
  }
]
```

Here the message has been stored as an object, with a `text` property and a `style` property inside. Here the value of `style` property is a string, but optionally we can also supply an array of strings which the function will join together - this is especially useful when using variables to compose parts of styles together:

```js
[
  {
    text: 'loqui test',
    style: [defaultStyles, 'background: dodgerblue;']
  }
]
```

Alternatively, there is also a more compact format that can also be parsed by the plugin: using an array of arrays instead of an object. If you want to express the same data as the last example using all arrays you can skip the object and `text` and `style` properties and simply provide an array filled with arrays, each containing two elements. The first one will be read as the text, and the second (string or array of strings) will be read as the style:

```js
[
  ['loqui test', [defaultStyles, 'background: dodgerblue;']]
]
```

This allows you to be as explicit or terse as you like, and allows you a little flexibility to compose and re-use styles by making use of variables, functions, and other code.

For a sample of loqui messages formatted in both the object and array formats, check out:

- [test/object.js](test/object.js)
- [test/array.js](test/array.js)