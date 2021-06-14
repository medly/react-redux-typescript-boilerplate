# React Redux with Typescript Boilerplate

This boilerplate will help you to quick start your project.

## Getting Started

1. Just download this repo and change the project name **OR** click on `use this template` button to create the new repo.
2. Init the commitizen before committing anything in your new project. `npx commitizen init cz-conventional-changelog --yarn --dev --exact --force`

## Built With

🔥 [react](https://github.com/facebook/react)

🐠 [react-hooks](https://reactjs.org/docs/hooks-intro.html)

🚢 [redux](https://redux.js.org/)

⛑ [typescript](https://www.typescriptlang.org/)

🚀 [redux-saga](https://redux-saga.js.org/)

💥 [babel](https://babeljs.io/)

💅 [styled-components](https://www.styled-components.com)

🐐 [react-testing-library](https://github.com/kentcdodds/react-testing-library)

## npm scripts

-   `yarn lint` to run both css & ts lint
-   `yarn test` to run tests and type check
-   `yarn dist` to build your project
-   `yarn clean` to remove the dist and coverage folder
-   `yarn watch` to run your project locally
-   `yarn type-check` to run tsc to check types
-   `yarn bundle:analyze` to analyze the bundle size
-   `yarn lint:css` to run the css lint
-   `yarn lint:ts` to run the ts lint
-   `yarn test:update` to upgrate snapshots
-   `yarn test:watch` to watch tests
-   `yarn test:jest` to run test only
-   `yarn docker-watch` to be executed as the startup command for the Docker development container (no need to manually run)
-   `yarn image-build` to build the Docker development container
-   `yarn image-remove` to remove the Docker development container
-   `yarn docker-dev` to run the Docker development container with hot reloading
-   `yarn docker-stop` to stop the running Docker development container
-   `yarn docker-update-deps` to remove and rebuild the container image with updated dependencies
-   `yarn docker-exec` to open an interactive ash shell inside the container

## Table of Contents

1. [Create project directory](#-create-project-directory)
2. [Create npm package](#-create-npm-package)
3. [Create git repository](#-create-git-repository)
4. [Add react libraries](#-add-react-libraries)
5. [Add Eslint](#-add-eslint)
6. [Add Prettier](#-add-prettier)
7. [Add editorconfig file](#-add-editorconfig-file)
8. [Add Typescript](#-add-typescript)
9. [Add Vscode config files](#-add-vscode-config-files)
10. [Add Babel](#-add-babel)
11. [Add index.html](#-add-index.html)
12. [Add Webpack](#-add-webpack)
13. [Add React-hot-loader](#-add-react-hot-loader)
14. [Add Webpack plugins](#-add-webpack-plugins)
15. [Add stylelint](#-add-styleint)
16. [Add Jest](#-add-jest)
17. [Add commitizen & commitlint](#-add-commitizen-&-commitlint)
18. [Add Redux](#-add-redux)
19. [Add SVG Loader](#-add-svg-loader)

#### 1. Create project directory

    `mkdir my-project && cd my-project`

#### 2. Create npm package

    `npm init`

#### 3. Create git repository

    `git init`

#### 4. Add react libraries

    `yarn add react react-dom`

#### 5. Add Eslint

-   add eslint `yarn add -D eslint`

Explaining the important bits:

-   `parser: '@typescript-eslint/parser'` tells ESLint to use the parser package you installed ([`@typescript-eslint/parser`](../../../packages/parser)).
    -   This allows ESLint to understand TypeScript syntax.
    -   This is required, or else ESLint will throw errors as it tries to parse TypeScript code as if it were regular JavaScript.
-   `plugins: ['@typescript-eslint']` tells ESLint to load the plugin package you installed ([`@typescript-eslint/eslint-plugin`](../../../packages/eslint-plugin)).
    -   This allows you to use the rules within your codebase.
-   `extends: [ ... ]` tells ESLint that your config extends the given configurations.
    -   `eslint:recommended` is ESLint's inbuilt "recommended" config - it turns on a small, sensible set of rules which lint for well-known best-practices.
    -   `plugin:@typescript-eslint/eslint-recommended` is a configuration we provide which disables a few of the recommended rules from the previous set that we know are already covered by TypeScript's typechecker.
    -   `plugin:@typescript-eslint/recommended` is our "recommended" config - it's just like `eslint:recommended`, except it only turns on rules from our TypeScript-specific plugin.

Plugins

There are many plugins, each covering a different slice of the JS development world. Below are just a few examples, but there are [many, many more](https://www.npmjs.com/search?q=eslint-plugin).

-   Jest testing: [`eslint-plugin-jest`](https://www.npmjs.com/package/eslint-plugin-jest)
-   React best practices: [`eslint-plugin-react`](https://www.npmjs.com/package/eslint-plugin-react) and [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks)

So finally install `yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-jest eslint-plugin-react eslint-plugin-react-hooks`

-   eslint file would be like below:

```json
{
    "root": true,
    "env": {
        "es6": true,
        "browser": true,
        "jest/globals": true
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "parserOptions": {
        "ecmaVersion": 11,
        "jsx": true,
        "project": "./tsconfig.json"
    },
    "parser": "@typescript-eslint/parser",
    "plugins": ["@typescript-eslint", "jest", "react-hooks", "prettier"],
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:jest/recommended",
        "plugin:react/recommended",
        "prettier/@typescript-eslint"
    ],
    "rules": {
        "arrow-parens": ["error", "as-needed"],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "react/jsx-no-bind": "warn",
        "react/prop-types": "off",
        "@typescript-eslint/ban-ts-ignore": "off",
        "@typescript-eslint/explicit-function-return-type": "off"
    }
}
```

-   Add .eslintignore file

```
node_modules
dist
coverage
```

-   Add lint script in package.json

```json
{
    "script": {
        "lint": "run-p -c lint:*",
        "lint:ts": "eslint 'src/**/*.{ts,tsx}'"
    }
}
```

#### 6. Add Prettier

    `yarn add -D prettier eslint-config-prettier eslint-plugin-prettier`

add plugin in the esconfig file

```json
{
    // ...
    "plugins": ["@typescript-eslint", "jest", "react-hooks", "prettier"],
    "extends": [
        //...
        "prettier/@typescript-eslint"
    ]
    //..
}
```

Add .preetierrc

```json
{
    "bracketSpacing": true,
    "printWidth": 140,
    "semi": true,
    "trailingComma": "none",
    "singleQuote": true,
    "tabWidth": 4,
    "arrowParens": "avoid"
}
```

#### 7. Add editorconfig file

.editorconfig

```
root = true

[*]
charset = utf-8
end_of_line = lf
insert_final_newline = true
max_line_length = 140
quote_type = single
spaces_around_brackets = true
spaces_around_operators = true
trim_trailing_whitespace = true


# identation
indent_style = space
indent_size = 4
```

#### 8. Add Typescript

`yarn add -W typescript`

-   Add tsconfig.json

```json
{
    "compilerOptions": {
        "allowJs": true,
        "baseUrl": "src",
        "esModuleInterop": true,
        "isolatedModules": true,
        "forceConsistentCasingInFileNames": true,
        "jsx": "react",
        "lib": ["es2017", "es2015", "dom", "es2018.promise"],
        "module": "esnext",
        "moduleResolution": "node",
        "noEmit": true,
        "resolveJsonModule": true,
        "rootDir": "../",
        "skipLibCheck": true,
        "strict": true,
        "strictFunctionTypes": false,
        "strictNullChecks": false,
        "target": "esnext",
        "types": ["jest", "testing-library__jest-dom"],
        "paths": {
            "@components": ["components"],
            "@components/*": ["components/*"],
            "@theme": ["theme"],
            "@theme/*": ["theme/*"],
            "@utils": ["utils"],
            "@utils/*": ["utils/*"],
            "@test-utils": ["utils/test-utils"],
            "@styled": ["utils/styled"],
            "@store": ["store"],
            "@store/*": ["store/*"]
        }
    },
    "include": ["src"],
    "exclude": ["node_modules", ".commitlintrc"]
}
```

#### 9. Add Vscode config files

-   Add settings.json file

```json
{
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true,
        "source.organizeImports": true,
        "source.fixAll.stylelint": true
    },
    "eslint.validate": ["html", "javascript", "javascriptreact", "typescript", "typescriptreact"],
    "cSpell.words": ["Medly"]
}
```

-   Add extensions.json file

```json
{
    "recommendations": [
        "eamodio.gitlens",
        "stylelint.vscode-stylelint",
        "dbaeumer.vscode-eslint",
        "esbenp.prettier-vscode",
        "jpoissonnier.vscode-styled-components",
        "streetsidesoftware.code-spell-checker"
    ]
}
```

#### 10. Add Babel

    `yarn add -D babel-loader @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript`

Create babel.config.js file

```javascript
module.exports = function (api) {
    const presets = ['@babel/preset-env', '@babel/react', '@babel/typescript'],
        plugins = [];

    return { presets, plugins };
};
```

#### 11. Add index.html

#### **`public/index.html`**

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Boilerplate</title>
    </head>
    <body>
        <div id="root" />
    </body>
    <noscript>Your browser does not support JavaScript!</noscript>
</html>
```

#### 12. Add Webpack

    `yarn add -D webpack webpack-cli webpack-dev-server html-webpack-plugin`

Create webpack.config.js file

```javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC = path.resolve(__dirname, './src/index');

module.exports = {
    entry: SRC,
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};
```

Add script in package.json `"start": "webpack-dev-server --mode development --hot"`

#### 13. Add React-hot-loader

This will hot reload the app, keeping the components state.

-   install: `yarn add -D react-hot-loader @hot-loader/react-dom`
-   add plugin in babel.config.json

    ```javascript
    //...
    if (api.env() === 'development') {
        plugins.push('react-hot-loader/babel');
    }
    //...
    ```

-   add alias in webpack

    ```javascript
    resolve: {
      alias: {
          'react-dom': '@hot-loader/react-dom',
      }
    }
    ```

-   wrap your app in hot();
    `export default hot(App)`

#### 14. Add Webpack plugins

Few useful webpack plugins

`yarn add -D circular-dependency-plugin clean-webpack-plugin compression-webpack-plugin copy-webpack-plugin fork-ts-checker-webpack-plugin tsconfig-paths-webpack-plugin webpack-bundle-analyzer webpack-merge`

webpack.common.js

```javascript
const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const SRC = path.resolve(__dirname, '../../src');
const DIST = path.resolve(__dirname, '../../dist');
const ENTRY = path.resolve(__dirname, '../../src/index');
const STATIC = path.resolve(__dirname, '../../public/static');
const INDEX_HTML = path.resolve(__dirname, '../../public/index.html');

module.exports = {
    entry: [ENTRY],
    performance: {
        maxAssetSize: 500000,
        maxEntrypointSize: 500000
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.json'],
        symlinks: false,
        plugins: [new TsconfigPathsPlugin()]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include: SRC,
                exclude: [/node_modules/, /\.spec.tsx?$/, /\.test.tsx?$/, /__snapshots__/, /__tests__/],
                use: [
                    {
                        loader: 'thread-loader',
                        options: {
                            workers: 2,
                            workerParallelJobs: 50
                        }
                    },
                    'babel-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: INDEX_HTML,
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        }),
        new CopyPlugin([{ from: STATIC, to: DIST }]),
        new ForkTsCheckerWebpackPlugin(),
        new CircularDependencyPlugin({
            exclude: /node_modules/,
            failOnError: true
        }),
        new webpack.HashedModuleIdsPlugin(),
        new CompressionPlugin()
    ]
};
```

webpack.dev.js

```javascript
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const DIST = path.resolve(__dirname, '../../dist');

module.exports = merge(common, {
    mode: 'development',
    output: {
        path: DIST,
        filename: '[name].[hash].js',
        chunkFilename: '[name].[hash].js',
        publicPath: '/'
    },
    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom'
        }
    },
    devServer: {
        hot: true,
        inline: true,
        overlay: true,
        historyApiFallback: true,
        disableHostCheck: true,
        stats: { children: false }
    }
});
```

webpack.prod.js

```javascript
const path = require('path');
const common = require('./webpack.common.js');
const merge = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const DIST = path.resolve(__dirname, '../../dist');

const config = {
    mode: 'production',
    output: {
        path: DIST,
        filename: '[name].[contenthash].js',
        chunkFilename: '[name].[contenthash].js',
        publicPath: '/'
    },
    optimization: {
        moduleIds: 'hashed',
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: 10,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name(module) {
                        const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
                        return `vendor~${packageName.replace('@', '')}`;
                    }
                }
            }
        }
    }
};

if (process.env.BUNDLE_ANALYZE) config.plugins = [new BundleAnalyzerPlugin()];

module.exports = merge(common, config);
```

#### 15. Add stylelint

`yarn add -D stylelint stylelint-config-prettier stylelint-config-standard stylelint-config-styled-components stylelint-custom-processor-loader stylelint-prettier babel-plugin-styled-components`

-   add **`.stylelintrc`** file

```json
{
    "syntax": "scss",
    "plugins": ["stylelint-prettier"],
    "extends": ["stylelint-config-standard", "stylelint-config-styled-components", "stylelint-prettier/recommended"],
    "rules": {
        "prettier/prettier": true,
        "value-keyword-case": null,
        "declaration-empty-line-before": "never",
        "unit-no-unknown": [
            true,
            {
                "ignoreUnits": ["`"]
            }
        ],
        "function-name-case": null
    }
}
```

-   add plugin in babel.config.js

```javascript
//...
plugins = [
    [
        'babel-plugin-styled-components',
        {
            pure: true,
            displayName: true,
            minify: true,
            transpileTemplateLiterals: true
        }
    ]
];
//...
```

-   add loader for ts and tsx file

```javascript
[
    {
        loader: 'thread-loader',
        options: {
            workers: 2,
            workerParallelJobs: 50
        }
    },
    'babel-loader',
    'stylelint-custom-processor-loader'
];
```

-   add script in package.json file for linting

```json
{
    "lint": "run-p -c lint:**",
    "lint:css": "stylelint 'src/**/*.tsx'",
    "lint:ts": "eslint 'src/**/*.{ts,tsx}'"
}
```

#### 16. Add Jest

`yarn add -D jest @testing-library/react @testing-library/jest-dom jest-styled-components`

-   Add **_config/jest.config.js_**

```javascript
module.exports = {
    collectCoverage: true,
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100
        }
    },
    collectCoverageFrom: [
        '<rootDir>/src/**/*.(ts|tsx)',
        '!<rootDir>/**/index.(ts|tsx)',
        '!<rootDir>/src/App.tsx',
        '!<rootDir>/src/theme/**',
        '!<rootDir>/src/icons/**',
        '!<rootDir>/src/store/sagas.ts',
        '!<rootDir>/src/utils/styled.ts',
        '!<rootDir>/node_modules/**',
        '!<rootDir>/src/**/types.(ts|tsx)',
        '!<rootDir>/src/**/types/**',
        '!<rootDir>/src/utils/fetch.ts',
        '!<rootDir>/src/utils/test-utils.tsx'
    ],
    coverageDirectory: '<rootDir>/coverage/',
    moduleFileExtensions: ['.mjs', 'ts', 'tsx', 'js', 'jsx', 'svg'],
    roots: ['<rootDir>/src/'],
    rootDir: '../../',
    setupFilesAfterEnv: ['<rootDir>/config/jest/setupAfterEnv.js'],
    testEnvironment: 'jsdom',
    testMatch: ['**/*.(spec|test).(ts|tsx)'],
    verbose: true,
    moduleNameMapper: {
        '\\.(css|less)$': '<rootDir>/config/jest/__mocks__/styleMock.js',
        '^@styled': '<rootDir>/src/utils/styled',
        '^@store(.*)$': '<rootDir>/src/store$1',
        '^@test-utils': '<rootDir>/src/utils/test-utils',
        '^@components(.*)$': '<rootDir>/src/components$1',
        '^@theme(.*)$': '<rootDir>/src/theme$1',
        '^@utils(.*)$': '<rootDir>/src/utils$1'
    }
};
```

-   Add localStorage file

```javascript
const storageMock = () => {
    const storage = {};

    return {
        setItem: (key, value) => {
            storage[key] = value || '';
        },

        getItem: key => {
            return key in storage ? storage[key] : null;
        },

        removeItem: key => {
            delete storage[key];
        }
    };
};

window.localStorage = storageMock();
```

-   Add setupAfterEnv file

```javascript
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
```

-   Add style mock file for loading css of all the libraries

```javascript
module.exports = {};
```

-   Add jest-dom types in tsconfig file

```json
{
    "types": ["jest", "testing-library__jest-dom"]
}
```

#### 17. Add commitizen & commitlint

`yarn add -W husky commitizen @commitlint/cli @commitlint/config-conventional cz-conventional-changelog`

-   Add .commitlintrc file

```javascript
{
    "extends": [
        "@commitlint/config-conventional"
    ]
}
```

-   Add configs in package.json

```json
{
    "config": {
        "commitizen": {
            "path": "./node_modules/cz-conventional-changelog"
        }
    },
    "husky": {
        "hooks": {
            "prepare-commit-msg": "exec < /dev/tty && git cz --hook || true",
            "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
        }
    }
}
```

#### 18. Add Redux

`yarn add redux react-redux redux-saga`

-   add other dev dependencies
    `yarn add -D @types/react-redux @babel/plugin-transform-runtime redux-devtools-extension redux-mock-store`

-   configure store

```javascript
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxSaga from 'redux-saga';
import { rootSaga } from './sagas';
import { initialState as userInitialState, user } from './user';

export const initialState = {
        user: userInitialState
    },
    sagaMiddleware = reduxSaga(),
    rootReducer = combineReducers({
        user
    }),
    store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export type AppState = ReturnType<typeof rootReducer>;
```

-   provide this store to app

```javascript
import { store } from '@store';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@theme';
import React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={defaultTheme}>
            <>
                <App />
            </>
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
);
```

#### 18. Add SVG Loader

-   Add these packages `yarn add -D @svgr/webpack babel-plugin-inline-react-svg`

-   Add `inline-react-svg` in babel config plugins.

-   Add Svg loader in webpack config

```json
{
    "test": /\.svg$/,
    "use": [
        {
            "loader": "@svgr/webpack",
            "options": {
                "icon": true
            }
        }
    ]
}
```

-   Add svg in extensions in jest config `moduleFileExtensions: ['.mjs', 'ts', 'tsx', 'js', 'jsx', 'svg'],`
