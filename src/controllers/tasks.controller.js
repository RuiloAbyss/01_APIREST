const Task = require('../models/task.model');//importamos el modelo con las funciones

exports.findTask = (req, res) => {
    const id = req.params.id; //obtenemos el id de la url
    const data = Task.findTask(id);
    if (!data) return res.status(404).json({msg: "No se encontró la tarea"});
    res.status(200).json(data);
}

exports.findAll = (req, res) => { //solicitud y respuesta respectivamente
    const data = Task.findAll();
    res.status(200).json(data);//devolvemos un estado 200 "OK" y los datos
}

exports.addTask = (req, res) => {
    const title = req.body.title;//recibimos el titulo desde el cuerpo de la solicitud
    const createdTask = Task.addTask(title);
    res.status(201).json(createdTask);//devolvemos un estado 201 "creado" y la tarea creada
}

exports.removeTask = (req, res) => {
    const id = req.params.id;//
    const ok = Task.removeTask(id);
    if (!ok) return res.status(404).json({msg: "No se encontró la tarea"});//404 no encontrado
    res.status(200).json({msg: "Tarea eliminada"});//retornamos un 200 "sin contenido" (porque ya lo eliminamos)
}

exports.updateTask = (req, res) => {
    const id = req.params.id;
    const title = req.body.title;
    const updatedTask = Task.updateTask(id, title);
    if (!updatedTask) return res.status(404).json({msg: "No se encontró la tarea"});
    return res.status(200).json({msg: "Se cambió el título de la tarea", task: updatedTask});
}   

exports.alterTask =(req, res) => {
    const id = req.params.id;
    const alteredTask = Task.alterTask(id);
    if (!alteredTask) return res.status(404).json({msg: "No se encontró la tarea"});
    return res.status(200).json({msg: "Se cambió el estado de la tarea", task: alteredTask});
}   