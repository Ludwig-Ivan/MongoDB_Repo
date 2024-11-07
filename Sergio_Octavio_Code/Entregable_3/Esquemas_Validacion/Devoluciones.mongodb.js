use('Furniview');
//? Esquema de validacion correcto
db.createCollection('Devoluciones', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            title: 'Validacion para el objeto devoluciones',
            required: ['_id', 'fecha', 'motivo', 'total', 'usuario', 'carrito', 'devolucion'],
            properties: {
                _id: {
                    bsonType: 'objectId',
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
                    bsonType: 'string'
                },
                total: {
                    oneOf: [{ bsonType: 'double' }, { bsonType: 'int' }],
                    description: 'Valor del producto devuelto'
                },
                usuario: {
                    bsonType: 'objectId',
                    description: 'Id del usuario que devuelve el producto'
                },
                carrito: {
                    bsonType: 'objectId',
                    description: 'Id del carrito del cual fue pedido el producto'
                },
                devolucion: {
                    bsonType: 'array',
                    description: 'Array de la lista de productos devuelto por carrito',
                    minItems: 1,
                    items: {
                        bsonType: 'object',
                        required: ['producto', 'cantidad', 'subtotal'],
                        properties: {
                            producto: {
                                bsonType: 'objectId',
                                description: 'Referencia al producto que se devolvio del carrito',
                            },
                            cantidad: {
                                bsonType: 'int',
                                description: 'Indica la cantidad de productos devueltos del carrito',
                            },
                            subtotal: {
                                oneOf: [{ bsonType: 'double' }, { bsonType: 'int' }],
                                description: 'Indica el subtotal generado de los productos devueltos del carrito'
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