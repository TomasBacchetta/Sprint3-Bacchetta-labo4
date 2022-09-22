export class Mensaje {
    mensaje : string = "";
    usuario : string = "";
    fecha : string = "";


    static toMensaje(obj : any):Mensaje{
        let nuevoMensaje = new Mensaje();
        nuevoMensaje.mensaje = obj.mensaje;
        nuevoMensaje.usuario = obj.usuario;
        nuevoMensaje.fecha = obj.fecha;

        return nuevoMensaje;
    }

    static validarTextoMensaje(mensajeTexto : string){
        if (mensajeTexto.length > 0 && mensajeTexto.length < 100){
            return true;
        }
        return false;
    }

}
