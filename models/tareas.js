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

    cargaTareasFromArray(tareas = [] ) {

        tareas.forEach(tarea => 

            this._listado[tarea.id]  = tarea

            );
       

    }

    crearTarea(desc = ' '){
        const tarea = new Tarea(desc)
        this._listado[tarea.id] = tarea;
    }

    listadoCompleto () {
        const listadoCompleto = []; 
        let index = 1; 
        
        this._listadoArr.forEach(({ desc, completadoEn}) => {
        const completado = (completadoEn === null ) ?  'Pendiente' : 'Completada' ;
        listadoCompleto.push (`${index}. ${desc} :: ${completado} `);
        index++;

        });

        console.log(listadoCompleto);
    }

}
module.exports = Tareas;