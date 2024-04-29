"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registrarUsuario = void 0;
const roles_enums_1 = require("./roles.enums");
function registrarUsuario(usuario) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const usuarios = verUsuarios();
            const registrado = usuarios.find(u => u.email === usuario.email);
            if (registrado) {
                rej("El usuario ya se encuentra registrado");
            }
            else {
                usuarios.push(usuario);
                guardarUsuario(usuarios);
                res("Usuario registrado exitosamente");
            }
        }, 3000);
    });
}
exports.registrarUsuario = registrarUsuario;
function guardarUsuario(usuarios) {
    console.log("Nuevo usuario registrado ", usuarios);
}
function verUsuarios() {
    return [
        { nombre: "Maria", email: "maria@gmail.com", clave: "Maria123", rol: roles_enums_1.Roles.Admin },
        { nombre: "Valentina", email: "valentina@gmail.com", clave: "Valentina53", rol: roles_enums_1.Roles.Usuario },
        { nombre: "Geraldine", email: "geraldine@gmail.com", clave: "Geraldine.", rol: roles_enums_1.Roles.Usuario }
    ];
}
