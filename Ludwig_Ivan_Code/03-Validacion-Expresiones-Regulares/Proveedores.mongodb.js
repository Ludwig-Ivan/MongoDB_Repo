use('Furniview');

db.createCollection('Proveedores', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            title: 'Validacion de objeto proveedor',
            required: ['nombre', 'contacto_nombre', 'email', 'contrasena', 'tipo'],
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
                    bsonType: 'array',
                    description: 'Numeros de telefono del proveedor',
                    minItems: 1,
                    maxItems: 3,
                    items: {
                        bsonType: 'string',
                    },
                    uniqueItems: true,
                },
                email: {
                    bsonType: 'string',
                    description: 'Correo electronico del proveedor para comunicacion con el',
                    pattern: '^[A-Za-z\\d.-]{1,}[@][A-Za-z\\d.-]{1,}[.][A-Za-z\\d.-]{1,}$',
                },
                contrasena: {
                    bsonType: 'string',
                    description: 'Contrasena de la cuenta del proveedor',
                    pattern: '^[A-Za-z0-9.]{8,255}$'
                },
                direccion: {
                    bsonType: 'object',
                    description: 'Dirección física del proveedor, que puede ser útil para envíos',
                    properties: {
                        calle: {
                            bsonType: 'string',
                            description: 'calle y numero de casa del proveedor',
                        },
                        colonia: {
                            bsonType: 'string',
                            description: 'colonia del proveedor',
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
                    },
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
