require('colors');
const { guardarDb } = require('./helpers/guardarArchivo.js');
//const {mostrarMenu,pausa } = require ('./helpers/mensajes.js')
const {inquirerMenu, 
        pausa,
        leerInput
        } = require ('./helpers/inquirer.js');
const Tarea = require('./models/tarea.js');
const Tareas = require('./models/tareas.js');

console.clear();

const main = async () => {

    console.log('Hola mundo');

    let opt = ''
    const tareas = new Tareas();

    do{
        opt= await inquirerMenu(); // await espera a que se cumppla 
       console.log(`${opt}` + "\n ");


       switch(opt){
           case '1': {
           const desc = await leerInput('Descriopcion: ') 
           tareas.crearTarea(desc);
           break;
           }   
           case '2':{

           // console.log(tareas._listado); 
            console.log(tareas._listadoArr);
            break;

           }
               
           case '3':
           case '4':
           case '5':
           case '6':
           case '7':
       }
 

      // const tarea = new Tarea('Comprar comida')
      // console.log(tarea); 

      // tareas._listado[tarea.id]= tarea;
      // console.log(tareas); 
      
    guardarDb(tareas._listadoArr);
     await pausa();

    }while(opt !=='0')


}

main();