export interface Usuario {
    uid: string,
    nombre: string,
    apellido:string,
    email:string,
    rol: string, // => designamos un rol por defecto para los usuarios que se registren 
    password: string
}
