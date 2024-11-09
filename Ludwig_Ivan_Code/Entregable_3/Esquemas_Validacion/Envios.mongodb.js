use('Furniview');
//? Esquema de Validacion Listo
db.createCollection('Envios', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            title: 'Validacion del objecto envio',
            required: ['_id', 'fecha_envio', 'estado', 'metodo', 'costo', 'numero_seguimiento', 'compania_transporte', 'id_carrito', 'id_locacion'],
            properties: {
                _id: {
                    bsonType: 'int',
                },
                fecha_envio: {
                    bsonType: 'date',
                    description: 'Indica la fecha que se registra el envio',
                },
                fecha_entrega: {
                    oneOf: [{ bsonType: 'date' }, { bsonType: 'null' }],
                    description: 'Indica la fecha en la que se entregara el envio',
                },
                estado: {
                    enum: ['En transito', 'Entregado', 'Pendiente'],
                    description: 'Indica el estado en el que se encuentra el envio',
                },
                metodo: {
                    enum: ['Estandar', 'Expreso', 'En tienda'],
                    description: 'Indica el metodo en que se realizara el envio',
                },
                costo: {
                    oneOf: [{ bsonType: 'double' }, { bsonType: 'int' }],
                    description: 'Indica el costo del envio',
                    minimum: 0
                },
                numero_seguimiento: {
                    bsonType: 'string',
                    description: 'Referencia de la empaquetadora para rastreo del envio',
                },
                peso: {
                    oneOf: [{ bsonType: 'double' }, { bsonType: 'int' }],
                    description: 'Indica el peso de todo el paquete',
                    minimum: 0
                },
                dimensiones: {
                    bsonType: 'string',
                    description: 'Indica las dimenciones del paquete (Largo, Ancho, Alto)',
                },
                intento_entrega: {
                    bsonType: 'int',
                    description: 'Indica la cantidad de veces que se intento entregar el paquete',
                    minimum: 0
                },
                fecha_cancelacion: {
                    oneOf: [{ bsonType: 'date' }, { bsonType: 'null' }],
                    description: 'Indica la fecha en la que se cancelo el envio',
                },
                compania_transporte: {
                    bsonType: 'string',
                    description: 'Indica la compania encargada del transporte',
                },
                id_carrito: {
                    bsonType: 'int',
                    description: 'Referencia que lista de productos va a ser utilizada para el envio',
                },
                id_locacion: {
                    bsonType: 'int',
                    description: 'Referencia a la locacion de entrega',
                },
            },
            additionalProperties: false,
        },
    },
})


db.Envios.createIndex(
    { numero_seguimiento: 1 },
    { unique: true },
)