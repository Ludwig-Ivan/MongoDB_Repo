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

                correo: {
                    bsonType: 'string',
                    description: 'Correo electronico del usuario',
                    pattern: '^[A-Za-z\\d.-]{1,}[@][A-Za-z\\d.-]{1,}[.][A-Za-z\\d.-]{1,}$',
                },

                contrasena: {
                    bsonType: 'string',
                    description: 'Contrasena de la cuenta del usuario',
                    pattern: '^[A-Za-z0-9.]{8,255}$'

                },

                locaciones: {
                    bsonType: 'object',
                    description: 'Dirección del usuario',
                    properties: {
                        nombre: {
                            bsonType: 'string',
                            description: 'Nombre de la locacion'
                        },
                        direccion: {
                            bsonType: 'string',
                            description: 'calle y numero de casa del usuario',
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
                        pais: {
                            bsonType: 'string',
                            description: 'Pais de la locacion'
                        },
                        telefono: {
                            bsonType: 'array',
                            description: 'Numeros de telefono de la locacion',
                            minItems: 1,
                            maxItems: 3,
                            items: {
                                bsonType: 'string',
                            },
                            uniqueItems: true,
                        },
                        fecha_registro: {
                            bsonType: 'date',
                            description: 'Fecha en la cual se registro la locacion'
                        },
                        estado_locacion: {
                            bsonType: 'bool',
                            description: 'Locacion habilitada?'
                        },
                        intrucciones_entrega: {
                            bsonType: 'string',
                            description: 'Indicaciones de entrega'
                        },
                        predeterminada:
                        {
                            bsonType: 'bool'
                        }
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
            additionalProperties: false,
        }
    }
})

db.Usuarios.createIndex(
    { email: 1 },
    { unique: true }
)