use('Furniview');

db.Pagos.insertMany([
    {
        monto_total: 100.52,
        fecha_pago: null,
        metodo: 'Tarjeta de credito',
        estado: 'Pagado',
        referencia_pago: Math.floor(Math.random() * 1e15).toString(),
        proveedor_pago: '',
        carrito: ObjectId(),
    },
    {
        monto_total: 200.12,
        fecha_pago: null,
        metodo: 'Tarjeta de debito',
        estado: 'Fallido',
        referencia_pago: Math.floor(Math.random() * 1e15).toString(),
        proveedor_pago: '',
        carrito: ObjectId(),
    },
    {
        monto_total: 300.00,
        fecha_pago: null,
        metodo: 'Proveedor de pago',
        estado: 'Pendiente',
        referencia_pago: Math.floor(Math.random() * 1e15).toString(),
        proveedor_pago: '',
        carrito: ObjectId(),
    },
    {
        monto_total: 400.00,
        fecha_pago: null,
        metodo: 'Tarjeta de debito',
        estado: 'Pagado',
        referencia_pago: Math.floor(Math.random() * 1e15).toString(),
        proveedor_pago: '',
        carrito: ObjectId(),
    },
    {
        monto_total: 5100.00,
        fecha_pago: null,
        metodo: 'Tarjeta de debito',
        estado: 'Fallido',
        referencia_pago: Math.floor(Math.random() * 1e15).toString(),
        proveedor_pago: '',
        carrito: ObjectId(),
    },
    {
        monto_total: 600.00,
        fecha_pago: null,
        metodo: 'Tarjeta de debito',
        estado: 'Pendiente',
        referencia_pago: Math.floor(Math.random() * 1e15).toString(),
        proveedor_pago: '',
        carrito: ObjectId(),
    },
    {
        monto_total: 700.00,
        fecha_pago: null,
        metodo: 'Tarjeta de debito',
        estado: 'Pagado',
        referencia_pago: Math.floor(Math.random() * 1e15).toString(),
        proveedor_pago: '',
        carrito: ObjectId(),
    },
    {
        monto_total: 800.00,
        fecha_pago: null,
        metodo: 'Tarjeta de debito',
        estado: 'Fallido',
        referencia_pago: Math.floor(Math.random() * 1e15).toString(),
        proveedor_pago: '',
        carrito: ObjectId(),
    },
    {
        monto_total: 900.00,
        fecha_pago: null,
        metodo: 'Tarjeta de debito',
        estado: 'Pendiente',
        referencia_pago: Math.floor(Math.random() * 1e15).toString(),
        proveedor_pago: '',
        carrito: ObjectId(),
    },
    {
        monto_total: 1000.00,
        fecha_pago: null,
        metodo: 'Tarjeta de debito',
        estado: 'Pagado',
        referencia_pago: Math.floor(Math.random() * 1e15).toString(),
        proveedor_pago: '',
        carrito: ObjectId(),
    },
    {
        monto_total: 100.52,
        fecha_pago: null,
        metodo: 'Tarjeta de credito',
        estado: 'Pagado',
        referencia_pago: Math.floor(Math.random() * 1e15).toString(),
        proveedor_pago: '',
        carrito: ObjectId(),
    },
    {
        monto_total: 200.12,
        fecha_pago: null,
        metodo: 'Tarjeta de debito',
        estado: 'Fallido',
        referencia_pago: Math.floor(Math.random() * 1e15).toString(),
        proveedor_pago: '',
        carrito: ObjectId(),
    },
    {
        monto_total: 300.00,
        fecha_pago: null,
        metodo: 'Proveedor de pago',
        estado: 'Pendiente',
        referencia_pago: Math.floor(Math.random() * 1e15).toString(),
        proveedor_pago: '',
        carrito: ObjectId(),
    },
    {
        monto_total: 400.00,
        fecha_pago: null,
        metodo: 'Tarjeta de debito',
        estado: 'Pagado',
        referencia_pago: Math.floor(Math.random() * 1e15).toString(),
        proveedor_pago: '',
        carrito: ObjectId(),
    },
    {
        monto_total: 5100.00,
        fecha_pago: null,
        metodo: 'Tarjeta de debito',
        estado: 'Fallido',
        referencia_pago: Math.floor(Math.random() * 1e15).toString(),
        proveedor_pago: '',
        carrito: ObjectId(),
    },
    {
        monto_total: 600.00,
        fecha_pago: null,
        metodo: 'Tarjeta de debito',
        estado: 'Pendiente',
        referencia_pago: Math.floor(Math.random() * 1e15).toString(),
        proveedor_pago: '',
        carrito: ObjectId(),
    },
    {
        monto_total: 700.00,
        fecha_pago: null,
        metodo: 'Tarjeta de debito',
        estado: 'Pagado',
        referencia_pago: Math.floor(Math.random() * 1e15).toString(),
        proveedor_pago: '',
        carrito: ObjectId(),
    },
    {
        monto_total: 800.00,
        fecha_pago: null,
        metodo: 'Tarjeta de debito',
        estado: 'Fallido',
        referencia_pago: Math.floor(Math.random() * 1e15).toString(),
        proveedor_pago: '',
        carrito: ObjectId(),
    },
    {
        monto_total: 900.00,
        fecha_pago: null,
        metodo: 'Tarjeta de debito',
        estado: 'Pendiente',
        referencia_pago: Math.floor(Math.random() * 1e15).toString(),
        proveedor_pago: '',
        carrito: ObjectId(),
    },
    {
        monto_total: 1000.00,
        fecha_pago: null,
        metodo: 'Tarjeta de debito',
        estado: 'Pagado',
        referencia_pago: Math.floor(Math.random() * 1e15).toString(),
        proveedor_pago: '',
        carrito: ObjectId(),
    },
])