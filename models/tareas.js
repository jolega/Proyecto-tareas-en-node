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

        console.log();
        this._listadoArr.forEach((tarea, i) => {
        
        const idx = ` ${i + 1}`.green 
        const { desc, completadoEn} = tarea
        const estado = ( completadoEn ) ? 'Completada'.green :'Pendiente'.red;
         console.log(`${idx}. ${desc} :: ${estado} `);

        });
    }

    listarPendientesCompletadas (completadas = true ){

        console.log();
        this._listadoArr.forEach((tarea, i) => {
        
        const idx = ` ${i + 1}`.green 
        const { desc, completadoEn} = tarea
        const estado = ( completadoEn ) ? 'Completada'.green :'Pendiente'.red;
        
        const imprimir = ( completadas && completadoEn) 
                       ? console.log(`${idx}. ${desc} :: ${estado} `)
                       : (!completadas && !completadoEn) 
                            ?  console.log(`${idx}. ${desc} :: ${estado} `)      
                            : null                 
        });
    }

}
module.exports = Tareas;