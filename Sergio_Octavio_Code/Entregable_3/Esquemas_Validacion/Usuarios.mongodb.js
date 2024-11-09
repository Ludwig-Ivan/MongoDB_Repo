use('Furniview');
//? Esquema de validacion correcta
db.createCollection('Usuarios', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            title: 'Validacion de objeto usuario',
            required: ['_id', 'nombre', 'correo', 'contrasena'],
            properties: {
                _id: {
                    bsonType: 'int',
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
                    pattern: '^[A-Za-z0-9.]{8,}$'

                },
                direccion: {
                    bsonType: 'string',
                },
                telefono: {
                    bsonType: 'string',
                },
                fecha_registro: {
                    bsonType: 'date',
                    description: 'Fecha de registro del usuario',
                },
                rol: {
                    description: 'Tipo de rol de usuario ya sea cliente o administrador',
                    enum: ['Cliente', 'Administrador'],
                },
                estado: {
                    bsonType: 'string'
                },
                fecha_nacimiento: {
                    bsonType: 'date',
                    description: 'Fecha de nacimiento del usuario',
                },
                curp: {
                    bsonType: 'string',
                    description: 'CURP del usuario',
                },
                fecha_ultimo_acceso: {
                    bsonType: 'date',
                    description: 'fecha de ultima vez con sesion iniciada'
                },
                imagen_perfil: {
                    bsonType: 'string',
                    description: 'Direccion URL de la imagen de perfil de usuario'
                },
                locaciones: {
                    bsonType: 'array',
                    description: 'Dirección del usuario',
                    minItems: 1,
                    items: {
                        bsonType: 'object',
                        required: ['nombre', 'direccion', 'estado', 'cp', 'pais', 'estado_locacion', 'fecha_registro'],
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
                                bsonType: 'string',
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
                            predeterminada: {
                                bsonType: 'bool'
                            }
                        },
                    }

                },
            },
            additionalProperties: false,
        }
    }
})

db.Usuarios.createIndex(
    { correo: 1 },
    { unique: true }
)
