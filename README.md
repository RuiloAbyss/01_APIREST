# API REST de Tareas

Este proyecto es una API REST sencilla para la gestión de tareas, creada como práctica para aprender los conceptos básicos de Express y el patrón MVC en Node.js.

## Estructura del proyecto

- **src/models/task.model.js**: Aquí se define la lógica para manejar las tareas en memoria.
- **src/controllers/tasks.controller.js**: Controla la lógica de negocio y como responde cada tipo de petición.
- **src/routes/task.routes.js**: Contiene las rutas de la API y conecta cada una con su controlador.
- **src/app.js**: Aquí se construye la ejecución del servidor en Express.

## ¿Cómo funciona cada ruta?

Para esto fui creando cada ruta para cumplir los requisitos de la tarea:

### Consideración
- Usamos la dirección `/api/task/` para poder probar las rutas así que por eso todas la tienen

### 1. Obtener todas las tareas
- **Ruta:** `GET /api/task/`
- **Función:** Devuelve la lista de todas las tareas.
- **Cómo lo hice:** Definí la función `findAll` en el controlador y la conecté con la ruta raíz usando `router.get("/", controller.findAll)`. (Esta la hicimos en clases)

### 2. Consultar una tarea específica
- **Ruta:** `GET /api/task/:id`
- **Función:** Devuelve los datos de una tarea según su ID.
- **Cómo lo hice:** Usé la función `findTask` en el controlador y la conecté con la ruta que recibe un parámetro `id`.

### 3. Crear una nueva tarea
- **Ruta:** `POST /api/task/`
- **Función:** Agrega una nueva tarea con el título recibido en el cuerpo de la solicitud.
- **Cómo lo hice:** Implementé `addTask` en el controlador y la conecté con la ruta raíz usando el método POST.

### 4. Eliminar una tarea
- **Ruta:** `DELETE /api/task/:id`
- **Función:** Elimina la tarea con el ID indicado.
- **Cómo lo hice:** Definí `removeTask` en el controlador y la conecté con la ruta que recibe el ID.

### 5. Actualizar el título de una tarea
- **Ruta:** `PUT /api/task/:id`
- **Función:** Cambia el título de la tarea indicada por su ID.
- **Cómo lo hice:** Usé la función `updateTask` en el controlador y la conecté con la ruta PUT.

### 6. Completar o descompletar una tarea
- **Ruta:** `PATCH /api/task/:id`
- **Función:** Cambia el estado de completado de la tarea (de true a false o viceversa) mediante la negación.
- **Cómo lo hice:** Implementé `alterTask` en el controlador y la conecté con la ruta PATCH.
- Anteriormente consideré hacer un segundo `PUT` con otra dirección, pero estéticamente me pareció desagradable e implementé `PATCH` en su lugar.

## ¿Cómo se conecta todo?

- Las rutas se definen en `task.routes.js` usando el router de Express.
- Cada ruta llama a una función del controlador, que a su vez usa el modelo para modificar o consultar los datos.
- El servidor Express se configura en `app.js` y expone las rutas bajo `/api/task`.
- Para probar la API se usó **Insomnia** (Más información en el pequeño reporte que preparé)

---

Este proyecto me ayudó a entender cómo separar la lógica en modelos, controladores y rutas, y cómo crear una API REST funcional desde cero. :D