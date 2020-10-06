# Eslint config

<br />

## Install

```sh
npm install --save-dev eslint eslint-config-goldenthumb
```

<br />

## Usage

https://eslint.org/docs/developer-guide/shareable-configs

`package.json`

```json
{
  "eslintConfig": {
    "extends": "goldenthumb"
  }
}
```

`.eslintrc`

```json
{
  "extends": "goldenthumb"
}
```

<br />

### Subsets

- `goldenthumb`
- `goldenthumb/react`
- `goldenthumb/typescript`
- `goldenthumb/typescriptreact`

```
base
"extends": "goldenthumb"

basic + react
"extends": "goldenthumb/react"

basic + typescript
"extends": "goldenthumb/typescript"

basic + typescript + react
"extends": "goldenthumb/typescriptreact"

```

<br />

### With prettier

```sh
npm install --save-dev eslint-config-prettier eslint-plugin-prettier
```

<br />

`.package.json`

```json
{
  "eslintConfig": {
    "extends": ["goldenthumb", "plugin:prettier/recommended"]
  }
}
```

<br />

## Etc

### Automatically Fix Code in VS Code

`settings.json`

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

<br />

### Run ESLint with the CLI

`.package.json`

```json
{
  "scripts": {
    "lint": "eslint '*/**/*.{js,ts,tsx}' --fix"
  }
}
```

<br />

