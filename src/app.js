const express = require('express');

const taskRoutes = require('./routes/task.routes');
const app = express();
app.use(express.json()); //middleware para parsear TODO a json

app.use("/api/task", taskRoutes); //creamos una ruta para las apis de tareas
const PORT = process.env.PORT || 3000; //definimos el puerto por defecto 3000
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}/api/task`);
});