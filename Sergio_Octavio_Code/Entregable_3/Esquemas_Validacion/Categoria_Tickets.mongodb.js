use('Furniview');

db.createCollection('Categoria_tickets', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            title: 'Validacion para el objeto categorias_tickets',
            properties: {
                tipo: {
                    bsonType: 'string',
                },
                descripcion: {
                    bsonType: 'string'
                }
            },
        }
    }
});