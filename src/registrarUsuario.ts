import { Roles } from "./roles.enums";
import { Usuarios } from "./usuarios.interface";

export function registrarUsuario(usuario: Usuarios): Promise<string> {
    return new Promise((res, rej) => {
        setTimeout(() => {

            const usuarios: Usuarios[] = verUsuarios()
            const registrado = usuarios.find(u => u.email === usuario.email)

            if (registrado) {
                rej("El usuario ya se encuentra registrado")
            } else {
                usuarios.push(usuario)
                guardarUsuario(usuarios)
                res("Usuario registrado exitosamente")
            }
        }, 3000)
    })
}

function guardarUsuario(usuarios: Usuarios[]): void {
    console.log("Nuevo usuario registrado ", usuarios)
}

function verUsuarios(): Usuarios[] {
    return [
        { nombre: "Maria", email: "maria@gmail.com", clave: "Maria123", rol: Roles.Admin },
        { nombre: "Valentina", email: "valentina@gmail.com", clave: "Valentina53", rol: Roles.Usuario },
        { nombre: "Geraldine", email: "geraldine@gmail.com", clave: "Geraldine.", rol: Roles.Usuario }
    ]
}