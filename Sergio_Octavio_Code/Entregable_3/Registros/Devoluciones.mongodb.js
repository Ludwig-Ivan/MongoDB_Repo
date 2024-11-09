use('Furniview');
//? Registros Listos
db.Devoluciones.insertMany([
  {
    _id: 1,
    fecha: new Date('2024-11-07 23:33:27'),
    motivo: "La mesa estaba rota en el momento de llegada.",
    estado: "Pendiente",
    total: 1500.00,
    id_usuario: 1,
    id_carrito: 1,
    devoluciones_carrito: [
      {
        id_producto: 1,
        cantidad: 1,
        subtotal: 1500.00
      }
    ]
  },
  {
    _id: 2,
    fecha: new Date('2024-11-07 23:33:27'),
    motivo: "La silla tenía un defecto en la base.",
    estado: "Pendiente",
    total: 1200.00,
    id_usuario: 2,
    id_carrito: 2,
    devoluciones_carrito: [
      {
        id_producto: 2,
        cantidad: 1,
        subtotal: 1200.00
      }
    ]
  },
  {
    _id: 3,
    fecha: new Date('2024-11-07 23:33:27'),
    motivo: "El sofá tenía manchas.",
    estado: "Pendiente",
    total: 8500.00,
    id_usuario: 3,
    id_carrito: 3,
    devoluciones_carrito: [
      {
        id_producto: 3,
        cantidad: 1,
        subtotal: 8500.00
      }
    ]
  },
  {
    _id: 4,
    fecha: new Date('2024-11-07 23:33:27'),
    motivo: "La lámpara no funcionaba.",
    estado: "Pendiente",
    total: 1800.00,
    id_usuario: 4,
    id_carrito: 4,
    devoluciones_carrito: [
      {
        id_producto: 4,
        cantidad: 1,
        subtotal: 1800.00
      }
    ]
  },
  {
    _id: 5,
    fecha: new Date('2024-11-07 23:33:27'),
    motivo: "La tumbona estaba dañada.",
    estado: "Pendiente",
    total: 3200.00,
    id_usuario: 5,
    id_carrito: 5,
    devoluciones_carrito: [
      {
        id_producto: 5,
        cantidad: 1,
        subtotal: 3200.00
      }
    ]
  },
  {
    _id: 6,
    fecha: new Date('2024-11-07 23:33:27'),
    motivo: "La tumbona estaba dañada.",
    estado: "Pendiente",
    total: 4200.00,
    id_usuario: 1,
    id_carrito: 6,
    devoluciones_carrito: [
      {
        id_producto: 6,
        cantidad: 1,
        subtotal: 4200.00
      }
    ]
  },
  {
    _id: 7,
    fecha: new Date('2024-11-07 23:33:27'),
    motivo: "La mesa estaba rota en el momento de llegada.",
    estado: "Pendiente",
    total: 1500.00,
    id_usuario: 2,
    id_carrito: 7,
    devoluciones_carrito: [
      {
        id_producto: 7,
        cantidad: 1,
        subtotal: 1500.00
      }
    ]
  },
  {
    _id: 8,
    fecha: new Date('2024-11-07 23:33:27'),
    motivo: "La silla tenía un defecto en la base.",
    estado: "Pendiente",
    total: 1200.00,
    id_usuario: 3,
    id_carrito: 8,
    devoluciones_carrito: [
      {
        id_producto: 8,
        cantidad: 1,
        subtotal: 1200.00
      }
    ]
  },
  {
    _id: 9,
    fecha: new Date('2024-11-07 23:33:27'),
    motivo: "El sofá tenía manchas.",
    estado: "Pendiente",
    total: 8500.00,
    id_usuario: 4,
    id_carrito: 9,
    devoluciones_carrito: [
      {
        id_producto: 9,
        cantidad: 1,
        subtotal: 8500.00
      }
    ]
  },
  {
    _id: 10,
    fecha: new Date('2024-11-07 23:33:27'),
    motivo: "La lámpara no funcionaba.",
    estado: "Pendiente",
    total: 1800.00,
    id_usuario: 5,
    id_carrito: 10,
    devoluciones_carrito: [
      {
        id_producto: 10,
        cantidad: 1,
        subtotal: 1800.00
      }
    ]
  },
  {
    _id: 11,
    fecha: new Date('2024-11-07 23:33:27'),
    motivo: "La mesa estaba rota en el momento de llegada.",
    estado: "Pendiente",
    total: 1500.00,
    id_usuario: 1,
    id_carrito: 11,
    devoluciones_carrito: [
      {
        id_producto: 11,
        cantidad: 1,
        subtotal: 1500.00
      }
    ]
  },
  {
    _id: 12,
    fecha: new Date('2024-11-07 23:33:27'),
    motivo: "La silla tenía un defecto en la base.",
    estado: "Pendiente",
    total: 1200.00,
    id_usuario: 2,
    id_carrito: 12,
    devoluciones_carrito: [
      {
        id_producto: 12,
        cantidad: 1,
        subtotal: 1200.00
      }
    ]
  },
  {
    _id: 13,
    fecha: new Date('2024-11-07 23:33:27'),
    motivo: "El sofá tenía manchas.",
    estado: "Pendiente",
    total: 8500.00,
    id_usuario: 3,
    id_carrito: 13,
    devoluciones_carrito: [
      {
        id_producto: 13,
        cantidad: 1,
        subtotal: 8500.00
      }
    ]
  },
  {
    _id: 14,
    fecha: new Date('2024-11-07 23:33:27'),
    motivo: "La lámpara no funcionaba.",
    estado: "Pendiente",
    total: 1800.00,
    id_usuario: 4,
    id_carrito: 14,
    devoluciones_carrito: [
      {
        id_producto: 14,
        cantidad: 1,
        subtotal: 1800.00
      }
    ]
  },
  {
    _id: 15,
    fecha: new Date('2024-11-07 23:33:27'),
    motivo: "La tumbona estaba dañada.",
    estado: "Pendiente",
    total: 3200.00,
    id_usuario: 5,
    id_carrito: 15,
    devoluciones_carrito: [
      {
        id_producto: 15,
        cantidad: 1,
        subtotal: 3200.00
      }
    ]
  },
  {
    _id: 16,
    fecha: new Date('2024-11-07 23:33:27'),
    motivo: "La tumbona estaba dañada.",
    estado: "Pendiente",
    total: 4200.00,
    id_usuario: 1,
    id_carrito: 16,
    devoluciones_carrito: [
      {
        id_producto: 16,
        cantidad: 1,
        subtotal: 4200.00
      }
    ]
  },
  {
    _id: 17,
    fecha: new Date('2024-11-07 23:33:27'),
    motivo: "La mesa estaba rota en el momento de llegada.",
    estado: "Pendiente",
    total: 1500.00,
    id_usuario: 2,
    id_carrito: 17,
    devoluciones_carrito: [
      {
        id_producto: 17,
        cantidad: 1,
        subtotal: 1500.00
      }
    ]
  },
  {
    _id: 18,
    fecha: new Date('2024-11-07 23:33:27'),
    motivo: "La silla tenía un defecto en la base.",
    estado: "Pendiente",
    total: 1200.00,
    id_usuario: 3,
    id_carrito: 18,
    devoluciones_carrito: [
      {
        id_producto: 18,
        cantidad: 1,
        subtotal: 1200.00
      }
    ]
  },
  {
    _id: 19,
    fecha: new Date('2024-11-07 23:33:27'),
    motivo: "El sofá tenía manchas.",
    estado: "Pendiente",
    total: 8500.00,
    id_usuario: 4,
    id_carrito: 19,
    devoluciones_carrito: [
      {
        id_producto: 19,
        cantidad: 1,
        subtotal: 8500.00
      }
    ]
  },
  {
    _id: 20,
    fecha: new Date('2024-11-07 23:33:27'),
    motivo: "La lámpara no funcionaba.",
    estado: "Pendiente",
    total: 1800.00,
    id_usuario: 5,
    id_carrito: 20,
    devoluciones_carrito: [
      {
        id_producto: 20,
        cantidad: 1,
        subtotal: 1800.00
      }
    ]
  }
]);