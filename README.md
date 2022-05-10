This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev

```

## Project structure
```
 📦next-redux-app-init
 ┣ 📂pages
 ┃ ┣ 📜index.jsx
 ┃ ┗ 📜_app.jsx
 ┣ 📂public
 ┃ ┣ 📜android-chrome-192x192.png
 ┃ ┣ 📜android-chrome-512x512.png
 ┃ ┣ 📜apple-touch-icon.png
 ┃ ┣ 📜billowdev.png
 ┃ ┣ 📜favicon-16x16.png
 ┃ ┣ 📜favicon-32x32.png
 ┃ ┣ 📜favicon.ico
 ┃ ┗ 📜site.webmanifest
 ┣ 📂src
 ┃ ┣ 📂components
 ┃ ┃ ┗ 📜Layout.jsx
 ┃ ┣ 📂helpers
 ┃ ┃ ┗ 📜useLocalStorage.js
 ┃ ┣ 📂redux
 ┃ ┃ ┣ 📂actions
 ┃ ┃ ┃ ┣ 📜aticles.js
 ┃ ┃ ┃ ┗ 📜ui.js
 ┃ ┃ ┣ 📂middleware
 ┃ ┃ ┃ ┣ 📜articles.js
 ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┗ 📜ui.js
 ┃ ┃ ┣ 📂reducers
 ┃ ┃ ┃ ┣ 📜articles.js
 ┃ ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┃ ┗ 📜ui.js
 ┃ ┃ ┣ 📂selectors
 ┃ ┃ ┃ ┣ 📜articles.js
 ┃ ┃ ┃ ┗ 📜ui.js
 ┃ ┃ ┗ 📜store.js
 ┃ ┣ 📂services
 ┃ ┃ ┣ 📂api
 ┃ ┃ ┃ ┣ 📜articles.js
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📂logger
 ┃ ┃ ┃ ┣ 📜console.js
 ┃ ┃ ┃ ┗ 📜elasticSearch.js
 ┃ ┃ ┗ 📜index.js
 ┃ ┗ 📂tests
 ┃ ┃ ┣ 📜articles.test.js
 ┃ ┃ ┗ 📜ui.test.js
 ┣ 📂styles
 ┃ ┣ 📜globals.css
 ┃ ┗ 📜Home.module.css
 ┣ 📜.babelrc
 ┣ 📜.env
 ┣ 📜.eslintrc.json
 ┣ 📜.gitignore
 ┣ 📜config.js
 ┣ 📜env.local
 ┣ 📜jest.config.js
 ┣ 📜next.config.js
 ┣ 📜package.json
 ┣ 📜README.md
 ┗ 📜yarn.lock
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
