db.productos.insertMany([
    {
      nombre: 'Sofá Moderno',
      descripcion: 'Sofá de tres plazas',
      tipo: 'interior',
      dimensiones: '2m x 1m x 1m',
      material: 'tela',
      precio: 8500.00,
      imagenURL: 'sofa_moderno.jpg',
      id_categorias: [ObjectId()],
      id_proveedor: ObjectId(),
      id_oferta: ObjectId()
    },
    {
      nombre: 'Mesa de Jardín',
      descripcion: 'Mesa para exteriores',
      tipo: 'exterior',
      dimensiones: '1.5m x 0.8m x 0.75m',
      material: 'madera',
      precio: 4500.00,
      imagenURL: 'mesa_jardin.jpg',
      id_categorias: [ObjectId()],
      id_proveedor: ObjectId(),
      id_oferta: ObjectId()
    },
    {
      nombre: 'Cama King Size',
      descripcion: 'Cama grande con cabecera',
      tipo: 'interior',
      dimensiones: '2m x 2m x 1.2m',
      material: 'madera',
      precio: 12000.00,
      imagenURL: 'cama_king.jpg',
      id_categorias: [ObjectId()],
      id_proveedor: ObjectId(),
      id_oferta: ObjectId()
    },
    {
      nombre: 'Silla de Comedor',
      descripcion: 'Silla con cojín',
      tipo: 'interior',
      dimensiones: '0.5m x 0.5m x 1m',
      material: 'metal',
      precio: 1200.00,
      imagenURL: 'silla_comedor.jpg',
      id_categorias: [ObjectId()],
      id_proveedor: ObjectId(),
      id_oferta: ObjectId()
    },
    {
      nombre: 'Tumbona de Piscina',
      descripcion: 'Tumbona ajustable',
      tipo: 'exterior',
      dimensiones: '2m x 0.75m x 0.6m',
      material: 'plástico',
      precio: 3200.00,
      imagenURL: 'tumbona_piscina.jpg',
      id_categorias: [ObjectId()],
      id_proveedor: ObjectId(),
      id_oferta: ObjectId()
    },
    {
      nombre: 'Lámpara de Pie',
      descripcion: 'Lámpara moderna',
      tipo: 'interior',
      dimensiones: '1.8m x 0.5m',
      material: 'metal',
      precio: 1800.00,
      imagenURL: 'lampara_pie.jpg',
      id_categorias: [ObjectId()],
      id_proveedor: ObjectId(),
      id_oferta: ObjectId()
    },
    {
      nombre: 'Escritorio',
      descripcion: 'Escritorio para oficina',
      tipo: 'interior',
      dimensiones: '1.5m x 0.7m x 0.75m',
      material: 'madera',
      precio: 5000.00,
      imagenURL: 'escritorio_oficina.jpg',
      id_categorias: [ObjectId()],
      id_proveedor: ObjectId(),
      id_oferta: ObjectId()
    },
    {
      nombre: 'Parasol',
      descripcion: 'Parasol grande',
      tipo: 'exterior',
      dimensiones: '3m de diámetro',
      material: 'tela',
      precio: 2500.00,
      imagenURL: 'parasol_exterior.jpg',
      id_categorias: [ObjectId()],
      id_proveedor: ObjectId(),
      id_oferta: ObjectId()
    },
    {
      nombre: 'Cojín Decorativo',
      descripcion: 'Cojín de algodón',
      tipo: 'interior',
      dimensiones: '0.4m x 0.4m',
      material: 'algodón',
      precio: 350.00,
      imagenURL: 'cojin_decorativo.jpg',
      id_categorias: [ObjectId()],
      id_proveedor: ObjectId(),
      id_oferta: ObjectId()
    },
    {
      nombre: 'Banco Alto',
      descripcion: 'Banco para bar',
      tipo: 'interior',
      dimensiones: '0.4m x 0.4m x 1m',
      material: 'madera',
      precio: 900.00,
      imagenURL: 'banco_bar.jpg',
      id_categorias: [ObjectId()],
      id_proveedor: ObjectId(),
      id_oferta: ObjectId()
    },
    {
      nombre: 'Mesa de Centro',
      descripcion: 'Mesa de cristal',
      tipo: 'interior',
      dimensiones: '1m x 1m x 0.4m',
      material: 'cristal',
      precio: 3200.00,
      imagenURL: 'mesa_centro.jpg',
      id_categorias: [ObjectId()],
      id_proveedor: ObjectId(),
      id_oferta: ObjectId()
    },
    {
      nombre: 'Estantería',
      descripcion: 'Estantería modular',
      tipo: 'interior',
      dimensiones: '2m x 1m x 0.3m',
      material: 'madera',
      precio: 6000.00,
      imagenURL: 'estanteria_modular.jpg',
      id_categorias: [ObjectId()],
      id_proveedor: ObjectId(),
      id_oferta: ObjectId()
    },
    {
      nombre: 'Hamaca',
      descripcion: 'Hamaca de tela resistente',
      tipo: 'exterior',
      dimensiones: '2m x 1m',
      material: 'tela',
      precio: 1800.00,
      imagenURL: 'hamaca_exterior.jpg',
      id_categorias: [ObjectId()],
      id_proveedor: ObjectId(),
      id_oferta: ObjectId()
    },
    {
      nombre: 'Butaca',
      descripcion: 'Butaca reclinable',
      tipo: 'interior',
      dimensiones: '1.2m x 0.8m x 1m',
      material: 'cuero',
      precio: 7500.00,
      imagenURL: 'butaca_reclinable.jpg',
      id_categorias: [ObjectId()],
      id_proveedor: ObjectId(),
      id_oferta: ObjectId()
    },
    {
      nombre: 'Mesa Auxiliar',
      descripcion: 'Mesa pequeña de apoyo',
      tipo: 'interior',
      dimensiones: '0.5m x 0.5m x 0.6m',
      material: 'madera',
      precio: 1500.00,
      imagenURL: 'mesa_auxiliar.jpg',
      id_categorias: [ObjectId()],
      id_proveedor: ObjectId(),
      id_oferta: ObjectId()
    },
    {
      nombre: 'Silla Plegable',
      descripcion: 'Silla portátil',
      tipo: 'exterior',
      dimensiones: '0.6m x 0.6m x 0.9m',
      material: 'aluminio',
      precio: 1200.00,
      imagenURL: 'silla_plegable.jpg',
      id_categorias: [ObjectId()],
      id_proveedor: ObjectId(),
      id_oferta: ObjectId()
    },
])