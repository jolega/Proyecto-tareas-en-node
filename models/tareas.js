const Tarea = require("./tarea");

/**
 * _listado
 *   {id, desc, compleatado}
 */
class Tareas {

    _listado = {}

    get _listadoArr() {
        const listado = []; 

        Object.keys(this._listado).forEach (key =>{
            listado.push(this._listado[key])
        });

        return listado
    }

    constructor(){
        this._listado = {};
    }

    crearTarea(desc = ' '){
        const tarea = new Tarea(desc)
        this._listado[tarea.id] = tarea;
    }

}
module.exports = Tareas;