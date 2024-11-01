use('Furniview');

db.Envios.insertMany([
    {
        fecha_envio: new Date(),
        fecha_entrega: null,
        estado: 'En transito',
        metodo: 'Estandar',
        costo: 200.00,
        numero_seguimiento: Math.floor(Math.random() * 1e15).toString(),
        peso: 150.45,
        dimensiones: '15m x 12m x 12m',
        intentos_entrega: 0,
        fecha_cancelacion: null,
        compania_transporte: 'Estafeta',
        carrito: ObjectId(),
        locacion: ObjectId(),
    },
    {
        fecha_envio: new Date(),
        fecha_entrega: null,
        estado: 'Entregado',
        metodo: 'Expreso',
        costo: 100.00,
        numero_seguimiento: Math.floor(Math.random() * 1e15).toString(),
        peso: 150.45,
        dimensiones: '15m x 12m x 12m',
        intentos_entrega: 0,
        fecha_cancelacion: null,
        compania_transporte: 'Estafeta',
        carrito: ObjectId(),
        locacion: ObjectId(),
    },
    {
        fecha_envio: new Date(),
        fecha_entrega: null,
        estado: 'Pendiente',
        metodo: 'En tienda',
        costo: 100.00,
        numero_seguimiento: Math.floor(Math.random() * 1e15).toString(),
        peso: 150.45,
        dimensiones: '15m x 12m x 12m',
        intentos_entrega: 0,
        fecha_cancelacion: null,
        compania_transporte: 'Estafeta',
        carrito: ObjectId(),
        locacion: ObjectId(),
    },
    {
        fecha_envio: new Date(),
        fecha_entrega: null,
        estado: 'Entregado',
        metodo: 'Estandar',
        costo: 100.00,
        numero_seguimiento: Math.floor(Math.random() * 1e15).toString(),
        peso: 150.45,
        dimensiones: '15m x 12m x 12m',
        intentos_entrega: 0,
        fecha_cancelacion: null,
        compania_transporte: 'Estafeta',
        carrito: ObjectId(),
        locacion: ObjectId(),
    },
    {
        fecha_envio: new Date(),
        fecha_entrega: null,
        estado: 'Pendiente',
        metodo: 'En tienda',
        costo: 100.00,
        numero_seguimiento: Math.floor(Math.random() * 1e15).toString(),
        peso: 150.45,
        dimensiones: '15m x 12m x 12m',
        intentos_entrega: 0,
        fecha_cancelacion: null,
        compania_transporte: 'Estafeta',
        carrito: ObjectId(),
        locacion: ObjectId(),
    },
    {
        fecha_envio: new Date(),
        fecha_entrega: null,
        estado: 'Entregado',
        metodo: 'Expreso',
        costo: 100.00,
        numero_seguimiento: Math.floor(Math.random() * 1e15).toString(),
        peso: 150.45,
        dimensiones: '15m x 12m x 12m',
        intentos_entrega: 0,
        fecha_cancelacion: null,
        compania_transporte: 'Estafeta',
        carrito: ObjectId(),
        locacion: ObjectId(),
    },
    {
        fecha_envio: new Date(),
        fecha_entrega: null,
        estado: 'En transito',
        metodo: 'Estandar',
        costo: 100.00,
        numero_seguimiento: Math.floor(Math.random() * 1e15).toString(),
        peso: 150.45,
        dimensiones: '15m x 12m x 12m',
        intentos_entrega: 0,
        fecha_cancelacion: null,
        compania_transporte: 'Estafeta',
        carrito: ObjectId(),
        locacion: ObjectId(),
    },
    {
        fecha_envio: new Date(),
        fecha_entrega: null,
        estado: 'En transito',
        metodo: 'Estandar',
        costo: 100.00,
        numero_seguimiento: Math.floor(Math.random() * 1e15).toString(),
        peso: 150.45,
        dimensiones: '15m x 12m x 12m',
        intentos_entrega: 0,
        fecha_cancelacion: null,
        compania_transporte: 'Estafeta',
        carrito: ObjectId(),
        locacion: ObjectId(),
    },
    {
        fecha_envio: new Date(),
        fecha_entrega: null,
        estado: 'En transito',
        metodo: 'Estandar',
        costo: 100.00,
        numero_seguimiento: Math.floor(Math.random() * 1e15).toString(),
        peso: 150.45,
        dimensiones: '15m x 12m x 12m',
        intentos_entrega: 0,
        fecha_cancelacion: null,
        compania_transporte: 'Estafeta',
        carrito: ObjectId(),
        locacion: ObjectId(),
    },
    {
        fecha_envio: new Date(),
        fecha_entrega: null,
        estado: 'En transito',
        metodo: 'Estandar',
        costo: 100.00,
        numero_seguimiento: Math.floor(Math.random() * 1e15).toString(),
        peso: 150.45,
        dimensiones: '15m x 12m x 12m',
        intentos_entrega: 0,
        fecha_cancelacion: null,
        compania_transporte: 'Estafeta',
        carrito: ObjectId(),
        locacion: ObjectId(),
    },
    {
        fecha_envio: new Date(),
        fecha_entrega: null,
        estado: 'En transito',
        metodo: 'Estandar',
        costo: 200.00,
        numero_seguimiento: Math.floor(Math.random() * 1e15).toString(),
        peso: 150.45,
        dimensiones: '15m x 12m x 12m',
        intentos_entrega: 0,
        fecha_cancelacion: null,
        compania_transporte: 'Estafeta',
        carrito: ObjectId(),
        locacion: ObjectId(),
    },
    {
        fecha_envio: new Date(),
        fecha_entrega: null,
        estado: 'Entregado',
        metodo: 'Expreso',
        costo: 100.00,
        numero_seguimiento: Math.floor(Math.random() * 1e15).toString(),
        peso: 150.45,
        dimensiones: '15m x 12m x 12m',
        intentos_entrega: 0,
        fecha_cancelacion: null,
        compania_transporte: 'Estafeta',
        carrito: ObjectId(),
        locacion: ObjectId(),
    },
    {
        fecha_envio: new Date(),
        fecha_entrega: null,
        estado: 'Pendiente',
        metodo: 'En tienda',
        costo: 100.00,
        numero_seguimiento: Math.floor(Math.random() * 1e15).toString(),
        peso: 150.45,
        dimensiones: '15m x 12m x 12m',
        intentos_entrega: 0,
        fecha_cancelacion: null,
        compania_transporte: 'Estafeta',
        carrito: ObjectId(),
        locacion: ObjectId(),
    },
    {
        fecha_envio: new Date(),
        fecha_entrega: null,
        estado: 'Entregado',
        metodo: 'Estandar',
        costo: 100.00,
        numero_seguimiento: Math.floor(Math.random() * 1e15).toString(),
        peso: 150.45,
        dimensiones: '15m x 12m x 12m',
        intentos_entrega: 0,
        fecha_cancelacion: null,
        compania_transporte: 'Estafeta',
        carrito: ObjectId(),
        locacion: ObjectId(),
    },
    {
        fecha_envio: new Date(),
        fecha_entrega: null,
        estado: 'Pendiente',
        metodo: 'En tienda',
        costo: 100.00,
        numero_seguimiento: Math.floor(Math.random() * 1e15).toString(),
        peso: 150.45,
        dimensiones: '15m x 12m x 12m',
        intentos_entrega: 0,
        fecha_cancelacion: null,
        compania_transporte: 'Estafeta',
        carrito: ObjectId(),
        locacion: ObjectId(),
    },
    {
        fecha_envio: new Date(),
        fecha_entrega: null,
        estado: 'Entregado',
        metodo: 'Expreso',
        costo: 100.00,
        numero_seguimiento: Math.floor(Math.random() * 1e15).toString(),
        peso: 150.45,
        dimensiones: '15m x 12m x 12m',
        intentos_entrega: 0,
        fecha_cancelacion: null,
        compania_transporte: 'Estafeta',
        carrito: ObjectId(),
        locacion: ObjectId(),
    },
    {
        fecha_envio: new Date(),
        fecha_entrega: null,
        estado: 'En transito',
        metodo: 'Estandar',
        costo: 100.00,
        numero_seguimiento: Math.floor(Math.random() * 1e15).toString(),
        peso: 150.45,
        dimensiones: '15m x 12m x 12m',
        intentos_entrega: 0,
        fecha_cancelacion: null,
        compania_transporte: 'Estafeta',
        carrito: ObjectId(),
        locacion: ObjectId(),
    },
    {
        fecha_envio: new Date(),
        fecha_entrega: null,
        estado: 'En transito',
        metodo: 'Estandar',
        costo: 100.00,
        numero_seguimiento: Math.floor(Math.random() * 1e15).toString(),
        peso: 150.45,
        dimensiones: '15m x 12m x 12m',
        intentos_entrega: 0,
        fecha_cancelacion: null,
        compania_transporte: 'Estafeta',
        carrito: ObjectId(),
        locacion: ObjectId(),
    },
    {
        fecha_envio: new Date(),
        fecha_entrega: null,
        estado: 'En transito',
        metodo: 'Estandar',
        costo: 100.00,
        numero_seguimiento: Math.floor(Math.random() * 1e15).toString(),
        peso: 150.45,
        dimensiones: '15m x 12m x 12m',
        intentos_entrega: 0,
        fecha_cancelacion: null,
        compania_transporte: 'Estafeta',
        carrito: ObjectId(),
        locacion: ObjectId(),
    },
    {
        fecha_envio: new Date(),
        fecha_entrega: null,
        estado: 'En transito',
        metodo: 'Estandar',
        costo: 100.00,
        numero_seguimiento: Math.floor(Math.random() * 1e15).toString(),
        peso: 150.45,
        dimensiones: '15m x 12m x 12m',
        intentos_entrega: 0,
        fecha_cancelacion: null,
        compania_transporte: 'Estafeta',
        carrito: ObjectId(),
        locacion: ObjectId(),
    },
])