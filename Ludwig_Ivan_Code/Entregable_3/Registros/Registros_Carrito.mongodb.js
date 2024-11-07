use('Furniview');
//? Registros Listo
db.Carrito.insertMany([
    {
        _id: ObjectId('000000000000000000000000'),
        fecha_creacion: new Date(),
        estado: 'Activo',
        total: 2500.00,
        usuario: ObjectId('000000000000000000000000'),
        carrito_producto: [
            {
                producto: ObjectId('000000000000000000000000'),
                cantidad: 2,
                subtotal: 200.00,
            },
            {
                producto: ObjectId('000000000000000000000001'),
                cantidad: 3,
                subtotal: 600.00,
            },
            {
                producto: ObjectId('000000000000000000000002'),
                cantidad: 8,
                subtotal: 800.00,
            },
            {
                producto: ObjectId('000000000000000000000003'),
                cantidad: 1,
                subtotal: 500.00,
            },
            {
                producto: ObjectId('000000000000000000000004'),
                cantidad: 2,
                subtotal: 400.00,
            },
        ],
    },
    {
        _id: ObjectId('000000000000000000000001'),
        fecha_creacion: new Date(),
        estado: 'Pendiente',
        total: 2100.00,
        usuario: ObjectId('000000000000000000000001'),
        carrito_producto: [
            {
                producto: ObjectId('000000000000000000000005'),
                cantidad: 2,
                subtotal: 200.00,
            },
            {
                producto: ObjectId('000000000000000000000006'),
                cantidad: 3,
                subtotal: 600.00,
            },
            {
                producto: ObjectId('000000000000000000000007'),
                cantidad: 8,
                subtotal: 800.00,
            },
            {
                producto: ObjectId('000000000000000000000008'),
                cantidad: 1,
                subtotal: 500.00,
            },
        ],
    },
    {
        _id: ObjectId('000000000000000000000002'),
        fecha_creacion: new Date(),
        estado: 'Completado',
        total: 2300.00,
        usuario: ObjectId('000000000000000000000002'),
        carrito_producto: [
            {
                producto: ObjectId('000000000000000000000009'),
                cantidad: 3,
                subtotal: 600.00,
            },
            {
                producto: ObjectId('000000000000000000000010'),
                cantidad: 8,
                subtotal: 800.00,
            },
            {
                producto: ObjectId('000000000000000000000011'),
                cantidad: 1,
                subtotal: 500.00,
            },
            {
                producto: ObjectId('000000000000000000000012'),
                cantidad: 2,
                subtotal: 400.00,
            },
        ],
    },
    {
        _id: ObjectId('000000000000000000000003'),
        fecha_creacion: new Date(),
        estado: 'Activo',
        total: 1700.00,
        usuario: ObjectId('000000000000000000000003'),
        carrito_producto: [
            {
                producto: ObjectId('000000000000000000000013'),
                cantidad: 2,
                subtotal: 200.00,
            },
            {
                producto: ObjectId('000000000000000000000014'),
                cantidad: 3,
                subtotal: 600.00,
            },
            {
                producto: ObjectId('000000000000000000000015'),
                cantidad: 1,
                subtotal: 500.00,
            },
            {
                producto: ObjectId('000000000000000000000016'),
                cantidad: 2,
                subtotal: 400.00,
            },
        ],
    },
    {
        _id: ObjectId('000000000000000000000004'),
        fecha_creacion: new Date(),
        estado: 'Pendiente',
        total: 1600.00,
        usuario: ObjectId('000000000000000000000004'),
        carrito_producto: [
            {
                producto: ObjectId('000000000000000000000017'),
                cantidad: 2,
                subtotal: 200.00,
            },
            {
                producto: ObjectId('000000000000000000000018'),
                cantidad: 3,
                subtotal: 600.00,
            },
            {
                producto: ObjectId('000000000000000000000019'),
                cantidad: 8,
                subtotal: 800.00,
            },
        ],
    },
    {
        _id: ObjectId('000000000000000000000005'),
        fecha_creacion: new Date(),
        estado: 'Activo',
        total: 1700.00,
        usuario: ObjectId('000000000000000000000000'),
        carrito_producto: [
            {
                producto: ObjectId('000000000000000000000000'),
                cantidad: 2,
                subtotal: 200.00,
            },
            {
                producto: ObjectId('000000000000000000000001'),
                cantidad: 3,
                subtotal: 600.00,
            },
            {
                producto: ObjectId('000000000000000000000002'),
                cantidad: 8,
                subtotal: 800.00,
            },
        ],
    },
    {
        _id: ObjectId('000000000000000000000006'),
        fecha_creacion: new Date(),
        estado: 'Completado',
        total: 1800.00,
        usuario: ObjectId('000000000000000000000001'),
        carrito_producto: [
            {
                producto: ObjectId('000000000000000000000003'),
                cantidad: 2,
                subtotal: 200.00,
            },
            {
                producto: ObjectId('000000000000000000000004'),
                cantidad: 3,
                subtotal: 600.00,
            },
            {
                producto: ObjectId('000000000000000000000005'),
                cantidad: 8,
                subtotal: 800.00,
            },
        ],
    },
    {
        _id: ObjectId('000000000000000000000007'),
        fecha_creacion: new Date(),
        estado: 'Pendiente',
        total: 1900.00,
        usuario: ObjectId('000000000000000000000002'),
        carrito_producto: [
            {
                producto: ObjectId('000000000000000000000006'),
                cantidad: 2,
                subtotal: 200.00,
            },
            {
                producto: ObjectId('000000000000000000000007'),
                cantidad: 3,
                subtotal: 600.00,
            },
            {
                producto: ObjectId('000000000000000000000008'),
                cantidad: 8,
                subtotal: 800.00,
            },
        ],
    },
    {
        _id: ObjectId('000000000000000000000008'),
        fecha_creacion: new Date(),
        estado: 'Activo',
        total: 2000.00,
        usuario: ObjectId('000000000000000000000003'),
        carrito_producto: [
            {
                producto: ObjectId('000000000000000000000009'),
                cantidad: 2,
                subtotal: 200.00,
            },
            {
                producto: ObjectId('000000000000000000000010'),
                cantidad: 3,
                subtotal: 600.00,
            },
            {
                producto: ObjectId('000000000000000000000011'),
                cantidad: 8,
                subtotal: 800.00,
            },
        ],
    },
    {
        _id: ObjectId('000000000000000000000009'),
        fecha_creacion: new Date(),
        estado: 'Completado',
        total: 2100.00,
        usuario: ObjectId('000000000000000000000004'),
        carrito_producto: [
            {
                producto: ObjectId('000000000000000000000012'),
                cantidad: 2,
                subtotal: 200.00,
            },
            {
                producto: ObjectId('000000000000000000000013'),
                cantidad: 3,
                subtotal: 600.00,
            },
            {
                producto: ObjectId('000000000000000000000014'),
                cantidad: 8,
                subtotal: 800.00,
            },
        ],
    },
    {
        _id: ObjectId('000000000000000000000010'),
        fecha_creacion: new Date(),
        estado: 'Pendiente',
        total: 2200.00,
        usuario: ObjectId('000000000000000000000000'),
        carrito_producto: [
            {
                producto: ObjectId('000000000000000000000015'),
                cantidad: 2,
                subtotal: 200.00,
            },
            {
                producto: ObjectId('000000000000000000000016'),
                cantidad: 3,
                subtotal: 600.00,
            },
            {
                producto: ObjectId('000000000000000000000017'),
                cantidad: 8,
                subtotal: 800.00,
            },
        ],
    },
    {
        _id: ObjectId('000000000000000000000011'),
        fecha_creacion: new Date(),
        estado: 'Activo',
        total: 2300.00,
        usuario: ObjectId('000000000000000000000001'),
        carrito_producto: [
            {
                producto: ObjectId('000000000000000000000018'),
                cantidad: 2,
                subtotal: 200.00,
            },
            {
                producto: ObjectId('000000000000000000000019'),
                cantidad: 3,
                subtotal: 600.00,
            },
            {
                producto: ObjectId('000000000000000000000000'),
                cantidad: 8,
                subtotal: 800.00,
            },
        ],
    },
    {
        _id: ObjectId('000000000000000000000012'),
        fecha_creacion: new Date(),
        estado: 'Completado',
        total: 2400.00,
        usuario: ObjectId('000000000000000000000002'),
        carrito_producto: [
            {
                producto: ObjectId('000000000000000000000001'),
                cantidad: 2,
                subtotal: 200.00,
            },
            {
                producto: ObjectId('000000000000000000000002'),
                cantidad: 3,
                subtotal: 600.00,
            },
            {
                producto: ObjectId('000000000000000000000003'),
                cantidad: 8,
                subtotal: 800.00,
            },
        ],
    },
    {
        _id: ObjectId('000000000000000000000013'),
        fecha_creacion: new Date(),
        estado: 'Pendiente',
        total: 2500.00,
        usuario: ObjectId('000000000000000000000003'),
        carrito_producto: [
            {
                producto: ObjectId('000000000000000000000004'),
                cantidad: 2,
                subtotal: 200.00,
            },
            {
                producto: ObjectId('000000000000000000000005'),
                cantidad: 3,
                subtotal: 600.00,
            },
            {
                producto: ObjectId('000000000000000000000006'),
                cantidad: 8,
                subtotal: 800.00,
            },
        ],
    },
    {
        _id: ObjectId('000000000000000000000014'),
        fecha_creacion: new Date(),
        estado: 'Activo',
        total: 2600.00,
        usuario: ObjectId('000000000000000000000004'),
        carrito_producto: [
            {
                producto: ObjectId('000000000000000000000007'),
                cantidad: 2,
                subtotal: 200.00,
            },
            {
                producto: ObjectId('000000000000000000000008'),
                cantidad: 3,
                subtotal: 600.00,
            },
            {
                producto: ObjectId('000000000000000000000009'),
                cantidad: 8,
                subtotal: 800.00,
            },
        ],
    },
    {
        _id: ObjectId('000000000000000000000015'),
        fecha_creacion: new Date(),
        estado: 'Activo',
        total: 2700.00,
        usuario: ObjectId('000000000000000000000000'),
        carrito_producto: [
            {
                producto: ObjectId('000000000000000000000010'),
                cantidad: 2,
                subtotal: 200.00,
            },
            {
                producto: ObjectId('000000000000000000000011'),
                cantidad: 3,
                subtotal: 600.00,
            },
            {
                producto: ObjectId('000000000000000000000012'),
                cantidad: 8,
                subtotal: 800.00,
            },
        ],
    },
    {
        _id: ObjectId('000000000000000000000016'),
        fecha_creacion: new Date(),
        estado: 'Activo',
        total: 2800.00,
        usuario: ObjectId('000000000000000000000001'),
        carrito_producto: [
            {
                producto: ObjectId('000000000000000000000013'),
                cantidad: 2,
                subtotal: 200.00,
            },
            {
                producto: ObjectId('000000000000000000000014'),
                cantidad: 3,
                subtotal: 600.00,
            },
            {
                producto: ObjectId('000000000000000000000015'),
                cantidad: 8,
                subtotal: 800.00,
            },
        ],
    },
    {
        _id: ObjectId('000000000000000000000017'),
        fecha_creacion: new Date(),
        estado: 'Activo',
        total: 2900.00,
        usuario: ObjectId('000000000000000000000002'),
        carrito_producto: [
            {
                producto: ObjectId('000000000000000000000016'),
                cantidad: 2,
                subtotal: 200.00,
            },
            {
                producto: ObjectId('000000000000000000000017'),
                cantidad: 3,
                subtotal: 600.00,
            },
            {
                producto: ObjectId('000000000000000000000018'),
                cantidad: 8,
                subtotal: 800.00,
            },
        ],
    },
    {
        _id: ObjectId('000000000000000000000018'),
        fecha_creacion: new Date(),
        estado: 'Activo',
        total: 3000.00,
        usuario: ObjectId('000000000000000000000003'),
        carrito_producto: [
            {
                producto: ObjectId('000000000000000000000019'),
                cantidad: 2,
                subtotal: 200.00,
            },
            {
                producto: ObjectId('000000000000000000000000'),
                cantidad: 3,
                subtotal: 600.00,
            },
            {
                producto: ObjectId('000000000000000000000001'),
                cantidad: 8,
                subtotal: 800.00,
            },
        ],
    },
    {
        _id: ObjectId('000000000000000000000019'),
        fecha_creacion: new Date(),
        estado: 'Activo',
        total: 3100.00,
        usuario: ObjectId('000000000000000000000004'),
        carrito_producto: [
            {
                producto: ObjectId('000000000000000000000002'),
                cantidad: 2,
                subtotal: 200.00,
            },
            {
                producto: ObjectId('000000000000000000000003'),
                cantidad: 3,
                subtotal: 600.00,
            },
            {
                producto: ObjectId('000000000000000000000004'),
                cantidad: 8,
                subtotal: 800.00,
            },
        ],
    },
])