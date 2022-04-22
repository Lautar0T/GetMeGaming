# Curso de React

## HTML
* Es un lengua de marcado que permite crear páginas web dinámicas.
* No es un lenguaje de programación, es un lenguaje de marcado.
    #### Etiquetas de metadatos
    * `<meta>` - Etiqueta de metadatos, para aporta información a la página web.
     * `<link>` - Etiqueta para definir un enlace a un archivo externo (Como JS o CSS).
    * `<title>` - Etiqueta para definir el título de la página.
    * '<base>' - Etiqueta para definir la URL base de la página.

    #### Etiquetas de Scripting
    * `<script>` - Etiqueta para definir un script.
    * `<noscript>` - Etiqueta para definir un contenido que no se puede mostrar si el navegador no soporta JavaScript.
    ### DOM 
    * Document Object Model [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction "Dev Mozilla DOM")
    * Es una representación de la estructura de un documento HTML.
    * Para el navegador es un objeto que contiene todos los elementos de un documento HTML.
    ### API
    * Es un conjunto de métodos y propiedades que permite interactuar con el navegador.
## CSS
* Es un lenguaje de marcado que permite estilizar páginas web.
* `<style>` - Etiqueta para definir un estilo.
    ### Tailwind CSS
    * [Tailwind CSS](https://tailwindcss.com/docs/introduction)
    * Es un framework de estilos para la web.
    * Para instalarlo correr el siguiente comando:
    `npm install -D tailwindcss postcss autoprefixer`.
    * Para usarlo en tu proyecto correr el siguiente comando: `npx tailwindcss init -p` y agregar la ruta al archivo _tailwind.config.js_:
    ` content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],`
    * Agregar las etiquetas al archivo _index.css_:
    `@tailwind base;
    @tailwind components;
    @tailwind utilities;`
    * Arrancarlo con `npm run dev`.
## JS
* Vanilla JavaScript: Es un lenguaje de programación que no requiere de un framework.
### Variables
* `var` - Declaración de una variable de scope global.
* `let` - Declaración de una variable de scope local que puede ser reasignada.
* `const` - Es una constante que no puede ser modificada una vez definida.
### Funciones
* `function` - Es un conjunto de instrucciones que se ejecutan cuando se llama a la función.
* Arrow function: Es una función que se puede definir de la siguiente manera:
    * `() => {}` - Es una función que no recibe parámetros.
    * `(param1, param2) => {}` - Es una función que recibe parámetros.
    * `(param1, param2) => { return 'Hola'; }` - Es una función que recibe parámetros y devuelve un valor.
    * `(param1, param2) => param1 + param2` - Es una función que recibe parámetros y devuelve un valor.
    * `(param1, param2) => { return param1 + param2; }` - Es una función que recibe parámetros y devuelve un valor.
    * `(param1, param2) => { return param1 + param2; }` - Es una función que recibe parámetros y devuelve un valor.
    * `(param1, param2) => { return param1 + param2; }` - Es una función que recibe parámetros y devuelve un valor.
    * `(param1, param2) => { return param1 + param2; }` - Es una función que recibe parámetros y devuelve un valor.
    * `(param1, param2) => { return param1 + param2; }` - Es una función que recibe parámetros y devuelve un valor.
    * `(param1, param2) => { return param1 + param2; }` - Es una función que recibe parámetros y devuelve un valor.
    * `(param1, param2) => { return param1 + param2; }` - Es una función que recibe parámetros y devuelve un valor.
    * `(param1, param2) => { return param1 + param2; }` - Es una función que recibe parámet
* `return` - Es una instrucción que devuelve un valor a la función.
## React.js
* Es un framework de JavaScript que permite crear interfaces de usuario.
    ### Create-react-app
    * Es una herramienta que permite crear un proyecto de React.js.
    * Se crea con `npx create-react-app (nombre-proyecto)` y se puede ejecutar con `npm start` o `npm run dev`.
    ### Vite.js
    * Es una herramienta que permite crear un proyecto de React.js.
    * Se crea con `npm init vite@latest (nombre-proyecto)` y se puede ejecutar con `npm start` o `npm run dev`.
