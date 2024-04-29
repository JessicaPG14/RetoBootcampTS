import { Roles } from "./roles.enums";

export interface Usuarios {
    nombre: string,
    email: string,
    clave: string,
    rol: Roles
}