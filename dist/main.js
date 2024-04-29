"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const registrarUsuario_1 = require("./registrarUsuario");
const roles_enums_1 = require("./roles.enums");
const nuevoUsuario = {
    nombre: "Maria",
    email: "maria@gmail.com",
    clave: "Maria123",
    rol: roles_enums_1.Roles.Admin,
};
(0, registrarUsuario_1.registrarUsuario)(nuevoUsuario)
    .then((mensaje) => console.log(mensaje))
    .catch((error) => console.error("Error al registrar el usuario: ", error));
