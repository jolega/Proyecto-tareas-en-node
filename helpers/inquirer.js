const inquirer = require('inquirer');
require('colors');

const menuOpts= [
    {
        type:'list',
        name: 'opcion',
        choices: ['Opt1','Opt2','Opt3']

    }
];

const inquirerMenu = async () => {

    console.clear();
    console.log('=============================='.green)
    console.log('   Selecciones una opcion '.green)
    console.log('============================== \n '.green)

    const opt = await inquirer.prompt(preguntas);

    return opt;
}

module.exports = {
    inquirerMenu 

}