use('Furniview');

db.Devoluciones.insertMany([
  {
    fecha: new Date(),
    motivo: "La mesa estaba rota en el momento de llegada.",
    estado: 'activo',
    total: 1500.00,
    usuario: ObjectId(),
    carrito: ObjectId(),
    devolucion: [
      {
        producto: ObjectId(),
        cantidad: 1,
        subtotal: 1500.00
      }
    ]
  },
  {
    fecha: new Date(),
    motivo: "La silla tenía un defecto en la base.",
    estado: 'activo',
    total: 1200.00,
    usuario: ObjectId(),
    carrito: ObjectId(),
    devolucion: [
      {
        producto: ObjectId(),
        cantidad: 1,
        subtotal: 1200.00
      }
    ]
  },
  {
    fecha: new Date(),
    motivo: "El sofá tenía manchas.",
    estado: 'activo',
    total: 8500.00,
    usuario: ObjectId(),
    carrito: ObjectId(),
    devolucion: [
      {
        producto: ObjectId(),
        cantidad: 1,
        subtotal: 8500.00
      }
    ]
  },
  {
    fecha: new Date(),
    motivo: "La lámpara no funcionaba.",
    estado: 'activo',
    total: 1800.00,
    usuario: ObjectId(),
    carrito: ObjectId(),
    devolucion: [
      {
        producto: ObjectId(),
        cantidad: 1,
        subtotal: 1800.00
      }
    ]
  },
  {
    fecha: new Date(),
    motivo: "La tumbona estaba dañada.",
    estado: 'activo',
    total: 3200.00,
    usuario: ObjectId(),
    carrito: ObjectId(),
    devolucion: [
      {
        producto: ObjectId(),
        cantidad: 1,
        subtotal: 3200.00
      }
    ]
  }
]);