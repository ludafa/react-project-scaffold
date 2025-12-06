# React + TypeScript + Vite + Tailwindcss

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## css features: tailwindcss supported
1. iconify supported

## Tools integrated
1. prettier enabled
2. eslint enabled
   1. sort import statements
3. vscode plugins:
   1. tailwindcss plugin included

## How to use

### 1. use `degit` to clone the template:

```bash
npm install -g degit

degit ludafa/react-project-scaffold
```

### 2. use `github template`

1. open [this template project on github](https://github.com/ludafa/react-project-scaffold)
2. use this template:
   ![image from clipboard](https://ik.imagekit.io/6mysxbs8t/xoMTnW942Eqp2ZpuValhM5EcF1CKQNl_AxWSMISkhZw.png)
3. git clone your new repo and ready to start!
