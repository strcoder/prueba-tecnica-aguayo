# 🧪 Prueba Técnica Frontend React - Neology

Este proyecto es una solución a la prueba técnica para la vacante de **Frontend Developer en React** en Neology. Está construido con **React + TypeScript**, utilizando **Material UI** para el diseño de la interfaz, consumo de datos desde una API REST pública, ruteo dinámico, búsqueda filtrada y pruebas unitarias básicas con **Vitest** y **React Testing Library**.

---

## 🚀 Descripción del Proyecto

La aplicación muestra una lista de usuarios obtenidos desde la API de [JSONPlaceholder](https://jsonplaceholder.typicode.com/users). Permite:

- Visualizar la lista de usuarios.
- Buscar usuarios por nombre (filtrado en frontend).
- Ver el detalle completo de un usuario al hacer clic en él.
- Navegar entre páginas con paginación.
- Visualización responsive.
- Validación básica del campo de búsqueda para evitar ataques de scripting.
- Pruebas unitarias fundamentales.

---

## ⚙️ Tecnologías utilizadas

- React 18 + TypeScript
- Vite
- React Router DOM
- Material UI (MUI)
- Axios
- Sass (no se utilizó, pero está habilitado)
- Vitest + React Testing Library + jsdom

---

## 📦 Instalación del Proyecto

1. Clona el repositorio:

```bash
git clone git@github.com:strcoder/prueba-tecnica-aguayo.git
cd prueba-tecnica-aguayo
```

## Instala dependencias:

```bash
npm install
```

## Inicia el servidor local:


```bash
npm run dev
La aplicación estará disponible en http://localhost:3000
```

### 🧠 Estrategias y buenas prácticas aplicadas
- Componentización: Separación clara entre lógica de negocio (servicios) y presentación (componentes/páginas).
- Consumo de API: Mediante Axios encapsulado en un archivo de servicio (/api/users.ts).
- Ruteo dinámico: Con React Router, usando :id para detalle de usuario.
- Material UI: Uso de componentes accesibles, responsive y modernos.
- Paginación: Implementada para mejorar la experiencia de usuario con grandes volúmenes de datos.
- Prevención de ataques XSS: Sanitización de la entrada del usuario en el input de búsqueda.
- Pruebas unitarias: Implementadas en los componentes clave, cubriendo renderizado, filtrado y lógica de negocio.

## 🧪 Cómo correr las pruebas
Ejecuta el siguiente comando:

```bash
npm run test
```

### Si deseas ejecutar en modo interactivo para desarrollo:

```bash
npx vitest
```

## 🧠 Parte 2 – Preguntas Teóricas

### 1. Angular y React
#### ¿Qué es React y cuál es su propósito principal en el desarrollo web?
React es una biblioteca de JavaScript interfaces de usuario. El principal proposito es crear componentes reutilizables que gestionen su propio estado y se actualicen eficientemente ante cambios en los datos.

#### ¿Qué es un componente en React y cómo se crea uno?
Un componente es una unidad funcional de la UI, consta de código HTML y puede contener con código javascript para el dinamismos del UI. Puede ser una función o una clase que retorna JSX. Ejemplo:

```bash
const MyComponent = () => <h1>Hello World</h1>;
```

#### ¿Cuál es la diferencia entre ngOnInit() y constructor() en Angular?

constructor(): se utiliza para la inicialización básica del componente (inyección de dependencias).

ngOnInit(): es un hook del ciclo de vida que se ejecuta después del constructor y es ideal para lógica de inicialización (como llamadas a servicios o subscripciones).


### 2. HTML5
#### ¿Cuáles son algunas de las nuevas características introducidas en HTML5?

Nuevas etiquetas semánticas: `<header>, <section>, <article>, <footer>`, etc.

Soporte para audio y video: `<audio>, <video>`

Local Storage / Session Storage

WebSockets

Validación de formularios en el navegador

#### Describe la diferencia entre las etiquetas `<section> y <div>`.

`<section>` es semántica: representa una sección temática de contenido.

`<div>` es genérica: se usa solo para agrupar contenido sin significado semántico.

#### ¿Qué son los atributos data- en HTML5 y para qué se utilizan?
Son atributos personalizados que permiten almacenar información adicional en los elementos HTML sin afectar su funcionalidad o estilo. Ejemplo: `data-id="123"`

### 3. CSS / Sass
#### ¿Qué es Sass y cuál es su ventaja sobre CSS convencional?
Sass es un preprocesador CSS que permite usar variables, anidación, mixins, funciones, etc. Mejora la mantenibilidad, modularidad y reutilización de estilos.

#### Diferencia entre @import y @use en Sass:

@import: carga archivos Sass, pero puede provocar conflictos de nombres y duplicación.

@use: encapsula el contenido y evita conflictos, en la versión actual se reemplaza a @import por @use.

#### ¿Qué es BEM y cómo puede mejorar el mantenimiento del código CSS?
BEM (Block Element Modifier) es una metodología para nombrar clases CSS, mejorando la claridad y evitando colisiones.
```bash
Ejemplo: block__element--modifier
```

### 4. JavaScript / TypeScript
#### ¿Cuál es la diferencia entre JavaScript y TypeScript?
TypeScript es un complemento de JavaScript que añade tipado estático, interfaces y herramientas de desarrollo más robustas.

#### ¿Qué son los tipos en TypeScript y cómo ayudan?
Son definiciones explícitas del tipo de datos que una variable o función puede tener. Previenen errores en tiempo de compilación y mejoran el autocompletado y mantenimiento del código.

Declaración de variables:
```ts
// JavaScript
let nombre = 'Antonio';

// TypeScript
let nombre: string = 'Antonio';
```

### 5. npm – Sistema de gestión de paquetes
#### ¿Qué es npm y cuál es su función?
Es el gestor de paquetes de Node.js. Permite instalar, administrar y compartir librerías y herramientas en proyectos JavaScript.

¿Cómo se instala un paquete?

```bash
npm install nombre-del-paquete
```

### 6. Integración de APIs y WebSockets
#### ¿Qué es una API y cómo se utiliza en desarrollo web?
Una API (Application Programming Interface) es un conjunto de endpoints que permiten la comunicación entre aplicaciones. Se usa para consumir servicios externos o backend desde el frontend.

#### ¿Qué es JSON y su relación con APIs REST?
JSON (JavaScript Object Notation) es el formato más común para intercambiar datos entre cliente y servidor en APIs REST.

Ejemplo de solicitud GET:
```ts
fetch('https://api.com/data')
  .then(res => res.json())
  .then(data => console.log(data));
```

#### ¿Cómo integrarías un WebSocket?
```ts
const socket = new WebSocket('wss://servidor.com/socket');

socket.onopen = () => console.log('Conectado');
socket.onmessage = (event) => console.log(event.data);
```

### 7. Patrón MVC
#### ¿Qué es MVC y cuáles son sus componentes?
Modelo-Vista-Controlador (MVC) es un patrón de arquitectura que separa responsabilidades:

Modelo: gestiona los datos y lógica de negocio.

Vista: interfaz de usuario.

Controlador: coordina la interacción entre el modelo y la vista.

##### Ventajas del patrón MVC:

Separación de responsabilidades

Escalabilidad

Mantenimiento más simple

### 8. Pruebas Unitarias e Integración (Jasmine/Karma)
#### ¿Qué son las pruebas unitarias y por qué son importantes?
Son pruebas que validan el comportamiento de una unidad de código (función, componente). Ayudan a prevenir errores, mejorar la calidad del software y facilitar refactorizaciones.

Diferencia entre pruebas unitarias e integración:

_Unitarias:_ prueban funciones individuales.

_Integración:_ prueban múltiples módulos interactuando entre sí.

#### ¿Cómo configurar Jasmine + Karma en Angular?
Angular ya incluye Jasmine y Karma por defecto. Para ejecutarlas:

```bash
ng test
```
La configuración está en karma.conf.js y los archivos de test usan .spec.ts.

#### ¿Qué tan cómodo te sentirías trabajando con Angular?
Me siento cómodo trabajando con Angular. He trabajado en proyectos que lo utilizan, incluyendo gestión de formularios, servicios, ciclo de vida y modularización. También tengo experiencia con RxJS.

## 📌 Nota final
Esta prueba fue desarrollada bajo los lineamientos solicitados, buscando aplicar buenas prácticas, un enfoque claro en la experiencia de usuario y manteniendo la calidad del código.
Gracias por la oportunidad de participar en su proceso.

