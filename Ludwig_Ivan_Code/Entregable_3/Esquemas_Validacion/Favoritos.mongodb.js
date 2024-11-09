use('Furniview');
//? Esquema de Validacion Listo
db.createCollection('Favoritos', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            title: 'Validacion objecto favoritos',
            required: ['_id', 'fecha_agregacion', 'id_usuario', 'id_producto'],
            properties: {
                _id: {
                    bsonType: 'int',
                },
                fecha_agregacion: {
                    bsonType: 'date',
                    description: 'Fecha en la que se agrego a la lista de favoritos',
                },
                id_usuario: {
                    bsonType: 'int',
                    description: 'Referencia al usuario que agrego este producto favorito',
                },
                id_producto: {
                    bsonType: 'int',
                    description: 'Referencia al producto agregado a la lista de favoritos',
                },
            },
            additionalProperties: false,
        },
    },
});