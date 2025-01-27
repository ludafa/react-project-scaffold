# React + TypeScript + Vite + UnoCSS

This template provides a minimal setup to get React working based on [Vitejs](https://vitejs.dev/)

The template includes:

- react@19
- typescript
- unocss
- vite@6
- prettier
- eslint@9

## eslint features

1. eslint rules for react
2. eslint rules for typescript
3. eslint rules for prettier: provides standard code styles
4. eslint rules for import: sort import statements in order
5. eslint rules for react-hooks
6. eslint rules for react-refresh
7. eslint rules for unocss: sort the `className` in jsx

## css features: uno supported with usefully plugin

1. `@apply` directive in css file
2. icon preset enabled: [solar icons](https://icones.js.org/collection/solar)
3. prettier enabled
4. eslint enabled
   1. sort import statements
5. vscode plugins:
   1. unocss plugin conflicts with tailwindcss plugin. please disable tailwindcss plugin.

# How to use

## get the seed project

you can use `degit` or `github template` to get the seed project:

### use `degit` to clone the template:

```bash
npm install -g degit

degit ludafa/react-project-scaffold your-project-name
```

### 2. use `github template`

1. open [this template project on github](https://github.com/ludafa/react-project-scaffold)
2. use this template:
   ![image from clipboard](https://ik.imagekit.io/6mysxbs8t/xoMTnW942Eqp2ZpuValhM5EcF1CKQNl_AxWSMISkhZw.png)
3. git clone your new repo and ready to start!

## replace the placeholder string

1. replace the project name in `package.json` / `react-project.code-workspace`
2. rename the workspace file name from `react-project.code-workspace` to `your-project-name.code-workspace`.
