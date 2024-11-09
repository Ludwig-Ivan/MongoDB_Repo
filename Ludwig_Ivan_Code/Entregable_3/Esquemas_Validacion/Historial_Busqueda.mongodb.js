use('Furniview');
//? Esquema de Validacion Listo
db.createCollection('Historial_Busqueda', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            title: 'Validacion del objecto historial busqueda',
            required: ['_id', 'fecha_busqueda', 'cantidad_resultados', 'terminos', 'id_usuario'],
            properties: {
                _id: {
                    bsonType: 'int',
                },
                fecha_busqueda: {
                    bsonType: 'date',
                    description: 'Fecha de Busqueda en base a los terminos correspondientes',
                },
                cantidad_resultados: {
                    bsonType: 'int',
                    description: 'Cantidad de resultados obtenidos en base a los terminos usados',
                    minimum: 0
                },
                terminos: {
                    bsonType: 'string',
                    description: 'Terminos aplicados para la busqueda',
                },
                id_usuario: {
                    bsonType: 'int',
                    description: 'Referencia al usuario que hizo una busqueda',
                },
                id_producto: {
                    bsonType: 'int',
                    description: 'Referencia al producto que fue seleccionado',
                },
            },
            additionalProperties: false,
        },
    },
});