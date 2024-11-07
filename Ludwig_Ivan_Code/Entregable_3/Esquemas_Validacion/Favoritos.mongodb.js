use('Furniview');
//? Esquema de Validacion Listo
db.createCollection('Favoritos', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            title: 'Validacion objecto favoritos',
            required: ['_id', 'fecha_agregacion', 'usuario', 'producto'],
            properties: {
                _id: {
                    bsonType: 'objectId',
                },
                fecha_agregacion: {
                    bsonType: 'date',
                    description: 'Fecha en la que se agrego a la lista de favoritos',
                },
                usuario: {
                    bsonType: 'objectId',
                    description: 'Referencia al usuario que agrego este producto favorito',
                },
                producto: {
                    bsonType: 'objectId',
                    description: 'Referencia al producto agregado a la lista de favoritos',
                },
            },
            additionalProperties: false,
        },
    },
});