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

    borrarTarea(id = ''){
        if(this._listado[id]) {
            delete this._listado[id];
        }
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
        let contador = 0; 
        this._listadoArr.forEach((tarea) => {
        
        const { desc, completadoEn} = tarea
        const estado = ( completadoEn ) ? 'Completada'.green :'Pendiente'.red;
         if(completadas && completadoEn){
            contador++;
            console.log(`${contador}. `.green + `${desc} :: ${completadoEn.green} `)
         }
        else if(!completadas && !completadoEn) {
            contador++;
            console.log(`${contador}. `.green + `${desc} :: ${estado} `)

        }        
        });
    }

    toggleCompletadas (ids =[]) {

        ids.forEach (id => {

            const tarea = this._listado[id];
            if( !tarea.completadoEn) {
                tarea.completadoEn = new Date().toISOString();
            }
        });

        this._listadoArr.forEach(tarea => {

            if(!ids.includes(tarea.id)){
                 this._listado[tarea.id].completadoEn = null;

            }
        });

    }

}
module.exports = Tareas;