# Portfolio - Vanilla HTML/CSS/JS

This portfolio has been converted from React to a vanilla HTML/CSS/JS stack to simplify deployment on GitHub Pages and eliminate 404 errors.

## Project Structure

- `index.html`: Main entry point containing all sections.
- `styles.css`: Custom CSS with design tokens and responsive layouts.
- `script.js`: Interactive elements, navigation, and scroll effects.
- `bg.png`: Background image asset.
- `dist_vanilla/`: The production-ready files for deployment.

## Deployment

To deploy updates to GitHub Pages:

```bash
npm run deploy
```

This will push the contents of the `dist_vanilla` folder to the `gh-pages` branch.

## Development

You can preview the site locally by opening `index.html` in your browser or running:

```bash
npm start
```

## Legacy Code

The original React source code is still available in the `src` directory for reference, but it is no longer used for the live site.
