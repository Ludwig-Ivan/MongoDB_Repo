use('Furniview')
//? Los registros se insertan de manera correcta
db.Categoria_Tickets.insertMany([
  {
    _id: ObjectId("000000000000000000000000"),
    tipo: "Consulta",
    descripcion: "El usuario tiene una duda sobre el uso del producto."
  },
  {
    _id: ObjectId("000000000000000000000001"),
    tipo: "Incidencia",
    descripcion: "El usuario reporta un problema técnico con el producto."
  },
  {
    _id: ObjectId("000000000000000000000002"),
    tipo: "Reclamación",
    descripcion: "El usuario presenta una queja formal sobre el servicio."
  },
  {
    _id: ObjectId("000000000000000000000003"),
    tipo: "Sugerencia",
    descripcion: "El usuario sugiere una mejora o una nueva característica."
  },
  {
    _id: ObjectId("000000000000000000000004"),
    tipo: "Agradecimiento",
    descripcion: "El usuario agradece el buen servicio recibido."
  }
]);