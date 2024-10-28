// Usamos la base de datos Furniview
use('Furniview');

// En la base de datos creamos la collecion Usuarios
db.createCollection('Usuarios', {

    //Validadomos nuestros campos
    validator: {
        $jsonSchema: {
            //? Tipo de dato
            bsonType: 'object',
            title: 'Validacion de objeto usuario',
            //? Atributos de la coleccion
            properties: {
                nombre: {
                    bsonType: 'string',
                    description: 'Nombre del usuario (puede ser el nombre completo o algun alias)',
                },

                email: {
                    bsonType: 'string',
                    description: 'Correo electronico del usuario',
                },

                contrasena: {
                    bsonType: 'string',
                    description: 'Contrasena de la cuenta del usuario',
                },

                direccion: {
                    bsonType: 'string',
                    description: 'Dirección física del usuario',
                },

                telefono: {
                    bsonType: 'string',
                    description: 'Numero de telefono del usuario',
                },

                fecha_registro: {
                    bsonType: 'date',
                    description: 'Fecha de registro del usuario',
                },

                rol: {
                    bsonType: 'string',
                    description: 'Tipo de rol de usuario ya sea cliente o administrador'
                },

                estado: {
                    bsonType: 'string',
                    description: 'Estado del que pertenece el usuario',
                },

                ciudad: {
                    bsonType: 'string',
                    description: 'Ciudad del usuario',
                },

                fecha_nacimiento: {
                    bsonType: 'string',
                    description: 'Fecha de nacimiento del usuario',
                },

                CURP: {
                    bsonType: 'string',
                    description: 'CURP del usuario',
                },

                fecha_ultimo_acceso: {
                    bsonType: 'date',
                    description: 'fecha de ultima vez con sesion iniciada'
                },

                foto_de_perfil:
                {
                    bsonType: 'string',
                    description: 'Direccion URL de la imagen de perfil de usuario'
                }
            }
        }
    }
})


//? Usamos la base de datos Furniview
use('Furniview');

//? En la base de datos creamos la collecion Proveedores
db.createCollection('Proveedores', {

    //? Aqui esta el esquema validado, para nuestros campos
    validator: {
        $jsonSchema: {
            //? Tipo de dato
            bsonType: 'object',
            title: 'Validacion de objeto proveedor',
            //? Atributos requeridos
            required: ['_id', 'nombre', 'contacto_nombre', 'email', 'contrasena', 'tipo'],
            //? Atributos de la coleccion
            properties: {
                nombre: {
                    bsonType: 'string',
                    description: 'Nombre del proveedor (puede ser el nombre completo o algun alias)',
                },
                contacto_nombre: {
                    bsonType: 'string',
                    description: 'Nombre de contacto del proveedor',
                },
                telefono: {
                    bsonType: 'string',
                    description: 'Numero de telefono del proveedor',
                },
                email: {
                    bsonType: 'string',
                    description: 'Correo electronico del proveedor para comunicacion con el',
                },
                contrasena: {
                    bsonType: 'string',
                    description: 'Contrasena de la cuenta del proveedor',
                },
                direccion: {
                    bsonType: 'string',
                    description: 'Dirección física del proveedor, que puede ser útil para envíos',
                },
                ciudad: {
                    bsonType: 'string',
                    description: 'Ciudad del proveedor',
                },
                estado: {
                    bsonType: 'string',
                    description: 'Estado del que pertenece el proveedor',
                },
                cp: {
                    bsonType: 'string',
                    description: 'Codigo Postal de residencia del proveedor',
                },
                estado_proveedor: {
                    bsonType: 'bool',
                    description: 'Estado de la cuenta del proveedor',
                },
                fecha_registro: {
                    bsonType: 'date',
                    description: 'Fecha de registro del proveedor',
                },
                fecha_ultima_actualizacion: {
                    bsonType: 'date',
                    description: 'Fecha de ultima actualizacion de informacion del proveedor',
                },
                website: {
                    bsonType: 'string',
                    description: 'URL del sitio web del proveedor',
                },
                tipo: {
                    description: 'Define el tipo de proveedor que se a registrado en la plataforma',
                    enum: ['Fabricante', 'Distribuidor', 'Mayorista'],
                },
            }
        }
    }
})