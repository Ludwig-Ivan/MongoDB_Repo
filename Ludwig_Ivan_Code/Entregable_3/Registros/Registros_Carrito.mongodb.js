use('Furniview');
//? Registros Listo
db.Carrito.insertMany([
    {
        _id: 1,
        fecha_creacion: new Date('2024-11-07T23:18:16.860'),
        estado: 'Activo',
        total: 2500.00,
        id_usuario: 1,
        carrito_producto: [
            {
                id_producto: 1,
                cantidad: 2,
                subtotal: 200.00
            },
            {
                id_producto: 2,
                cantidad: 3,
                subtotal: 600.00
            },
            {
                id_producto: 3,
                cantidad: 8,
                subtotal: 800.00
            },
            {
                id_producto: 4,
                cantidad: 1,
                subtotal: 500.00
            },
            {
                id_producto: 5,
                cantidad: 2,
                subtotal: 400.00
            }
        ]
    },
    {
        _id: 2,
        fecha_creacion: new Date('2024-11-07T23:18:16.860'),
        estado: 'Pendiente',
        total: 2100.00,
        id_usuario: 2,
        carrito_producto: [
            {
                id_producto: 6,
                cantidad: 2,
                subtotal: 200.00
            },
            {
                id_producto: 7,
                cantidad: 3,
                subtotal: 600.00
            },
            {
                id_producto: 8,
                cantidad: 8,
                subtotal: 800.00
            },
            {
                id_producto: 9,
                cantidad: 1,
                subtotal: 500.00
            }
        ]
    },
    {
        _id: 3,
        fecha_creacion: new Date('2024-11-07T23:18:16.860'),
        estado: 'Completado',
        total: 2300.00,
        id_usuario: 3,
        carrito_producto: [
            {
                id_producto: 10,
                cantidad: 3,
                subtotal: 600.00
            },
            {
                id_producto: 11,
                cantidad: 8,
                subtotal: 800.00
            },
            {
                id_producto: 12,
                cantidad: 1,
                subtotal: 500.00
            },
            {
                id_producto: 13,
                cantidad: 2,
                subtotal: 400.00
            }
        ]
    },
    {
        _id: 4,
        fecha_creacion: new Date('2024-11-07T23:18:16.860'),
        estado: 'Activo',
        total: 1700.00,
        id_usuario: 4,
        carrito_producto: [
            {
                id_producto: 14,
                cantidad: 2,
                subtotal: 200.00
            },
            {
                id_producto: 15,
                cantidad: 3,
                subtotal: 600.00
            },
            {
                id_producto: 16,
                cantidad: 1,
                subtotal: 500.00
            },
            {
                id_producto: 17,
                cantidad: 2,
                subtotal: 400.00
            }
        ]
    },
    {
        _id: 5,
        fecha_creacion: new Date('2024-11-07T23:18:16.860'),
        estado: 'Pendiente',
        total: 1600.00,
        id_usuario: 5,
        carrito_producto: [
            {
                id_producto: 18,
                cantidad: 2,
                subtotal: 200.00
            },
            {
                id_producto: 19,
                cantidad: 3,
                subtotal: 600.00
            },
            {
                id_producto: 20,
                cantidad: 8,
                subtotal: 800.00
            }
        ]
    },
    {
        _id: 6,
        fecha_creacion: new Date('2024-11-07T23:18:16.860'),
        estado: 'Activo',
        total: 1700.00,
        id_usuario: 1,
        carrito_producto: [
            {
                id_producto: 1,
                cantidad: 2,
                subtotal: 200.00
            },
            {
                id_producto: 2,
                cantidad: 3,
                subtotal: 600.00
            },
            {
                id_producto: 3,
                cantidad: 8,
                subtotal: 800.00
            }
        ]
    },
    {
        _id: 7,
        fecha_creacion: new Date('2024-11-07T23:18:16.860'),
        estado: 'Completado',
        total: 1800.00,
        id_usuario: 2,
        carrito_producto: [
            {
                id_producto: 4,
                cantidad: 2,
                subtotal: 200.00
            },
            {
                id_producto: 5,
                cantidad: 3,
                subtotal: 600.00
            },
            {
                id_producto: 6,
                cantidad: 8,
                subtotal: 800.00
            }
        ]
    },
    {
        _id: 8,
        fecha_creacion: new Date('2024-11-07T23:18:16.860'),
        estado: 'Pendiente',
        total: 1900.00,
        id_usuario: 3,
        carrito_producto: [
            {
                id_producto: 7,
                cantidad: 2,
                subtotal: 200.00
            },
            {
                id_producto: 8,
                cantidad: 3,
                subtotal: 600.00
            },
            {
                id_producto: 9,
                cantidad: 8,
                subtotal: 800.00
            }
        ]
    },
    {
        _id: 9,
        fecha_creacion: new Date('2024-11-07T23:18:16.860'),
        estado: 'Activo',
        total: 2000.00,
        id_usuario: 4,
        carrito_producto: [
            {
                id_producto: 10,
                cantidad: 2,
                subtotal: 200.00
            },
            {
                id_producto: 11,
                cantidad: 3,
                subtotal: 600.00
            },
            {
                id_producto: 12,
                cantidad: 8,
                subtotal: 800.00
            }
        ]
    },
    {
        _id: 10,
        fecha_creacion: new Date('2024-11-07T23:18:16.860'),
        estado: 'Completado',
        total: 2100.00,
        id_usuario: 5,
        carrito_producto: [
            {
                id_producto: 13,
                cantidad: 2,
                subtotal: 200.00
            },
            {
                id_producto: 14,
                cantidad: 3,
                subtotal: 600.00
            },
            {
                id_producto: 15,
                cantidad: 8,
                subtotal: 800.00
            }
        ]
    },
    {
        _id: 11,
        fecha_creacion: new Date('2024-11-07T23:18:16.860'),
        estado: 'Pendiente',
        total: 2200.00,
        id_usuario: 1,
        carrito_producto: [
            {
                id_producto: 16,
                cantidad: 2,
                subtotal: 200.00
            },
            {
                id_producto: 17,
                cantidad: 3,
                subtotal: 600.00
            },
            {
                id_producto: 18,
                cantidad: 8,
                subtotal: 800.00
            }
        ]
    },
    {
        _id: 12,
        fecha_creacion: new Date('2024-11-07T23:18:16.860'),
        estado: 'Activo',
        total: 2300.00,
        id_usuario: 2,
        carrito_producto: [
            {
                id_producto: 19,
                cantidad: 2,
                subtotal: 200.00
            },
            {
                id_producto: 20,
                cantidad: 3,
                subtotal: 600.00
            },
            {
                id_producto: 1,
                cantidad: 8,
                subtotal: 800.00
            }
        ]
    },
    {
        _id: 13,
        fecha_creacion: new Date('2024-11-07T23:18:16.860'),
        estado: 'Completado',
        total: 2400.00,
        id_usuario: 3,
        carrito_producto: [
            {
                id_producto: 2,
                cantidad: 2,
                subtotal: 200.00
            },
            {
                id_producto: 3,
                cantidad: 3,
                subtotal: 600.00
            },
            {
                id_producto: 4,
                cantidad: 8,
                subtotal: 800.00
            }
        ]
    },
    {
        _id: 14,
        fecha_creacion: new Date('2024-11-07T23:18:16.860'),
        estado: 'Pendiente',
        total: 2500.00,
        id_usuario: 4,
        carrito_producto: [
            {
                id_producto: 5,
                cantidad: 2,
                subtotal: 200.00
            },
            {
                id_producto: 6,
                cantidad: 3,
                subtotal: 600.00
            },
            {
                id_producto: 7,
                cantidad: 8,
                subtotal: 800.00
            }
        ]
    },
    {
        _id: 15,
        fecha_creacion: new Date('2024-11-07T23:18:16.860'),
        estado: 'Activo',
        total: 2600.00,
        id_usuario: 5,
        carrito_producto: [
            {
                id_producto: 8,
                cantidad: 2,
                subtotal: 200.00
            },
            {
                id_producto: 9,
                cantidad: 3,
                subtotal: 600.00
            },
            {
                id_producto: 10,
                cantidad: 8,
                subtotal: 800.00
            }
        ]
    },
    {
        _id: 16,
        fecha_creacion: new Date('2024-11-07T23:18:16.860'),
        estado: 'Activo',
        total: 2700.00,
        id_usuario: 1,
        carrito_producto: [
            {
                id_producto: 11,
                cantidad: 2,
                subtotal: 200.00
            },
            {
                id_producto: 12,
                cantidad: 3,
                subtotal: 600.00
            },
            {
                id_producto: 13,
                cantidad: 8,
                subtotal: 800.00
            }
        ]
    },
    {
        _id: 17,
        fecha_creacion: new Date('2024-11-07T23:18:16.860'),
        estado: 'Activo',
        total: 2800.00,
        id_usuario: 2,
        carrito_producto: [
            {
                id_producto: 14,
                cantidad: 2,
                subtotal: 200.00
            },
            {
                id_producto: 15,
                cantidad: 3,
                subtotal: 600.00
            },
            {
                id_producto: 16,
                cantidad: 8,
                subtotal: 800.00
            }
        ]
    },
    {
        _id: 18,
        fecha_creacion: new Date('2024-11-07T23:18:16.860'),
        estado: 'Activo',
        total: 2900.00,
        id_usuario: 3,
        carrito_producto: [
            {
                id_producto: 17,
                cantidad: 2,
                subtotal: 200.00
            },
            {
                id_producto: 18,
                cantidad: 3,
                subtotal: 600.00
            },
            {
                id_producto: 19,
                cantidad: 8,
                subtotal: 800.00
            }
        ]
    },
    {
        _id: 19,
        fecha_creacion: new Date('2024-11-07T23:18:16.860'),
        estado: 'Activo',
        total: 3000.00,
        id_usuario: 4,
        carrito_producto: [
            {
                id_producto: 20,
                cantidad: 2,
                subtotal: 200.00
            },
            {
                id_producto: 1,
                cantidad: 3,
                subtotal: 600.00
            },
            {
                id_producto: 2,
                cantidad: 8,
                subtotal: 800.00
            }
        ]
    },
    {
        _id: 20,
        fecha_creacion: new Date('2024-11-07T23:18:16.860'),
        estado: 'Activo',
        total: 3100.00,
        id_usuario: 5,
        carrito_producto: [
            {
                id_producto: 3,
                cantidad: 2,
                subtotal: 200.00
            },
            {
                id_producto: 4,
                cantidad: 3,
                subtotal: 600.00
            },
            {
                id_producto: 5,
                cantidad: 8,
                subtotal: 800.00
            }
        ]
    }
])