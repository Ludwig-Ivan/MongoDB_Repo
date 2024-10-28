use('Furniview');

db.createCollection('Usuarios', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            title: 'Validacion de objeto usuario',
            required: ['nombre', 'email', 'contrasena'],
            properties: {
                _id: {
                    bsonType: 'objectId',
                },

                nombre: {
                    bsonType: 'string',
                    description: 'Nombre del usuario (puede ser el nombre completo o algun alias)',
                },

                email: {
                    bsonType: 'string',
                    description: 'Correo electronico del usuario',
                    // Patron de validacion que debe cumplir el email para poder insertar el documento
                    pattern: '^[A-Za-z\\d.-]{1,}[@][A-Za-z\\d.-]{1,}[.][A-Za-z\\d.-]{1,}$',
                },

                contrasena: {
                    bsonType: 'string',
                    description: 'Contrasena de la cuenta del usuario',
                    // Se valida que cumpla que sea mayor que 8, tenga numeros, mayusculas, minusculas
                    pattern: '^[A-Za-z0-9.]{8,255}$'

                },

                direccion: {
                    bsonType: 'object',
                    description: 'Dirección del usuario',
                    properties: {
                        calle: {
                            bsonType: 'string',
                            description: 'calle y numero de casa del usuario',
                        },
                        colonia: {
                            bsonType: 'string',
                            description: 'colonia del usuario',
                        },
                        ciudad: {
                            bsonType: 'string',
                            description: 'Ciudad del usuario',
                        },
                        estado: {
                            bsonType: 'string',
                            description: 'Estado del que pertenece el usuario',
                        },
                        cp: {
                            bsonType: 'string',
                            description: 'Codigo Postal de residencia del usuario',
                        },
                    },
                },

                telefono: {
                    bsonType: 'array',
                    description: 'Numeros de telefono del usuario',
                    minItems: 1,
                    maxItems: 3,
                    items: {
                        bsonType: 'string',
                    },
                    uniqueItems: true,
                },

                fecha_registro: {
                    bsonType: 'date',
                    description: 'Fecha de registro del usuario',
                },

                rol: {
                    bsonType: 'string',
                    description: 'Tipo de rol de usuario ya sea cliente o administrador',
                    enum: ['Cliente', 'Administrador'],
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
                },
            },
            // Si additionalProperties esta en false, Mongo no acepta mas atributos de los establecidos
            additionalProperties: false,
        }
    }
})

// Crea un indice para el campo email
// Evita la generacion de duplicados

db.Usuarios.createIndex(
    { email: 1 },
    { unique: true }
)