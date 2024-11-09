use('Furniview');
//? Esquema de validacion correcto
db.createCollection('Productos', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            title: 'Validacion para el objeto productos',
            required: ['_id', 'nombre', 'precio', 'imagen_url', 'id_categoria', 'id_proveedor'],
            properties: {
                _id: {
                    bsonType: 'int',
                },
                nombre: {
                    bsonType: 'string',
                    description: 'Indica el nombre de un producto',
                },
                descripcion: {
                    bsonType: 'string',
                    description: 'Muestra la descripcion acerca de un producto',
                },
                precio: {
                    oneOf: [{ bsonType: 'double' }, { bsonType: 'int' }],
                    description: 'Precio del producto',
                    minimum: 0
                },
                stock: {
                    bsonType: 'int',
                    description: 'Cantidad de producto que hay en existencia',
                    minimum: 0
                },
                estado: {
                    enum: ['Activo', 'Inactivo', 'Agotado'],
                },
                fecha_creacion: {
                    oneOf: [{ bsonType: 'date' }, { bsonType: 'null' }],
                    description: 'Fecha de creacion de la publicacion'
                },
                fecha_actualizacion: {
                    oneOf: [{ bsonType: 'date' }, { bsonType: 'null' }],
                    description: 'Fecha de actualizacion de la publicacion'
                },
                imagen_url: {
                    bsonType: 'string',
                    description: 'URL de la imagen del producto'
                },
                peso: {
                    bsonType: 'int',
                    description: 'Peso en kilogramos del producto',
                    minimum: 0
                },
                dimensiones: {
                    bsonType: 'string',
                    description: 'Ancho x Largo x Alto del producto en metros'
                },
                valoracion_promedio: {
                    oneOf: [{ bsonType: 'double' }, { bsonType: 'int' }],
                    description: 'Promedio de valoracion del producto',
                    minimum: 0
                },
                cantidad_valoraciones: {
                    bsonType: 'int',
                    description: 'Cantidad de resenas publicadas del producto',
                    minimum: 0
                },
                tags: {
                    bsonType: 'string',
                    description: 'Etiquetas asociadas al producto'
                },
                id_proveedor: {
                    bsonType: 'int',
                    description: 'Id del proveedor del producto'
                },
                id_categoria: {
                    bsonType: 'int',
                }
            },
            additionalProperties: false,
        }
    }
});