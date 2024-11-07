use('Furniview');
//? Esquema de Validacion Listo
db.createCollection('Tickets_Soporte', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            title: 'Validacion de objeto tickets soporte',
            required: ['_id', 'fecha_creacion', 'estado', 'asunto', 'medio_contacto', 'categoria'],
            properties: {
                _id: {
                    bsonType: 'objectId',
                    description: 'Identificador unico de los tickets',
                },
                fecha_creacion: {
                    bsonType: 'date',
                    description: 'Fecha de creacion del ticket',
                },
                estado: {
                    enum: ['Abierto', 'Cerrado', 'En Proceso', 'Cancelado'],
                    description: 'Estado actual del ticket del usuario',
                },
                prioridad: {
                    enum: ['Baja', 'Media', 'Alta'],
                    description: 'Indica la prioridad del ticket',
                },
                asunto: {
                    bsonType: 'string',
                    description: 'Describe la razon del ticket',
                },
                descripcion: {
                    bsonType: 'string',
                    description: 'Describe mas a detalle la razon del ticket',
                },
                fecha_resolucion: {
                    oneOf: [{ bsonType: 'date' }, { bsonType: 'null' }],
                    description: 'Fecha y hora a la que se resolvio el ticket',
                },
                comentarios: {
                    bsonType: 'string',
                    description: 'Comentarios sobre ticket',
                },
                adjuntos: {
                    bsonType: 'array',
                    description: 'Links URL de informacion adjunta para tratamiento del ticket',
                    items: {
                        bsonType: 'string',
                    },
                    uniqueItems: true,
                },
                medio_contacto: {
                    bsonType: 'string',
                    description: 'Forma en la que se trato el ticket',
                },
                calificacion: {
                    bsonType: 'int',
                    description: 'Valoracion de la atencion al ticket',
                },
                categoria: {
                    bsonType: 'array',
                    description: 'Referencia a que categoria pertenece cada ticket',
                    minItems: 1,
                    items: {
                        bsonType: 'objectId',
                    },
                    uniqueItems: true,
                },
                id_usuario: {
                    bsonType: 'objectId',
                    description: 'Referencia a quien le pertenece cada uno de los tickets'
                },
            },
            additionalProperties: false,
        }
    }
})