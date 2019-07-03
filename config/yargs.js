const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marcar como completada o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tareas', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea de la lista', {
        descripcion
    })
    .command('listar', 'Lista las tareas por hacer', {
        completado: {
            alias: 'c',
            desc: 'Indica el estado de una tarea'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}