use('Furniview');

db.createCollection('Proveedores', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            title: 'Validacion de objeto proveedor',
            required: ['_id', 'nombre', 'contacto_nombre', 'email', 'contrasena', 'tipo'],
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
