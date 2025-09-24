const {Router} = require('express'); //requieremos el router de express
const controller = require('../controllers/tasks.controller'); //importamos el controlador
const router = Router(); //creamos una instancia del router "El gestor de rutas"

router.get("/", controller.findAll); //ruta raiz / metodo get / controlador findAll
router.post("/", controller.addTask); //ruta raiz / metodo post / controlador addTask
router.delete("/:id", controller.removeTask); //ruta con parametro id / metodo delete / controlador deleteTask
router.put("/:id", controller.updateTask);
router.patch("/:id", controller.alterTask);
router.get("/:id", controller.findTask);

module.exports = router; 