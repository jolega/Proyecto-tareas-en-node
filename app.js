require('colors');
const {mostrarMenu,pausa } = require ('./helpers/mensajes.js')
console.clear();

const main = async () => {

    console.log('Hola mundo');

    let opt = ''

    do{
        opt= await mostrarMenu(); // await espera a que se cumppla 
       console.log({opt});

       if(opt ==='0'){
        await pausa();
       }
        

    }while(opt !=='0')


}

main();