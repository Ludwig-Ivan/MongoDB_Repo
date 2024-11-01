use('Furniview');

db.Carrito.insertMany([
    {
        fecha_creacion: new Date(),
        estado: 'Activo',
        total: 2500.00,
        id_usuario: ObjectId(),
        carrito_producto: [
            {
                producto: ObjectId(),
                cantidad: 2,
                subtotal: 200.00,
            },
            {
                producto: ObjectId(),
                cantidad: 3,
                subtotal: 600.00,
            },
            {
                producto: ObjectId(),
                cantidad: 8,
                subtotal: 800.00,
            },
            {
                producto: ObjectId(),
                cantidad: 1,
                subtotal: 500.00,
            },
            {
                producto: ObjectId(),
                cantidad: 2,
                subtotal: 400.00,
            },
        ],
    },
    {
        fecha_creacion: new Date(),
        estado: 'Pendiente',
        total: 2100.00,
        id_usuario: ObjectId(),
        carrito_producto: [
            {
                producto: ObjectId(),
                cantidad: 2,
                subtotal: 200.00,
            },
            {
                producto: ObjectId(),
                cantidad: 3,
                subtotal: 600.00,
            },
            {
                producto: ObjectId(),
                cantidad: 8,
                subtotal: 800.00,
            },
            {
                producto: ObjectId(),
                cantidad: 1,
                subtotal: 500.00,
            },
        ],
    },
    {
        fecha_creacion: new Date(),
        estado: 'Completado',
        total: 2300.00,
        id_usuario: ObjectId(),
        carrito_producto: [
            {
                producto: ObjectId(),
                cantidad: 3,
                subtotal: 600.00,
            },
            {
                producto: ObjectId(),
                cantidad: 8,
                subtotal: 800.00,
            },
            {
                producto: ObjectId(),
                cantidad: 1,
                subtotal: 500.00,
            },
            {
                producto: ObjectId(),
                cantidad: 2,
                subtotal: 400.00,
            },
        ],
    },
    {
        fecha_creacion: new Date(),
        estado: 'Activo',
        total: 1700.00,
        id_usuario: ObjectId(),
        carrito_producto: [
            {
                producto: ObjectId(),
                cantidad: 2,
                subtotal: 200.00,
            },
            {
                producto: ObjectId(),
                cantidad: 3,
                subtotal: 600.00,
            },
            {
                producto: ObjectId(),
                cantidad: 1,
                subtotal: 500.00,
            },
            {
                producto: ObjectId(),
                cantidad: 2,
                subtotal: 400.00,
            },
        ],
    },
    {
        fecha_creacion: new Date(),
        estado: 'Pendiente',
        total: 1600.00,
        id_usuario: ObjectId(),
        carrito_producto: [
            {
                producto: ObjectId(),
                cantidad: 2,
                subtotal: 200.00,
            },
            {
                producto: ObjectId(),
                cantidad: 3,
                subtotal: 600.00,
            },
            {
                producto: ObjectId(),
                cantidad: 8,
                subtotal: 800.00,
            },
        ],
    },
    {
        fecha_creacion: new Date(),
        estado: 'Activo',
        total: 1700.00,
        id_usuario: ObjectId(),
        carrito_producto: [
            {
                producto: ObjectId(),
                cantidad: 2,
                subtotal: 200.00,
            },
            {
                producto: ObjectId(),
                cantidad: 3,
                subtotal: 600.00,
            },
            {
                producto: ObjectId(),
                cantidad: 8,
                subtotal: 800.00,
            },
        ],
    },
    {
        fecha_creacion: new Date(),
        estado: 'Completado',
        total: 1800.00,
        id_usuario: ObjectId(),
        carrito_producto: [
            {
                producto: ObjectId(),
                cantidad: 2,
                subtotal: 200.00,
            },
            {
                producto: ObjectId(),
                cantidad: 3,
                subtotal: 600.00,
            },
            {
                producto: ObjectId(),
                cantidad: 8,
                subtotal: 800.00,
            },
        ],
    },
    {
        fecha_creacion: new Date(),
        estado: 'Pendiente',
        total: 1900.00,
        id_usuario: ObjectId(),
        carrito_producto: [
            {
                producto: ObjectId(),
                cantidad: 2,
                subtotal: 200.00,
            },
            {
                producto: ObjectId(),
                cantidad: 3,
                subtotal: 600.00,
            },
            {
                producto: ObjectId(),
                cantidad: 8,
                subtotal: 800.00,
            },
        ],
    },
    {
        fecha_creacion: new Date(),
        estado: 'Activo',
        total: 2000.00,
        id_usuario: ObjectId(),
        carrito_producto: [
            {
                producto: ObjectId(),
                cantidad: 2,
                subtotal: 200.00,
            },
            {
                producto: ObjectId(),
                cantidad: 3,
                subtotal: 600.00,
            },
            {
                producto: ObjectId(),
                cantidad: 8,
                subtotal: 800.00,
            },
        ],
    },
    {
        fecha_creacion: new Date(),
        estado: 'Completado',
        total: 2100.00,
        id_usuario: ObjectId(),
        carrito_producto: [
            {
                producto: ObjectId(),
                cantidad: 2,
                subtotal: 200.00,
            },
            {
                producto: ObjectId(),
                cantidad: 3,
                subtotal: 600.00,
            },
            {
                producto: ObjectId(),
                cantidad: 8,
                subtotal: 800.00,
            },
        ],
    },
    {
        fecha_creacion: new Date(),
        estado: 'Pendiente',
        total: 2200.00,
        id_usuario: ObjectId(),
        carrito_producto: [
            {
                producto: ObjectId(),
                cantidad: 2,
                subtotal: 200.00,
            },
            {
                producto: ObjectId(),
                cantidad: 3,
                subtotal: 600.00,
            },
            {
                producto: ObjectId(),
                cantidad: 8,
                subtotal: 800.00,
            },
        ],
    },
    {
        fecha_creacion: new Date(),
        estado: 'Activo',
        total: 2300.00,
        id_usuario: ObjectId(),
        carrito_producto: [
            {
                producto: ObjectId(),
                cantidad: 2,
                subtotal: 200.00,
            },
            {
                producto: ObjectId(),
                cantidad: 3,
                subtotal: 600.00,
            },
            {
                producto: ObjectId(),
                cantidad: 8,
                subtotal: 800.00,
            },
        ],
    },
    {
        fecha_creacion: new Date(),
        estado: 'Completado',
        total: 2400.00,
        id_usuario: ObjectId(),
        carrito_producto: [
            {
                producto: ObjectId(),
                cantidad: 2,
                subtotal: 200.00,
            },
            {
                producto: ObjectId(),
                cantidad: 3,
                subtotal: 600.00,
            },
            {
                producto: ObjectId(),
                cantidad: 8,
                subtotal: 800.00,
            },
        ],
    },
    {
        fecha_creacion: new Date(),
        estado: 'Pendiente',
        total: 2500.00,
        id_usuario: ObjectId(),
        carrito_producto: [
            {
                producto: ObjectId(),
                cantidad: 2,
                subtotal: 200.00,
            },
            {
                producto: ObjectId(),
                cantidad: 3,
                subtotal: 600.00,
            },
            {
                producto: ObjectId(),
                cantidad: 8,
                subtotal: 800.00,
            },
        ],
    },
    {
        fecha_creacion: new Date(),
        estado: 'Activo',
        total: 2600.00,
        id_usuario: ObjectId(),
        carrito_producto: [
            {
                producto: ObjectId(),
                cantidad: 2,
                subtotal: 200.00,
            },
            {
                producto: ObjectId(),
                cantidad: 3,
                subtotal: 600.00,
            },
            {
                producto: ObjectId(),
                cantidad: 8,
                subtotal: 800.00,
            },
        ],
    },
    {
        fecha_creacion: new Date(),
        estado: 'Activo',
        total: 2700.00,
        id_usuario: ObjectId(),
        carrito_producto: [
            {
                producto: ObjectId(),
                cantidad: 2,
                subtotal: 200.00,
            },
            {
                producto: ObjectId(),
                cantidad: 3,
                subtotal: 600.00,
            },
            {
                producto: ObjectId(),
                cantidad: 8,
                subtotal: 800.00,
            },
        ],
    },
    {
        fecha_creacion: new Date(),
        estado: 'Activo',
        total: 2800.00,
        id_usuario: ObjectId(),
        carrito_producto: [
            {
                producto: ObjectId(),
                cantidad: 2,
                subtotal: 200.00,
            },
            {
                producto: ObjectId(),
                cantidad: 3,
                subtotal: 600.00,
            },
            {
                producto: ObjectId(),
                cantidad: 8,
                subtotal: 800.00,
            },
        ],
    },
    {
        fecha_creacion: new Date(),
        estado: 'Activo',
        total: 2900.00,
        id_usuario: ObjectId(),
        carrito_producto: [
            {
                producto: ObjectId(),
                cantidad: 2,
                subtotal: 200.00,
            },
            {
                producto: ObjectId(),
                cantidad: 3,
                subtotal: 600.00,
            },
            {
                producto: ObjectId(),
                cantidad: 8,
                subtotal: 800.00,
            },
        ],
    },
    {
        fecha_creacion: new Date(),
        estado: 'Activo',
        total: 3000.00,
        id_usuario: ObjectId(),
        carrito_producto: [
            {
                producto: ObjectId(),
                cantidad: 2,
                subtotal: 200.00,
            },
            {
                producto: ObjectId(),
                cantidad: 3,
                subtotal: 600.00,
            },
            {
                producto: ObjectId(),
                cantidad: 8,
                subtotal: 800.00,
            },
        ],
    },
    {
        fecha_creacion: new Date(),
        estado: 'Activo',
        total: 3100.00,
        id_usuario: ObjectId(),
        carrito_producto: [
            {
                producto: ObjectId(),
                cantidad: 2,
                subtotal: 200.00,
            },
            {
                producto: ObjectId(),
                cantidad: 3,
                subtotal: 600.00,
            },
            {
                producto: ObjectId(),
                cantidad: 8,
                subtotal: 800.00,
            },
        ],
    },
])