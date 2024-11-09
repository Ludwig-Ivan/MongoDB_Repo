use('Furniview');
//? Esquema de Validacion Listo
db.createCollection('Tickets_Soporte', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            title: 'Validacion de objeto tickets soporte',
            required: ['_id', 'fecha_creacion', 'estado', 'asunto', 'medio_contacto', 'id_categoria_ticket'],
            properties: {
                _id: {
                    bsonType: 'int',
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
                resolucion: {
                    bsonType: 'string'
                },
                fecha_actualizacion: {
                    bsonType: 'date'
                },
                comentarios: {
                    bsonType: 'string',
                    description: 'Comentarios sobre ticket',
                },
                adjuntos: {
                    bsonType: 'string',
                },
                medio_contacto: {
                    bsonType: 'string',
                    description: 'Forma en la que se trato el ticket',
                },
                calificacion: {
                    bsonType: 'int',
                    description: 'Valoracion de la atencion al ticket',
                    minimum: 0,
                },
                id_categoria_ticket: {
                    bsonType: 'int',
                    description: 'Referencia a que categoria pertenece cada ticket',
                },
                id_usuario: {
                    bsonType: 'int',
                    description: 'Referencia a quien le pertenece cada uno de los tickets'
                },
            },
            additionalProperties: false,
        }
    }
})