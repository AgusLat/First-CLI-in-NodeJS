import colors from "colors"
import readline from 'node:readline'
//readline es un modulo de Node que nos permite leer datos de la consola antes de que el proceso termine. Aca lo vamos a usar con el metodo createInterface()

const mostrarMenu = ()=>{

    return new Promise((resolve, reject) => {


        console.clear();
        console.log('========================='.green)
        console.log('  Seleccione una opcion'.green)
        console.log('=========================\n'.green)
    
        console.log(`${'1.'.green} Crear tareas`);
        console.log(`${'2.'.green} Listar tareas`);
        console.log(`${'3.'.green} Listar tareas completadas`);
        console.log(`${'4.'.green} Listar tareas pendientes`);
        console.log(`${'5.'.green} Completar tarea(s)`);
        console.log(`${'6.'.green} Borrar tarea`);
        console.log(`${'0.'.green} Salir\n`);
    
        //El METODO createInterface() necesita si o si la propiedad input, en este caso en el objeto global process le añadimos el .stdin (standard input) que recibe datos ingresados por el usuario.
        //El stdout (standard output) devuelve lo ingresado por el usuario
        const rl = readline.createInterface({  
            input: process.stdin,
            output: process.stdout
          });
    
    
          //Aca le agregamos a la instruccion anterior el metodo question(), que recibe como argumentos un 'query', que vendria a a ser el string mostrado como output en la terminal y espera al input del usuario, y el otro argumento es un callback que recibe como argumento el input que se mando en el query (opt).
          rl.question('Seleccione una opcion: ', (opt)=>{
            rl.close();
            resolve(opt)
          });
        
    });



};

const pausa = ()=>{

    return new Promise((resolve, reject) => {
        

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
          });
    
          rl.question(`Presione ${'ENTER'.green} para continuar`, (opt)=>{
            rl.close();
            resolve();
          })

    })
}

export{
    mostrarMenu,
    pausa
}