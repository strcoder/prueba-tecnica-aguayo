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

## 📌 Nota final
Esta prueba fue desarrollada bajo los lineamientos solicitados, buscando aplicar buenas prácticas, un enfoque claro en la experiencia de usuario y manteniendo la calidad del código.
Gracias por la oportunidad de participar en su proceso.