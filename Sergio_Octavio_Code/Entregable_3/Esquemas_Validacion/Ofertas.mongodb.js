use('Furniview');

db.createCollection('Ofertas', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            title: 'Validacion para el objeto ofertas',
            required: ['valor', 'codigo_promocional', 'limite_de_uso', 'productos', 'categorias', 'usuarios', 'proveedores'],
            properties: {
                nombre: {
                    bsonType: 'string',
                    description: 'Nombre de la oferta',
                },
                descripcion: {
                    bsonType: 'string',
                    description: 'Descripcion de la oferta'
                },
                tipo: {
                    bsonType: 'string',
                    description: 'Tipo de oferta'
                },
                valor: {
                    bsonType: 'double',
                    description: 'Porcentaje (en decimales) de la oferta'
                },
                fecha_inicio:
                {
                    oneOf: [{bsonType: 'date'},{bsonType: 'null'}],
                    description: 'Fecha de inicio de la oferta'
                },
                fecha_fin:
                {
                    oneOf: [{bsonType: 'date'},{bsonType: 'null'}],
                    description: 'Fecha de finalizacion de la oferta'
                },
                estado: {
                    bsonType: 'string'
                },
                codigo_promocional:
                {
                    bsonType: 'string',
                    description: 'codigo promocional del producto para su activacion'
                },
                condiciones_aplicacion: {
                    bsonType: 'string',
                    description: 'Condiciones a cumplir para la aplicacion del descuento'
                },
                limite_de_uso: {
                    bsonType: 'int',
                    description: 'Veces que puede ser utilizado'
                },
                usos_actuales: {
                    bsonType: 'int',
                    description: 'Veces usado el codigo'
                },
                productos: {
                    bsonType: 'array',
                    description: 'Id de los productos aplicables',
                    minItems: 1,
                    items: {
                        bsonType: 'objectId',
                    },
                    uniqueItems: true,
                },
                categorias: {
                    bsonType: 'array',
                    description: 'Id de las categorias a las que son aplicables',
                    minItems: 1,
                    items: {
                        bsonType: 'objectId',
                    },
                    uniqueItems: true,
                },
                usuarios: {
                    bsonType: 'array',
                    description: 'Id de los usuarios',
                    items: {
                        bsonType: 'objectId',
                    },
                    uniqueItems: true,
                },
                proveedores: {
                    bsonType: 'objectId',
                    description: 'Id de las categorias a las que son aplicables',
                },
            },
        }
    }
});