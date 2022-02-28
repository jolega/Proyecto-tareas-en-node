require('colors');
const { guardarDb, leerDB } = require('./helpers/guardarArchivo.js');
const {inquirerMenu, 
        pausa,
        leerInput
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
           case '1': {
           const desc = await leerInput('Descriopcion: ') 
           tareas.crearTarea(desc);
           break;
           }   
           case '2':{            
           tareas.listadoCompleto();
            break;

           }         
           case '3':{
           tareas.listarPendientesCompletadas(true);
           break;
           }
           case '4':{
            tareas.listarPendientesCompletadas(false);
            break;
            }
           case '5':
           case '6':
           case '7':
       }
     
    guardarDb(tareas._listadoArr);
    console.log();
     await pausa();
    }while(opt !=='0')


}

main();