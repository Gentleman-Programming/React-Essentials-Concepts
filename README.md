# React Essentials Concepts

# English

Welcome to the React Best Practices repository. This repository focuses on demonstrating best practices in using components and performance optimization using `useMemo` and `useCallback` in a React 18 application.

This repository features two main components: `GoodApp` and `GoodChildren`. These components exemplify how to structure and use React components efficiently and effectively.

## Description

### GoodApp & GoodChildren

`GoodApp` is our main application component, within which we make calls to the `GoodChildren` component. These components have been designed following React's best practices, effectively demonstrating how to handle props, state, component lifecycles, and how and when to use side effects.

### useMemo & useCallback

Additionally, this repository also focuses on showcasing the correct use of the `useMemo` and `useCallback` Hooks within the `Children` and `App` components. These hooks are powerful tools for performance optimization in React, but misuse can lead to counterproductive results. Here we demonstrate both correct and incorrect usage, to help you understand when and how to use these Hooks for maximum benefit.

## Usage

To utilize this repository, you can clone it to your local machine and run it with your React development environment. Navigate through the components and observe how different techniques and practices are used.

## Contribution

Contributions to this repository are welcome. If you have additional best practice suggestions or ways to improve the current demonstrations, feel free to fork the repository and submit a pull request.

## License

This repository is licensed under the MIT license. Please refer to the LICENSE file for more details.

# Español

Bienvenido al repositorio de buenas prácticas de React. Este repositorio se enfoca en la demostración de buenas prácticas en el uso de componentes y la optimización de rendimiento utilizando `useMemo` y `useCallback` en una aplicación hecha con React 18.

Este repositorio presenta dos componentes principales: `GoodApp` y `GoodChildren`. Estos componentes ejemplifican cómo estructurar y utilizar los componentes de React de manera eficiente y efectiva.

## Descripción

### GoodApp & GoodChildren

`GoodApp` es el componente principal de nuestra aplicación y dentro de este, hacemos llamadas al componente `GoodChildren`. Estos componentes han sido diseñados siguiendo las mejores prácticas de React, demostrando de manera efectiva cómo se deben manejar los props, el estado, los ciclos de vida de los componentes, y cómo y cuándo se deben utilizar los efectos secundarios.

### useMemo & useCallback

Además, este repositorio también se enfoca en mostrar el uso correcto de los Hooks `useMemo` y `useCallback` en los componentos `Children` y `App`. Estos Hooks son herramientas poderosas para la optimización del rendimiento en React, pero su uso incorrecto puede llevar a resultados contraproducentes. Aquí demostramos tanto el uso correcto como incorrecto, para ayudarte a entender cuándo y cómo utilizar estos Hooks para obtener el mayor beneficio.

## Uso

Para utilizar este repositorio, puedes clonarlo a tu máquina local y ejecutarlo con tu entorno de desarrollo React. Navega por los componentes y observa cómo se utilizan las diferentes técnicas y prácticas.

## Contribución

Las contribuciones a este repositorio son bienvenidas. Si tienes sugerencias de buenas prácticas adicionales o formas de mejorar las demostraciones actuales, no dudes en hacer un fork del repositorio y enviar una pull request.

## Licencia

Este repositorio está licenciado bajo la licencia MIT. Por favor, consulta el archivo LICENSE para más detalles.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
