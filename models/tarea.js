import { v4 as uuidv4 } from 'uuid';

export class Tarea {

    id = '';
    desc = '';
    completadoEn = null;

    constructor( desc ){
        this.id = uuidv4(); //GENERA UN ID UNICO DEL PAQUETE UUID
        this.desc = desc;
        this.completadoEn = null;
    }

}