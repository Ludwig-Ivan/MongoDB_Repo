use('Furniview');
//? Esquema de validacion correcto
db.createCollection('Devoluciones', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            title: 'Validacion para el objeto devoluciones',
            required: ['_id', 'fecha', 'motivo', 'total', 'id_usuario', 'id_carrito', 'devoluciones_carrito'],
            properties: {
                _id: {
                    bsonType: 'int',
                },
                fecha: {
                    bsonType: 'date',
                    description: 'Fecha de la devolucion',
                },
                motivo: {
                    bsonType: 'string',
                    description: 'Motivo por la devolucion'
                },
                estado: {
                    enum: ['Pendiente', 'Aprobada', 'Completada']
                },
                total: {
                    oneOf: [{ bsonType: 'double' }, { bsonType: 'int' }],
                    description: 'Valor del producto devuelto',
                    minimum: 0
                },
                id_usuario: {
                    bsonType: 'int',
                    description: 'Id del usuario que devuelve el producto'
                },
                id_carrito: {
                    bsonType: 'int',
                    description: 'Id del carrito del cual fue pedido el producto'
                },
                devoluciones_carrito: {
                    bsonType: 'array',
                    description: 'Array de la lista de productos devuelto por carrito',
                    minItems: 1,
                    items: {
                        bsonType: 'object',
                        required: ['id_producto', 'cantidad', 'subtotal'],
                        properties: {
                            id_producto: {
                                bsonType: 'int',
                                description: 'Referencia al producto que se devolvio del carrito',
                            },
                            cantidad: {
                                bsonType: 'int',
                                description: 'Indica la cantidad de productos devueltos del carrito',
                                minimum: 0
                            },
                            subtotal: {
                                oneOf: [{ bsonType: 'double' }, { bsonType: 'int' }],
                                description: 'Indica el subtotal generado de los productos devueltos del carrito',
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