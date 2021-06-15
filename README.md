# Boilerplate nextjs antd less
A boilerplate for Reactjs app using nextjs, redux, antd, less.

View the [Demo](https://boilerplate-nextjs-antd-less.vercel.app/)

## Features
This boilerplate is updated with:

- [React 17x](https://reactjs.org)
- [Nextjs 10x](https://nextjs.org/)
- [Antd 4x](https://ant.design/)
- Less - css module
- Eslint
- Next Fonts
- Next Optimized Images
- Added antd-dayjs-webpack-plugin, replacing momentjs with Day.js

## Installing and Running

### Procedures:

1. Check if your [Node.js](https://nodejs.org/) version is >= 8.
2. Clone this repository.
3. Change the package's `name`, `description`, and `repository` fields in `package.json`.
4. Change the name of your app on `public/manifest.json`.
5. Run `yarn` to install the dependencies.
6. Run `yarn dev` for development.
6. Run `yarn build` and `yarn start` for production.

## Secrets

If you are developing an extension that talks with some API you probably are using different keys for testing and production. Is a good practice you not commit your secret keys and expose to anyone that have access to the repository.

Create a `.env` file in the root directory of your project. Add environment-specific variables on new lines in the form of `NAME=VALUE`. For example:

```js
API_URL=https://api.example.com/api/v1/
WEB_URL=https://example.com
```

`process.env` now has the keys and values you defined in your `.env` file.
