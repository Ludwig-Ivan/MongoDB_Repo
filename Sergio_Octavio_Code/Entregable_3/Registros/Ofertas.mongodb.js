use('Furniview');

db.Ofertas.insertMany([
  {
    nombre: "Descuento de Verano",
    descripcion: "Aprovecha un 15% de descuento en productos seleccionados.",
    tipo: "porcentaje",
    valor: 0.15,
    fecha_inicio: new Date(),
    fecha_fin: new Date(),
    estado: "activa",
    codigo_promocional: "VERANO2024",
    condiciones_aplicacion: "Válido en compras superiores a $500.",
    limite_de_uso: 100,
    usos_actuales: 25,
    productos: [ObjectId(), ObjectId()],
    categorias: [ObjectId()],
    usuarios: [ObjectId()],
    proveedores: ObjectId()
  },
  {
    nombre: "Oferta de Lanzamiento",
    descripcion: "Descuento de $500 en el lanzamiento de nuevos productos.",
    tipo: "cantidad fija",
    valor: 500.00,
    fecha_inicio: new Date(),
    fecha_fin: new Date(),
    estado: "activa",
    codigo_promocional: "LANZAMIENTO2024",
    condiciones_aplicacion: "Disponible para los primeros 50 clientes.",
    limite_de_uso: 50,
    usos_actuales: 10,
    productos: [ObjectId(), ObjectId()],
    categorias: [ObjectId()],
    usuarios: [ObjectId()],
    proveedores: ObjectId()
  },
  {
    nombre: "Descuento de Fin de Año",
    descripcion: "Obtén un 20% de descuento en todos los productos.",
    tipo: "porcentaje",
    valor: 0.20,
    fecha_inicio: new Date("2024-08-31"),
    fecha_fin: new Date(),
    estado: "activa",
    codigo_promocional: "FINDEANO2024",
    condiciones_aplicacion: "Aplicable en todos los productos sin excepción.",
    limite_de_uso: 200,
    usos_actuales: 50,
    productos: [ObjectId(), ObjectId()],
    categorias: [ObjectId()],
    usuarios: [ObjectId()],
    proveedores: ObjectId()
  }
]);