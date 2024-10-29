use('Furniview');

db.createCollection('Historial_Busqueda', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            title: 'Validacion del objecto historial busqueda',
            required: ['fecha_busqueda', 'cantidad_resultados', 'terminos', 'usuario'],
            properties: {
                fecha_busqueda: {
                    bsonType: 'date',
                    description: 'Fecha de Busqueda en base a los terminos correspondientes',
                },
                cantidad_resultados: {
                    bsonType: 'int',
                    description: 'Cantidad de resultados obtenidos en base a los terminos usados'
                },
                terminos: {
                    bsonType: 'string',
                    description: 'Terminos aplicados para la busqueda',
                },
                usuario: {
                    bsonType: 'objectId',
                    description: 'Referencia al usuario que hizo una busqueda',
                },
                producto: {
                    bsonType: 'objectId',
                    description: 'Clave foranea que referencia al producto que fue seleccionado',
                },
            },
        },
    },
});