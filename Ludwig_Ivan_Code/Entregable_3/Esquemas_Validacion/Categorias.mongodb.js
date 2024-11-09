use('Furniview');
//? Esquema de validacion Listo
db.createCollection('Categorias', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            title: 'Validacion de objeto categorias',
            required: ['_id', 'nombre', 'estado', 'fecha_creacion', 'imagen_url'],
            properties: {
                _id: {
                    bsonType: 'int'
                },
                nombre: {
                    bsonType: 'string',
                    description: 'Nombre de la categoria',
                },
                descripcion: {
                    bsonType: 'string',
                    description: 'Descripcion de la categoria',
                },
                estado: {
                    bsonType: 'bool',
                    description: 'Indica si la categoria esta activa/inactiva',
                },
                fecha_creacion: {
                    bsonType: 'date',
                    description: 'Indica la fecha en la que se creo la categoria',
                },
                imagen_url: {
                    oneOf: [{ bsonType: 'string' }, { bsonType: 'null' }],
                    description: 'Link url de la imagen de la categoria correspondiente',
                },
                id_categoria_padre: {
                    oneOf: [{ bsonType: 'int' }, { bsonType: 'null' }],
                    description: 'Referenciada para categorias hijo.',
                },
            },
            additionalProperties: false,
        }
    }
})

db.Categorias.createIndex(
    { nombre: 1 },
    { unique: true },
);