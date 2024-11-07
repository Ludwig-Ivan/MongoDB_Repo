use('Furniview');
//? Esquema de Validacion Listo
db.createCollection('Categoria_Tickets', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            title: 'Validacion para el objeto categorias_tickets',
            required: ['_id', 'tipo', 'descripcion'],
            properties: {
                _id: {
                    bsonType: 'objectId',
                },
                tipo: {
                    bsonType: 'string',
                },
                descripcion: {
                    bsonType: 'string'
                }
            },
            additionalProperties: false,
        }
    }
});