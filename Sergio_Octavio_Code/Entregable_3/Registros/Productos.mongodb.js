use('Furniview');

db.Productos.insertMany([
  {
    nombre: "Sofá Moderno",
    descripcion: "Sofá de tres plazas de tela",
    precio: 8500.00,
    stock: 10,
    estado: "disponible",
    fecha_de_creacion: new Date("2024-01-15"),
    fecha_de_actualizacion: new Date("2024-06-20"),
    imagenURL: "sofa_moderno.jpg",
    peso: 20,
    dimensiones: "2m x 1m x 1m",
    valoracion_promedio: 4.5,
    cantidad_valoraciones: 120,
    tags: "sala, moderno, cómodo",
    categorias: [ObjectId(), ObjectId()],
    proveedor: ObjectId()
  },
  {
    _id: ObjectId(),
    nombre: "Mesa de Jardín",
    descripcion: "Mesa para exteriores de madera",
    precio: 4500.00,
    stock: 15,
    estado: "disponible",
    fecha_de_creacion: new Date("2024-03-05"),
    fecha_de_actualizacion: new Date("2024-07-22"),
    imagenURL: "mesa_jardin.jpg",
    peso: 18,
    dimensiones: "1.5m x 0.8m x 0.75m",
    valoracion_promedio: 4.0,
    cantidad_valoraciones: 80,
    tags: "exterior, jardín, resistente",
    categorias: [ObjectId(), ObjectId()],
    proveedor: ObjectId()
  },
  {
    nombre: "Cama King Size",
    descripcion: "Cama grande de madera con cabecera",
    precio: 12000.00,
    stock: 5,
    estado: "disponible",
    fecha_de_creacion: new Date("2024-04-10"),
    fecha_de_actualizacion: new Date("2024-08-15"),
    imagenURL: "cama_king.jpg",
    peso: 30,
    dimensiones: "2m x 2m x 1.2m",
    valoracion_promedio: 4.7,
    cantidad_valoraciones: 150,
    tags: "dormitorio, grande, cómoda",
    categorias: [ObjectId(), ObjectId()],
    proveedor: ObjectId()
  }
]);