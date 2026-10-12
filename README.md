# Northwind storefront (Paritrix demo)

A small React storefront used to try [Paritrix](https://paritrix.com). It is sample code with a few deliberate problems so every Paritrix view has something to show:

- **Design tokens** in `src/styles/tokens.css` (colors, spacing, radii, font sizes).
- **Hardcoded values** in CSS Modules, inline styles and Tailwind arbitrary classes, some matching a token exactly and some close to one.
- **Code Connect** files (`*.figma.tsx`): `ProductCard` matches its Figma component; `Button` has drifted (Figma offers a Danger variant the code doesn't have).

`paritrix.config.json` tells Paritrix where the tokens are.
