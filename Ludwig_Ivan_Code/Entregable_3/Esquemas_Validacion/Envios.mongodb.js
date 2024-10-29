use('Furniview');

db.createCollection('Envios', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            title: 'Validacion del objecto envio',
            required: [''],
            properties: {
                fecha_envio: {
                    bsonType: 'date',
                    description: 'Indica la fecha que se registra el envio',
                },
                fecha_entrega: {
                    bsonType: 'date',
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
                    bsonType: 'double',
                    description: 'Indica el costo del envio',
                },
                numero_seguimiento: {
                    bsonType: 'string',
                    description: 'Referencia de la empaquetadora para rastreo del envio',
                },
                peso: {
                    bsonType: 'double',
                    description: 'Indica el peso de todo el paquete',
                },
                dimensiones: {
                    bsonType: 'string',
                    description: 'Indica las dimenciones del paquete (Largo, Ancho, Alto)',
                },
                intentos_entrega: {
                    bsonType: 'int',
                    description: 'Indica la cantidad de veces que se intento entregar el paquete',
                },
                fecha_cancelacion: {
                    bsonType: 'date',
                    description: 'Indica la fecha en la que se cancelo el envio',
                },
                compania_transporte: {
                    bsonType: 'string',
                    description: 'Indica la compania encargada del transporte',
                },
                carrito: {
                    bsonType: 'objectId',
                    description: 'Referencia que lista de productos va a ser utilizada para el envio',
                },
                locacion: {
                    bsonType: 'objectId',
                    description: 'Clave foranea que referencia a la locacion de entrega',
                },
            },
        },
    },
})