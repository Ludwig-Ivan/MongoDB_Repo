use('Furniview');

db.createCollection('Carrito', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            title: 'Validacion para el objeto carrito',
            required: ['fecha_creacion', 'estado', 'id_usuario', 'carrito_producto', 'total'],
            properties: {
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
                },
                usuario: {
                    bsonType: 'objectId',
                    description: 'Referencia al usuario que le pertenece el carrito',
                },
                carrito_producto: {
                    bsonType: 'array',
                    description: 'Array de la lista de productos del carrito correspondiente',
                    minItems: 1,
                    items: {
                        bsonType: 'object',
                        required: ['producto', 'cantidad', 'subtotal'],
                        properties: {
                            producto: {
                                bsonType: 'objectId',
                                description: 'Referencia al producto que se agrego al carrito',
                            },
                            cantidad: {
                                bsonType: 'int',
                                description: 'Indica la cantidad de productos en el carrito',
                            },
                            subtotal: {
                                oneOf: [{ bsonType: 'double' }, { bsonType: 'int' }],
                                description: 'Indica el subtotal generado del producto en el carrito'
                            },
                        }
                    },
                    uniqueItems: true,
                },
            },
        }
    }
});