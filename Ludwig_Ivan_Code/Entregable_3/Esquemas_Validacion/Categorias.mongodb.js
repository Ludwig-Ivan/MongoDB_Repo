use('Furniview');

db.createCollection('Categorias', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            title: 'Validacion de objeto categorias',
            required: ['nombre', 'estado', 'fecha_creacion', 'imagen_url'],
            properties: {
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
                    bsonType: 'string',
                    description: 'Link url de la imagen de la categoria correspondiente',
                },
                id_categoria_padre: {
                    bsonType: 'objectId',
                    description: 'Clave foranea auto referenciada para categorias hijo.',
                },
            }
        }
    }
})

db.Categoria.createIndex(
    { nombre: 1 },
    { unique: true },
);