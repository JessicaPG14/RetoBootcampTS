import { registrarUsuario } from "./registrarUsuario";
import { Roles } from "./roles.enums";
import { Usuarios } from "./usuarios.interface";

const nuevoUsuario: Usuarios = {
    nombre: "Maria",
    email: "maria@gmail.com",
    clave: "Maria123",
    rol: Roles.Admin,
};

registrarUsuario(nuevoUsuario)
    .then((mensaje) => console.log(mensaje))
    .catch((error) => console.error("Error al registrar el usuario: ", error));