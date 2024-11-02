db.Devoluciones.insertMany([
    { fecha: new Date('2024-09-01'), total: 1500.00, fecha_fin_dev: new Date('2024-09-10'), id_usuario: ObjectId() },
    { fecha: new Date('2024-09-02'), total: 850.00, fecha_fin_dev: new Date('2024-09-12'), id_usuario: ObjectId() },
    { fecha: new Date('2024-09-03'), total: 3200.00, fecha_fin_dev: new Date('2024-09-15'), id_usuario: ObjectId() },
    { fecha: new Date('2024-09-04'), total: 1800.00, fecha_fin_dev: new Date('2024-09-18'), id_usuario: ObjectId() },
    { fecha: new Date('2024-09-05'), total: 450.00, fecha_fin_dev: new Date('2024-09-20'), id_usuario: ObjectId() },
    { fecha: new Date('2024-09-06'), total: 5000.00, fecha_fin_dev: new Date('2024-09-25'), id_usuario: ObjectId() },
    { fecha: new Date('2024-09-07'), total: 2200.00, fecha_fin_dev: new Date('2024-09-26'),  id_usuario: ObjectId() },
    { fecha: new Date('2024-09-08'), total: 750.00, fecha_fin_dev: new Date('2024-09-29'), id_usuario: ObjectId() },
    { fecha: new Date('2024-09-09'), total: 3900.00, fecha_fin_dev: new Date('2024-09-30'), id_usuario: ObjectId() },
    { fecha: new Date('2024-09-10'), total: 1200.00, fecha_fin_dev: new Date('2024-10-01'), id_usuario: ObjectId() },
    { fecha: new Date('2024-09-11'), total: 1700.00, fecha_fin_dev: new Date('2024-10-02'), id_usuario: ObjectId() },
    { fecha: new Date('2024-09-12'), total: 800.00, fecha_fin_dev: new Date('2024-10-03'), id_usuario: ObjectId() },
    { fecha: new Date('2024-09-13'), total: 2700.00, fecha_fin_dev: new Date('2024-10-05'), id_usuario: ObjectId() },
    { fecha: new Date('2024-09-14'), total: 6000.00, fecha_fin_dev: new Date('2024-10-06'), id_usuario: ObjectId() },
    { fecha: new Date('2024-09-15'), total: 2200.00, fecha_fin_dev: new Date('2024-10-07'), id_usuario: ObjectId() },
    { fecha: new Date('2024-09-16'), total: 450.00, fecha_fin_dev: new Date('2024-10-09'), id_usuario: ObjectId() },
    { fecha: new Date('2024-09-17'), total: 2800.00, fecha_fin_dev: new Date('2024-10-11'), id_usuario: ObjectId() },
    { fecha: new Date('2024-09-18'), total: 1300.00, fecha_fin_dev: new Date('2024-10-12'), id_usuario: ObjectId() },
    { fecha: new Date('2024-09-19'), total: 3500.00, fecha_fin_dev: new Date('2024-10-13'), id_usuario: ObjectId() },
    { fecha: new Date('2024-09-20'), total: 1900.00, fecha_fin_dev: new Date('2024-10-15'), id_usuario: ObjectId() }
  ]);

  db.Devoluciones.find()