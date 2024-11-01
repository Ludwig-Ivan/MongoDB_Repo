use('Furniview')

db.Usuarios.insertMany([
    {
      nombre: "Juan Pérez",
      correo: "juan.perez@example.com",
      contrasena: "JuanPerez123",
      locaciones: {
        nombre: "Casa",
        direccion: "Calle Falsa 123",
        ciudad: "Ciudad de México",
        estado: "CDMX",
        cp: "01000",
        pais: "México",
        telefono: ["+52 55 1234 5678"],
        fecha_registro: new Date("2024-01-01"),
        estado_locacion: true,
        intrucciones_entrega: "Dejar en la entrada",
        predeterminada: true
      },
      telefono: ["+52 55 1234 5678", "+52 55 8765 4321"],
      fecha_registro: new Date("2024-01-01"),
      rol: "Cliente",
      fecha_nacimiento: "1990-05-15",
      CURP: "PEJU900515HDFRNS03",
      fecha_ultimo_acceso: new Date("2024-11-01"),
      foto_de_perfil: "https://example.com/perfil/juan.jpg"
    },
    {
      nombre: "Ana López",
      correo: "ana.lopez@example.com",
      contrasena: "AnaLopez456",
      locaciones: {
        nombre: "Trabajo",
        direccion: "Avenida Siempre Viva 742",
        ciudad: "Guadalajara",
        estado: "Jalisco",
        cp: "44100",
        pais: "México",
        telefono: ["+52 33 1234 5678"],
        fecha_registro: new Date("2024-02-15"),
        estado_locacion: true,
        intrucciones_entrega: "Entregar en recepción",
        predeterminada: false
      },
      telefono: ["+52 33 1234 5678"],
      fecha_registro: new Date("2024-02-15"),
      rol: "Cliente",
      fecha_nacimiento: "1985-08-25",
      CURP: "LOAN850825HGRLNR09",
      fecha_ultimo_acceso: new Date("2024-10-28"),
      foto_de_perfil: "https://example.com/perfil/ana.jpg"
    },
    {
      nombre: "Carlos Méndez",
      correo: "carlos.mendez@example.com",
      contrasena: "CarlosMendez789",
      locaciones: {
        nombre: "Departamento",
        direccion: "Calle del Sol 456",
        ciudad: "Monterrey",
        estado: "Nuevo León",
        cp: "64000",
        pais: "México",
        telefono: ["+52 81 1234 5678"],
        fecha_registro: new Date("2024-03-10"),
        estado_locacion: true,
        intrucciones_entrega: "Llamar al llegar",
        predeterminada: true
      },
      telefono: ["+52 81 1234 5678", "+52 81 8765 4321"],
      fecha_registro: new Date("2024-03-10"),
      rol: "Administrador",
      fecha_nacimiento: "1978-02-12",
      CURP: "MECA780212HNLNRR02",
      fecha_ultimo_acceso: new Date("2024-10-30"),
      foto_de_perfil: "https://example.com/perfil/carlos.jpg"
    }
  ]);