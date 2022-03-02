require('colors');
const { guardarDb, leerDB } = require('./helpers/guardarArchivo.js');
const {inquirerMenu, 
        pausa,
        leerInput,
        listadoTareasBorrar,
        confirmar,
        mostrarListadoChecklist
        } = require ('./helpers/inquirer.js');
const Tarea = require('./models/tarea.js');
const Tareas = require('./models/tareas.js');

console.clear();

const main = async () => {

    let opt = ''
    const tareas = new Tareas();
    const tareasDB=leerDB();

    if (tareasDB){
        tareas.cargaTareasFromArray(tareasDB);
        await pausa();
    }

    
    do{
        opt= await inquirerMenu(); // await espera a que se cumppla 
      // console.log(`${opt}` + "\n ");


       switch(opt){
           case '1': { // agregar tareas

           const desc = await leerInput('Descriopcion: ') 
           tareas.crearTarea(desc);
           break;

           }   
           case '2':{ // listar tareas   

           tareas.listadoCompleto();
            break;

           }         
           case '3':{  // listar tareas completas  

           tareas.listarPendientesCompletadas(true);
           break;

           } 
           case '4':{   // listar tareas pendientes

            tareas.listarPendientesCompletadas(false);
            break;
            }
           case '5':  //completar tareas

           const ids = await  mostrarListadoChecklist( tareas._listadoArr);
           tareas.toggleCompletadas(ids);
            break;

           case '6':{
            const id = await listadoTareasBorrar( tareas._listadoArr );
            if(id !== '0' ){
                const ok = await confirmar('¿Esta seguro?')
                // Todo: preguntar si esta seguro
                if(ok){
                    tareas.borrarTarea(id);
                    console.log('Tarea borrada');
                }
            }
            break;

           }
       }
     
    guardarDb(tareas._listadoArr);
    console.log();
     await pausa();
    }while(opt !=='0')


}

main();