use('Furniview')

db.Categoria_Tickets.insertMany([
        {
          tipo: "Consulta",
          descripcion: "El usuario tiene una duda sobre el uso del producto."
        },
        {
          tipo: "Incidencia",
          descripcion: "El usuario reporta un problema técnico con el producto."
        },
        {
          tipo: "Reclamación",
          descripcion: "El usuario presenta una queja formal sobre el servicio."
        },
        {
          tipo: "Sugerencia",
          descripcion: "El usuario sugiere una mejora o una nueva característica."
        },
        {
          tipo: "Agradecimiento",
          descripcion: "El usuario agradece el buen servicio recibido."
        }
  ]);