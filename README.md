# css-if

Demo for the **CSS `if()` function** (CSS Conditional Values Level 5) —
currently supported in **Chrome 137+ and Edge 137+** (see
[caniuse](https://caniuse.com/css-if)).

`if()` is an *arbitrary substitution function*: it returns the value of the
first branch whose condition is true, so a single declaration can respond to
feature queries, media queries, and style queries inline — no `@supports` /
`@media` block and no override rule.

The page feature-detects support and shows a disclaimer in unsupported
browsers, which render the plain fallback instead.

## Examples

A single preview card is reused across all six examples — pick one from the
pill selector and the card, description, and CSS snippet update together. The
switching is pure CSS (native radios + `:has()`), no JavaScript:

1. `supports()` — capability-gated `background-color`
2. `media()` — viewport-conditioned `font-size`
3. `style()` — custom-property-driven `padding`
4. `and` / `or` / `not` — combined conditions on `border`
5. Multiple branches — first match wins, three-way `color`
6. Nested `if()` — a `box-shadow` that responds to two signals

Each example changes a different property, so the card demonstrates a
different value axis per pill. Some examples depend on the environment —
resize the window, toggle your OS dark mode, or select a pill that sets a
custom property — and the card updates in place.

## Usage

```sh
npm install
npm run dev       # dev server
npm run build     # static build into dist/
npm run preview   # preview the built site
npm test          # vitest unit tests (feature detection, example config)
```

## Deployment

The site deploys to GitHub Pages automatically from the `main` branch via
`.github/workflows/deploy.yml`. The workflow runs `npm ci`, `npm test`, and
`npm run build`, then publishes `dist/`. `main` is branch-protected: every
change lands through a pull request and the `build` check must pass before
merge. There are no per-PR preview deployments — merging to `main` publishes
production at https://jordilopez.github.io/css-if/.

## Development

Styling builds on [css-starter](https://github.com/jordilopez/css-starter)
v0.4.0, using its `.picker` and `.callout` components. The dependency is
pinned to the public release tarball
(`https://github.com/jordilopez/css-starter/archive/refs/tags/v0.4.0.tar.gz`)
so the project installs in CI and for any contributor. Demo styles in
`src/styles/demo.css` are unlayered and override the `css-starter.*`
cascade layers by design.

## References

- [caniuse: css-if](https://caniuse.com/css-if)
- [MDN: `if()`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/if)
- [CSS Values and Units Module Level 5 — W3C](https://drafts.csswg.org/css-values-5/#if-notation)
- [css-if-polyfill](https://github.com/mfranzke/css-if-polyfill)
