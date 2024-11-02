use('Furniview');

db.createCollection('Productos', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            title: 'Validacion para el objeto productos',
            required: ['nombre', 'precio', 'imagenURL', 'categorias', 'provedor'],
            properties: {
                nombre: {
                    bsonType: 'string',
                    description: 'Indica el nombre de un producto',
                },
                descripcion: {
                    bsonType: 'string',
                    description: 'Muestra la descripcion acerca de un producto',
                },
                precio:
                {
                    oneOf: [{ bsonType: 'double' }, { bsonType: 'int' }],
                    description: 'Precio del producto'
                },
                stock:
                {
                    bsonType: 'int',
                    description: 'Cantidad de producto que hay en existencia'
                },
                estado:
                {
                    bsonType: 'string'
                },
                fecha_de_creacion:
                {
                    oneOf: [{bsonType: 'date'},{bsonType: 'null'}],
                    description: 'Fecha de creacion de la publicacion'
                },
                fecha_de_actualizacion:
                {
                    oneOf: [{bsonType: 'date'},{bsonType: 'null'}],
                    description: 'Fecha de actualizacion de la publicacion'
                },
                imagenURL: {
                    bsonType: 'string',
                    description: 'URL de la imagen del producto'
                },
                peso: {
                    bsonType: 'int',
                    description: 'Peso en kilogramos del producto'
                },
                dimensiones: {
                    bsonType: 'string',
                    description: 'Ancho x Largo x Alto del producto en metros'
                },
                valoracion_promedio: {
                    oneOf: [{ bsonType: 'double' }, { bsonType: 'int' }],
                    description: 'Promedio de valoracion del producto'
                },
                cantidad_valoraciones: {
                    bsonType: 'string',
                    description: 'Cantidad de resenas publicadas del producto'
                },
                tags: {
                    bsonType: 'string',
                    description: 'Etiquetas asociadas al producto'
                },
                categorias: {
                    bsonType: 'array',
                    description: 'Id de las categorias en las que entra el producto',
                    minItems: 1,
                    items: {
                        bsonType: 'objectId',
                    },
                    uniqueItems: true,
                },
                proveedor: {
                    bsonType: 'objectId',
                    description: 'Id del proveedor del producto'
                }
            },
        }
    }
});