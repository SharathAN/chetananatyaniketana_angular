# Chetana Natya Niketana — Angular Website

Modern Angular application for [Chetana Natya Niketana](https://www.chetananatyaniketana.in/), a classical dance and music school in Bangalore.

## Development

```bash
npm install
npm start
```

Open http://localhost:4200

## Production build

```bash
npm run build
```

Output: `dist/cnn-web/browser/`

For GitHub Pages / custom domain:

```bash
npm run build:gh-pages
```

Deploy the contents of `dist/cnn-web/browser/` to your hosting provider. The `CNAME` file is included in `public/` for GitHub Pages.

## Stack

- Angular 19 (standalone components)
- SCSS with Indian classical minimal theme
- Responsive layout with mobile navigation
