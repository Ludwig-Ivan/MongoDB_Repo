use('Furniview');

db.createCollection('Favoritos', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            title: 'Validacion objecto favoritos',
            required: ['fecha_agregacion', 'usuario', 'producto'],
            properties: {
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
        },
    },
});