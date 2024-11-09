use('Furniview');
//? Esquema de validacion correcto
db.createCollection('Ofertas', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            title: 'Validacion para el objeto ofertas',
            required: ['_id', 'nombre', 'descripcion', 'tipo', 'estado', 'valor', 'id_producto', 'id_categoria', 'id_usuario', 'id_proveedor'],
            properties: {
                _id: {
                    bsonType: 'int',
                },
                nombre: {
                    bsonType: 'string',
                    description: 'Nombre de la oferta',
                },
                descripcion: {
                    bsonType: 'string',
                    description: 'Descripcion de la oferta'
                },
                tipo: {
                    enum: ['Porcentual', 'Cantidad fija'],
                    description: 'Tipo de oferta'
                },
                valor: {
                    oneOf: [{ bsonType: 'double' }, { bsonType: 'int' }],
                    description: 'Porcentaje (en decimales) de la oferta',
                    minimum: 0
                },
                fecha_inicio:
                {
                    oneOf: [{ bsonType: 'date' }, { bsonType: 'null' }],
                    description: 'Fecha de inicio de la oferta'
                },
                fecha_fin:
                {
                    oneOf: [{ bsonType: 'date' }, { bsonType: 'null' }],
                    description: 'Fecha de finalizacion de la oferta'
                },
                estado: {
                    enum: ['Activa', 'Expirada', 'Suspendida'],
                    description: 'Indica ele stado en el que se encuentra la oferta'
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
                limite_uso: {
                    bsonType: 'int',
                    description: 'Veces que puede ser utilizado',
                    minimum: 0
                },
                usos_actuales: {
                    bsonType: 'int',
                    description: 'Veces usado el codigo',
                    minimum: 0
                },
                id_producto: {
                    bsonType: 'int',
                },
                id_categoria: {
                    bsonType: 'int',
                },
                id_usuario: {
                    bsonType: 'int',
                },
                id_proveedor: {
                    bsonType: 'int',
                    description: 'Id de las categorias a las que son aplicables',
                },
            },
            additionalProperties: false,
        }
    }
});