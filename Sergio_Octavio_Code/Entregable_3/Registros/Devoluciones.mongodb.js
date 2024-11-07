use('Furniview');
//? Registros Listos
db.Devoluciones.insertMany([
  {
    _id: ObjectId('000000000000000000000000'),
    fecha: new Date(),
    motivo: "La mesa estaba rota en el momento de llegada.",
    estado: 'activo',
    total: 1500.00,
    usuario: ObjectId('000000000000000000000000'),
    carrito: ObjectId('000000000000000000000000'),
    devolucion: [
      {
        producto: ObjectId('000000000000000000000000'),
        cantidad: 1,
        subtotal: 1500.00
      }
    ]
  },
  {
    _id: ObjectId('000000000000000000000001'),
    fecha: new Date(),
    motivo: "La silla tenía un defecto en la base.",
    estado: 'activo',
    total: 1200.00,
    usuario: ObjectId('000000000000000000000001'),
    carrito: ObjectId('000000000000000000000001'),
    devolucion: [
      {
        producto: ObjectId('000000000000000000000001'),
        cantidad: 1,
        subtotal: 1200.00
      }
    ]
  },
  {
    _id: ObjectId('000000000000000000000002'),
    fecha: new Date(),
    motivo: "El sofá tenía manchas.",
    estado: 'activo',
    total: 8500.00,
    usuario: ObjectId('000000000000000000000002'),
    carrito: ObjectId('000000000000000000000002'),
    devolucion: [
      {
        producto: ObjectId('000000000000000000000002'),
        cantidad: 1,
        subtotal: 8500.00
      }
    ]
  },
  {
    _id: ObjectId('000000000000000000000003'),
    fecha: new Date(),
    motivo: "La lámpara no funcionaba.",
    estado: 'activo',
    total: 1800.00,
    usuario: ObjectId('000000000000000000000003'),
    carrito: ObjectId('000000000000000000000003'),
    devolucion: [
      {
        producto: ObjectId('000000000000000000000003'),
        cantidad: 1,
        subtotal: 1800.00
      }
    ]
  },
  {
    _id: ObjectId('000000000000000000000004'),
    fecha: new Date(),
    motivo: "La tumbona estaba dañada.",
    estado: 'activo',
    total: 3200.00,
    usuario: ObjectId('000000000000000000000004'),
    carrito: ObjectId('000000000000000000000004'),
    devolucion: [
      {
        producto: ObjectId('000000000000000000000004'),
        cantidad: 1,
        subtotal: 3200.00
      }
    ]
  },
  {
    _id: ObjectId('000000000000000000000005'),
    fecha: new Date(),
    motivo: "La tumbona estaba dañada.",
    estado: 'activo',
    total: 4200.00,
    usuario: ObjectId('000000000000000000000000'),
    carrito: ObjectId('000000000000000000000005'),
    devolucion: [
      {
        producto: ObjectId('000000000000000000000005'),
        cantidad: 1,
        subtotal: 4200.00
      }
    ]
  },
  {
    _id: ObjectId('000000000000000000000006'),
    fecha: new Date(),
    motivo: "La mesa estaba rota en el momento de llegada.",
    estado: 'activo',
    total: 1500.00,
    usuario: ObjectId('000000000000000000000001'),
    carrito: ObjectId('000000000000000000000006'),
    devolucion: [
      {
        producto: ObjectId('000000000000000000000006'),
        cantidad: 1,
        subtotal: 1500.00
      }
    ]
  },
  {
    _id: ObjectId('000000000000000000000007'),
    fecha: new Date(),
    motivo: "La silla tenía un defecto en la base.",
    estado: 'activo',
    total: 1200.00,
    usuario: ObjectId('000000000000000000000002'),
    carrito: ObjectId('000000000000000000000007'),
    devolucion: [
      {
        producto: ObjectId('000000000000000000000007'),
        cantidad: 1,
        subtotal: 1200.00
      }
    ]
  },
  {
    _id: ObjectId('000000000000000000000008'),
    fecha: new Date(),
    motivo: "El sofá tenía manchas.",
    estado: 'activo',
    total: 8500.00,
    usuario: ObjectId('000000000000000000000003'),
    carrito: ObjectId('000000000000000000000008'),
    devolucion: [
      {
        producto: ObjectId('000000000000000000000008'),
        cantidad: 1,
        subtotal: 8500.00
      }
    ]
  },
  {
    _id: ObjectId('000000000000000000000009'),
    fecha: new Date(),
    motivo: "La lámpara no funcionaba.",
    estado: 'activo',
    total: 1800.00,
    usuario: ObjectId('000000000000000000000004'),
    carrito: ObjectId('000000000000000000000009'),
    devolucion: [
      {
        producto: ObjectId('000000000000000000000009'),
        cantidad: 1,
        subtotal: 1800.00
      }
    ]
  },//!---------------------------------------------------
  {
    _id: ObjectId('000000000000000000000010'),
    fecha: new Date(),
    motivo: "La mesa estaba rota en el momento de llegada.",
    estado: 'activo',
    total: 1500.00,
    usuario: ObjectId('000000000000000000000000'),
    carrito: ObjectId('000000000000000000000010'),
    devolucion: [
      {
        producto: ObjectId('000000000000000000000010'),
        cantidad: 1,
        subtotal: 1500.00
      }
    ]
  },
  {
    _id: ObjectId('000000000000000000000011'),
    fecha: new Date(),
    motivo: "La silla tenía un defecto en la base.",
    estado: 'activo',
    total: 1200.00,
    usuario: ObjectId('000000000000000000000001'),
    carrito: ObjectId('000000000000000000000011'),
    devolucion: [
      {
        producto: ObjectId('000000000000000000000011'),
        cantidad: 1,
        subtotal: 1200.00
      }
    ]
  },
  {
    _id: ObjectId('000000000000000000000012'),
    fecha: new Date(),
    motivo: "El sofá tenía manchas.",
    estado: 'activo',
    total: 8500.00,
    usuario: ObjectId('000000000000000000000002'),
    carrito: ObjectId('000000000000000000000012'),
    devolucion: [
      {
        producto: ObjectId('000000000000000000000012'),
        cantidad: 1,
        subtotal: 8500.00
      }
    ]
  },
  {
    _id: ObjectId('000000000000000000000013'),
    fecha: new Date(),
    motivo: "La lámpara no funcionaba.",
    estado: 'activo',
    total: 1800.00,
    usuario: ObjectId('000000000000000000000003'),
    carrito: ObjectId('000000000000000000000013'),
    devolucion: [
      {
        producto: ObjectId('000000000000000000000013'),
        cantidad: 1,
        subtotal: 1800.00
      }
    ]
  },
  {
    _id: ObjectId('000000000000000000000014'),
    fecha: new Date(),
    motivo: "La tumbona estaba dañada.",
    estado: 'activo',
    total: 3200.00,
    usuario: ObjectId('000000000000000000000004'),
    carrito: ObjectId('000000000000000000000014'),
    devolucion: [
      {
        producto: ObjectId('000000000000000000000014'),
        cantidad: 1,
        subtotal: 3200.00
      }
    ]
  },
  {
    _id: ObjectId('000000000000000000000015'),
    fecha: new Date(),
    motivo: "La tumbona estaba dañada.",
    estado: 'activo',
    total: 4200.00,
    usuario: ObjectId('000000000000000000000000'),
    carrito: ObjectId('000000000000000000000015'),
    devolucion: [
      {
        producto: ObjectId('000000000000000000000015'),
        cantidad: 1,
        subtotal: 4200.00
      }
    ]
  },
  {
    _id: ObjectId('000000000000000000000016'),
    fecha: new Date(),
    motivo: "La mesa estaba rota en el momento de llegada.",
    estado: 'activo',
    total: 1500.00,
    usuario: ObjectId('000000000000000000000001'),
    carrito: ObjectId('000000000000000000000016'),
    devolucion: [
      {
        producto: ObjectId('000000000000000000000016'),
        cantidad: 1,
        subtotal: 1500.00
      }
    ]
  },
  {
    _id: ObjectId('000000000000000000000017'),
    fecha: new Date(),
    motivo: "La silla tenía un defecto en la base.",
    estado: 'activo',
    total: 1200.00,
    usuario: ObjectId('000000000000000000000002'),
    carrito: ObjectId('000000000000000000000017'),
    devolucion: [
      {
        producto: ObjectId('000000000000000000000017'),
        cantidad: 1,
        subtotal: 1200.00
      }
    ]
  },
  {
    _id: ObjectId('000000000000000000000018'),
    fecha: new Date(),
    motivo: "El sofá tenía manchas.",
    estado: 'activo',
    total: 8500.00,
    usuario: ObjectId('000000000000000000000003'),
    carrito: ObjectId('000000000000000000000018'),
    devolucion: [
      {
        producto: ObjectId('000000000000000000000018'),
        cantidad: 1,
        subtotal: 8500.00
      }
    ]
  },
  {
    _id: ObjectId('000000000000000000000019'),
    fecha: new Date(),
    motivo: "La lámpara no funcionaba.",
    estado: 'activo',
    total: 1800.00,
    usuario: ObjectId('000000000000000000000004'),
    carrito: ObjectId('000000000000000000000019'),
    devolucion: [
      {
        producto: ObjectId('000000000000000000000019'),
        cantidad: 1,
        subtotal: 1800.00
      }
    ]
  },
]);