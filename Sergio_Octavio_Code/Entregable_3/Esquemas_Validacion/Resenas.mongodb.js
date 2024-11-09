use('Furniview');
//? Esquema de validacion correcto
db.createCollection('Resenas', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            title: 'Validacion para el objeto resenas',
            required: ['_id', 'calificacion', 'id_usuario', 'id_producto'],
            properties: {
                _id: {
                    bsonType: 'int',
                },
                calificacion: {
                    bsonType: 'int',
                    description: 'Indica el puntaje de 0 a 5 del usuario acerca del producto',
                    minimum: 0,
                    maximum: 5,
                },
                comentario: {
                    bsonType: 'string',
                    description: 'Muestra un mensaje opcional del usuario acerca del producto',
                },
                id_usuario:
                {
                    bsonType: 'int',
                    description: 'Id del usuario referenciado'
                },
                id_producto:
                {
                    bsonType: 'int',
                    description: 'Id del producto referenciado'
                }
            },
            additionalProperties: false,
        }
    }
});