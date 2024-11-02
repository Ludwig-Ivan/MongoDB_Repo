db.Ofertas.insertMany([
    {
      descripcion: 'Descuento de verano',
      tipo: 'porcentaje',
      fecha_inicio: new Date('2024-06-01'),
      fecha_fin: new Date('2024-08-31'),
      valor: 0.15
    },
    {
      descripcion: 'Oferta de lanzamiento',
      tipo: 'cantidad fija',
      fecha_inicio: new Date('2024-01-01'),
      fecha_fin: new Date('2024-01-31'),
      valor: 500.00
    },
    {
      descripcion: 'Descuento de fin de año',
      tipo: 'porcentaje',
      fecha_inicio: new Date('2024-12-01'),
      fecha_fin: new Date('2024-12-31'),
      valor: 0.20
    },
    {
      descripcion: 'Oferta especial de primavera',
      tipo: 'cantidad fija',
      fecha_inicio: new Date('2024-03-15'),
      fecha_fin: new Date('2024-04-15'),
      valor: 300.00
    },
    {
      descripcion: 'Promoción por aniversario',
      tipo: 'porcentaje',
      fecha_inicio: new Date('2024-09-01'),
      fecha_fin: new Date('2024-09-30'),
      valor: 0.10
    }
  ]);