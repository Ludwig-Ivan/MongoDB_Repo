use('Furniview')
//? Los registros se insertan de manera correcta
db.Categoria_Tickets.insertMany([
  {
    _id: 1,
    tipo: "Consulta",
    descripcion: "El usuario tiene una duda sobre el uso del producto."
  },
  {
    _id: 2,
    tipo: "Incidencia",
    descripcion: "El usuario reporta un problema técnico con el producto."
  },
  {
    _id: 3,
    tipo: "Reclamación",
    descripcion: "El usuario presenta una queja formal sobre el servicio."
  },
  {
    _id: 4,
    tipo: "Sugerencia",
    descripcion: "El usuario sugiere una mejora o una nueva característica."
  },
  {
    _id: 5,
    tipo: "Agradecimiento",
    descripcion: "El usuario agradece el buen servicio recibido."
  }
]);