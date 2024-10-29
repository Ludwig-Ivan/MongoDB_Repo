use('Furniview');

db.createCollection('Pagos', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            title: 'Validacion de objecto pagos',
            required: ['monto_total', 'metodo', 'estado', 'referencia_pago', 'carrito'],
            properties: {
                monto_total: {
                    bsonType: 'double',
                    description: 'Indica la cantidad total a pagar incluyendo ofertas, envio de los productos',
                },
                fecha_pago: {
                    bsonType: 'date',
                    description: 'Indica la fecha en la que se realizo el pago',
                },
                metodo: {
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
                    enum: ['OXXO', 'PayPal', 'Aurrera'],
                    description: 'Indica que proveedor se utilizo para realizar el pago',
                },
                carrito: {
                    bsonType: 'objectId',
                    description: 'Referencia al carrito correspondiente al que se le retribuira el pago',
                },
            },
        },
    },
});