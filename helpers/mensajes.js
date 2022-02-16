require('colors');

const mostrarMenu = () => {


    return new Promise( resolve => {

        console.clear();
        console.log('=============================='.green)
        console.log('   Selecciones una opcion '.green)
        console.log('============================== \n '.green)
    
        console.log(`${ '1'.green }. Crear tarea`);
        console.log(`${ '2'.green}. Listar tarea`);
        console.log(`${ '3'.green }. Listar tareas completas`);
        console.log(`${ '4'.green }. Listar tareas pendientes`);
        console.log(`${ '5'.green }. Completar tarea(s)`);
        console.log(`${ '6'.green }. Borrar tarea`);
        console.log(`${ '0'.green }. Salir`);
    
        const readLine = require('readline').createInterface({
            input:  process.stdin,
            output: process.stdout
    
        })
    
        readLine.question(' \n Seleccione una opcion: ', (opt) => {
            readLine.close();
            resolve(opt);
        })
        
    })
}

const pausa = () => {


    return new Promise( resolve => {

        const readLine = require('readline').createInterface({
            input:  process.stdin,
            output: process.stdout
    
        })
    
        readLine.question(`Presione ${'Enter'.green} `, (opt) => {
            readLine.close();
            resolve(opt);
        })
    })




}

module.exports = {
    mostrarMenu,
    pausa
}