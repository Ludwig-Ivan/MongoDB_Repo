use('Furniview');
//? Esquema de Validacion Listo
db.createCollection('Carrito', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            title: 'Validacion para el objeto carrito',
            required: ['_id', 'fecha_creacion', 'estado', 'id_usuario', 'carrito_producto', 'total'],
            properties: {
                _id: {
                    bsonType: 'int'
                },
                fecha_creacion: {
                    bsonType: 'date',
                    description: 'Indica la fecha en la que se creo el carrito',
                },
                estado: {
                    enum: ['Activo', 'Pendiente', 'Completado'],
                    description: 'Indica el estado del actual carrito',
                },
                total: {
                    oneOf: [{ bsonType: 'double' }, { bsonType: 'int' }],
                    description: 'Indica el total de todos los productos del carrito',
                    minimum: 0,
                },
                id_usuario: {
                    bsonType: 'int',
                    description: 'Referencia al usuario que le pertenece el carrito',
                },
                carrito_producto: {
                    bsonType: 'array',
                    description: 'Array de la lista de productos del carrito correspondiente',
                    minItems: 1,
                    items: {
                        bsonType: 'object',
                        required: ['id_producto', 'cantidad', 'subtotal'],
                        properties: {
                            id_producto: {
                                bsonType: 'int',
                                description: 'Referencia al producto que se agrego al carrito',
                            },
                            cantidad: {
                                bsonType: 'int',
                                description: 'Indica la cantidad de productos en el carrito',
                                minimum: 1
                            },
                            subtotal: {
                                oneOf: [{ bsonType: 'double' }, { bsonType: 'int' }],
                                description: 'Indica el subtotal generado del producto en el carrito',
                                minimum: 0
                            },
                        }
                    },
                    uniqueItems: true,
                },
            },
            additionalProperties: false,
        }
    }
});