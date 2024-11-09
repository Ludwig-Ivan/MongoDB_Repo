use('Furniview');
//? los registros estan listo
db.Pagos.insertMany([
    {
        _id: 1,
        monto_total: 100.52,
        fecha_pago: new Date('2016-05-12 00:00:00'),
        metodo_pago: 'Tarjeta de credito',
        estado: 'Pagado',
        referencia_pago: '9872837492389748',
        proveedor_pago: 'PayPal',
        id_carrito: 1
    },
    {
        _id: 2,
        monto_total: 200.12,
        fecha_pago: new Date('2000-09-05 00:00:00'),
        metodo_pago: 'Tarjeta de debito',
        estado: 'Fallido',
        referencia_pago: '9872837423489748',
        proveedor_pago: 'OXXO',
        id_carrito: 2
    },
    {
        _id: 3,
        monto_total: 300.00,
        fecha_pago: new Date('2000-05-16 00:00:00'),
        metodo_pago: 'Proveedor de pago',
        estado: 'Pendiente',
        referencia_pago: '1872837492389748',
        proveedor_pago: 'PayPal',
        id_carrito: 3
    },
    {
        _id: 4,
        monto_total: 400.00,
        fecha_pago: new Date('2017-10-03 00:00:00'),
        metodo_pago: 'Tarjeta de credito',
        estado: 'Pagado',
        referencia_pago: '2872837492389748',
        proveedor_pago: 'OXXO',
        id_carrito: 4
    },
    {
        _id: 5,
        monto_total: 5100.02,
        fecha_pago: new Date('2008-07-17 00:00:00'),
        metodo_pago: 'Tarjeta de debito',
        estado: 'Fallido',
        referencia_pago: '3872837492389748',
        proveedor_pago: 'PayPal',
        id_carrito: 5
    },
    {
        _id: 6,
        monto_total: 600.00,
        fecha_pago: new Date('2011-07-24 00:00:00'),
        metodo_pago: 'Proveedor de pago',
        estado: 'Pendiente',
        referencia_pago: '4872837492389748',
        proveedor_pago: 'OXXO',
        id_carrito: 6
    },
    {
        _id: 7,
        monto_total: 700.00,
        fecha_pago: new Date('2012-07-23 00:00:00'),
        metodo_pago: 'Tarjeta de credito',
        estado: 'Pagado',
        referencia_pago: '5872837492389748',
        proveedor_pago: 'PayPal',
        id_carrito: 7
    },
    {
        _id: 8,
        monto_total: 800.00,
        fecha_pago: new Date('2007-02-18 00:00:00'),
        metodo_pago: 'Tarjeta de debito',
        estado: 'Fallido',
        referencia_pago: '6872837492389748',
        proveedor_pago: 'OXXO',
        id_carrito: 8
    },
    {
        _id: 9,
        monto_total: 900.02,
        fecha_pago: new Date('2008-11-26 00:00:00'),
        metodo_pago: 'Proveedor de pago',
        estado: 'Pendiente',
        referencia_pago: '7872837492389748',
        proveedor_pago: 'PayPal',
        id_carrito: 9
    },
    {
        _id: 10,
        monto_total: 1000.00,
        fecha_pago: new Date('2006-05-31 00:00:00'),
        metodo_pago: 'Tarjeta de credito',
        estado: 'Pagado',
        referencia_pago: '8872837492389748',
        proveedor_pago: 'OXXO',
        id_carrito: 10
    },
    {
        _id: 11,
        monto_total: 100.52,
        fecha_pago: new Date('2016-05-12 00:00:00'),
        metodo_pago: 'Tarjeta de debito',
        estado: 'Pagado',
        referencia_pago: '9172837492389748',
        proveedor_pago: 'PayPal',
        id_carrito: 11
    },
    {
        _id: 12,
        monto_total: 200.12,
        fecha_pago: new Date('2000-09-05 00:00:00'),
        metodo_pago: 'Proveedor de pago',
        estado: 'Fallido',
        referencia_pago: '10872837423489748',
        proveedor_pago: 'OXXO',
        id_carrito: 12
    },
    {
        _id: 13,
        monto_total: 300.00,
        fecha_pago: new Date('2000-05-16 00:00:00'),
        metodo_pago: 'Tarjeta de credito',
        estado: 'Pendiente',
        referencia_pago: '1172837492389748',
        proveedor_pago: 'PayPal',
        id_carrito: 13
    },
    {
        _id: 14,
        monto_total: 400.00,
        fecha_pago: new Date('2017-10-03 00:00:00'),
        metodo_pago: 'Tarjeta de debito',
        estado: 'Pagado',
        referencia_pago: '1272837492389748',
        proveedor_pago: 'OXXO',
        id_carrito: 14
    },
    {
        _id: 15,
        monto_total: 5100.02,
        fecha_pago: new Date('2008-07-17 00:00:00'),
        metodo_pago: 'Proveedor de pago',
        estado: 'Fallido',
        referencia_pago: '1372837492389748',
        proveedor_pago: 'PayPal',
        id_carrito: 15
    },
    {
        _id: 16,
        monto_total: 600.00,
        fecha_pago: new Date('2011-07-24 00:00:00'),
        metodo_pago: 'Tarjeta de credito',
        estado: 'Pendiente',
        referencia_pago: '1472837492389748',
        proveedor_pago: 'OXXO',
        id_carrito: 16
    },
    {
        _id: 17,
        monto_total: 700.00,
        fecha_pago: new Date('2012-07-23 00:00:00'),
        metodo_pago: 'Tarjeta de debito',
        estado: 'Pagado',
        referencia_pago: '1572837492389748',
        proveedor_pago: 'PayPal',
        id_carrito: 17
    },
    {
        _id: 18,
        monto_total: 800.00,
        fecha_pago: new Date('2007-02-18 00:00:00'),
        metodo_pago: 'Proveedor de pago',
        estado: 'Fallido',
        referencia_pago: '1672837492389748',
        proveedor_pago: 'OXXO',
        id_carrito: 18
    },
    {
        _id: 19,
        monto_total: 900.02,
        fecha_pago: new Date('2008-11-26 00:00:00'),
        metodo_pago: 'Tarjeta de credito',
        estado: 'Pendiente',
        referencia_pago: '1772837492389748',
        proveedor_pago: 'PayPal',
        id_carrito: 19
    },
    {
        _id: 20,
        monto_total: 1000.00,
        fecha_pago: new Date('2006-05-31 00:00:00'),
        metodo_pago: 'Tarjeta de debito',
        estado: 'Pagado',
        referencia_pago: '1822837492389748',
        proveedor_pago: 'OXXO',
        id_carrito: 20
    }
])