use('Furniview');

db.createCollection('Resenas', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            title: 'Validacion para el objeto resenas',
            required: ['calificacion', 'usuario', 'producto'],
            properties: {
                _id: {
                    bsonType: 'objectId',
                },
                calificacion: {
                    bsonType: 'int',
                    description: 'Indica el puntaje de 1 a 5 del usuario acerca del producto',
                },
                comentario: {
                    bsonType: 'string',
                    description: 'Muestra un mensaje opcional del usuario acerca del producto',
                },
                usuario:
                {
                    bsonType: 'objectId',
                    description: 'Id del usuario referenciado'
                },
                producto:
                {
                    bsonType: 'objectId',
                    description: 'Id del producto referenciado'
                }
            },
            additionalProperties: false,
        }
    }
});