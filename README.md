# gatsby-plugin-smoothscroll

Polyfilled smooth scrolling behavior and helper function for Gatsby sites.

The plugin uses [`smoothscroll-polyfill`](https://www.npmjs.com/package/smoothscroll-polyfill) and calls it during the `onClientEntry` Gatsby lifecycle method.

It also includes a `scrollTo` helper function as its main export that you can use as `onClick` event handlers to scroll to the desired element using `{ behavior: 'smooth' }`.

## How to install

```bash
# npm
npm install gatsby-plugin-smoothscroll

# yarn
yarn add gatsby-plugin-smoothscroll
```

## When do I use this plugin?

When you want a polyfilled smooth scroll behavior without having to manually install and call the polyfill.

## Examples of usage

Just add the plugin to the plugins array in your `gatsby-config.js`:

```js
plugins: [`gatsby-plugin-smoothscroll`];
```

If you want to use the helper function, import it:

```js
// this could be in your `pages/index.js` file

import scrollTo from 'gatsby-plugin-smoothscroll';
```

Then use it as an `onClick` event handler:

```jsx
<button onClick={() => scrollTo('#some-id')}>My link</button>
```

Be aware that `scrollTo` uses [`document.querySelector()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) under the hood, so make sure to respect its syntax.
