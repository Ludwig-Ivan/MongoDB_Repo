use('Furniview');

db.Envios.insertMany([
    {
        fecha_envio: new Date(),
        fecha_entrega: null,
        estado: 'En transito',
        metodo: 'Estandar',
        costo: 100.00,
        numero_seguimiento: '19828737219873',
        peso: 150.45,
        dimensiones: '15m x 12m x 12m',
        intentos_entrega: 0,
        fecha_cancelacion: null,
        compania_transporte: 'Estafeta',
        carrito: ObjectId(),
        locacion: ObjectId(),
    },
])