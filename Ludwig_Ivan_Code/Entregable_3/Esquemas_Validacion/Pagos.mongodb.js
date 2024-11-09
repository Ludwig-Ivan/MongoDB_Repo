use('Furniview');
//? Esquema de Validacion Listo
db.createCollection('Pagos', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            title: 'Validacion de objecto pagos',
            required: ['_id', 'monto_total', 'metodo_pago', 'estado', 'referencia_pago', 'id_carrito'],
            properties: {
                _id: {
                    bsonType: 'int',
                },
                monto_total: {
                    oneOf: [{ bsonType: 'double' }, { bsonType: 'int' }],
                    description: 'Indica la cantidad total a pagar incluyendo ofertas, envio de los productos',
                },
                fecha_pago: {
                    oneOf: [{ bsonType: 'date' }, { bsonType: 'null' }],
                    description: 'Indica la fecha en la que se realizo el pago',
                },
                metodo_pago: {
                    enum: ['Tarjeta de credito', 'Tarjeta de debito', 'Proveedor de pago'],
                    description: 'Indica con que metodo fue realizado el pago',
                },
                estado: {
                    enum: ['Pagado', 'Fallido', 'Pendiente', 'Reembolsado'],
                    description: 'Indica el estado del pago actual',
                },
                referencia_pago: {
                    bsonType: 'string',
                    description: 'Numero de serie para referenciar el pago',
                },
                proveedor_pago: {
                    enum: ['OXXO', 'PayPal', 'Aurrera', ''],
                    description: 'Indica que proveedor se utilizo para realizar el pago',
                },
                id_carrito: {
                    bsonType: 'int',
                    description: 'Referencia al carrito correspondiente al que se le retribuira el pago',
                },
            },
            additionalProperties: false,
        },
    },
});

db.Pagos.createIndex(
    { referencia_pago: 1 },
    { unique: 1 },
);