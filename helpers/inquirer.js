import inquirer from "inquirer";
import colors from 'colors';






const inquirerMenu = async() =>{

    let preguntas = [{      //ASI SE CONSTRUYE UN MENU CON OPCIONES EN INQUIRER, ESTE ES EL ARRAY QUE RECIBE questions DENTRO DE inquirer.prompt()
        type : 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Crear tarea`
            },
            {
                value: '2',
                name: `${'2.'.green} Listar tareas`
            },
            {
                value: '3',
                name: `${'3.'.green} Listar tareas completadas`
            },
            {
                value: '4',
                name: `${'4.'.green} Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${'5.'.green} Completar tarea(s)`
            },
            {
                value: '6',
                name: `${'6.'.green} Borrar tarea`
            },
            {
                value: '0',
                name: `${'0.'.green} Salir`
            },
    ]
    }];

        console.clear();
        console.log('========================='.green)
        console.log('  Seleccione una opcion'.white)
        console.log('=========================\n'.green)

        const {opcion} = await inquirer.prompt(preguntas); //DEVUELVE EL VALOR DE LA OPCION MEDIANTE DESESTRUCTIRACION

        return opcion //LO MANDAMOS POR RETURN


}

const pausa = async ()=>{


    let preguntaPausa = [
        {
            type : 'input',
            name: 'Enter',
            message: `PRESIONE ${'ENTER'.green} PARA CONTINUAR`,
            
            
    
    }]
    
    console.log('\n')

    await inquirer.prompt(preguntaPausa);

   

};


const leerInput = async ( message )=>{

    let question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value){
                if(value.length === 0){
                    return 'Por favor ingrese un valor'
                }
                return true

            }

        }
    ]

    const { desc } = await inquirer.prompt(question);
    return desc;
}


const listadoTareasBorrar = async ( tareas = [])=> {

    const choices = tareas.map( (tarea, i) => {

        const idx = `${i+1}.`.green

        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc}`
        }

    })

    choices.unshift({
        value: '0',
        name: '0. '.green + 'Cancelar'
    });

    const preguntas = [{
        type : 'list',
        name: 'id',
        message: 'Seleccione la tarea que desee borrar',
        choices
    }]

    const {id} = await inquirer.prompt(preguntas);
    return id;   
};

const confirmar = async (message)=>{

    const question = [{
        type: 'confirm',
        name: 'ok',
        message
    }];

    const { ok } = await inquirer.prompt(question);
    return ok;
}

const mostrarListadoCheckList = async ( tareas = [])=> {

    const choices = tareas.map( (tarea, i) => {

        const idx = `${i+1}.`.green

        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc}`,
            checked: (tarea.completadoEn) ? true: false
        }

    })


    const pregunta = [{
        type : 'checkbox',
        name: 'ids',
        message: 'Selecciones',
        choices
    }]

    const {ids} = await inquirer.prompt(pregunta);
    return ids;   
};


export {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoCheckList
};