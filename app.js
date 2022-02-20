require('colors');
//const {mostrarMenu,pausa } = require ('./helpers/mensajes.js')
const {inquirerMenu, pausa} = require ('./helpers/inquirer.js');
const Tarea = require('./models/tarea.js');
const Tareas = require('./models/tareas.js');

console.clear();

const main = async () => {

    console.log('Hola mundo');

    let opt = ''

    do{
        opt= await inquirerMenu(); // await espera a que se cumppla 
       console.log({opt} + "\n" );

       const tareas = new Tareas();

       const tarea = new Tarea('Comprar comida')
       console.log(tarea); 

       tareas._listado[tarea.id]= tarea;
       console.log(tareas); 

        await pausa();

    }while(opt !=='0')


}

main();