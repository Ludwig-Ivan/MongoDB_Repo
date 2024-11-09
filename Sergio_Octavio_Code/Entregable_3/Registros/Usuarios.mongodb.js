use('Furniview')
//? Registros Listos
db.Usuarios.insertMany([
  {
    _id: 1,
    nombre: "Juan Pérez",
    correo: "juan.perez@example.com",
    contrasena: "JuanPerez123",
    direccion: "Calle Falsa 123",
    telefono: "+52 55 1234 5678",
    fecha_registro: new Date('2024-01-01 00:00:00'),
    rol: "Cliente",
    estado: "Activo",
    fecha_nacimiento: new Date('1990-05-15'),
    curp: "PEJU900515HDFRNS03",
    fecha_ultimo_acceso: new Date('2024-11-01 00:00:00'),
    imagen_perfil: "https:\/\/example.com\/perfil\/juan.jpg",
    locaciones: [
      {
        nombre: "Casa",
        direccion: "Calle Falsa 123",
        ciudad: "Ciudad de México",
        estado: "CDMX",
        cp: "01000",
        pais: "México",
        telefono: "+52 55 1234 5678",
        fecha_registro: new Date('2024-01-01 00:00:00'),
        estado_locacion: true,
        instrucciones_entrega: "Dejar en la entrada",
        preterminada: false
      }
    ]
  },
  {
    _id: 2,
    nombre: "Ana López",
    correo: "ana.lopez@example.com",
    contrasena: "AnaLopez456",
    direccion: "Avenida Siempre Viva 742",
    telefono: "+52 33 1234 5678",
    fecha_registro: new Date('2024-02-15 00:00:00'),
    rol: "Cliente",
    estado: "Activo",
    fecha_nacimiento: new Date('1985-08-25'),
    curp: "LOAN850825HGRLNR09",
    fecha_ultimo_acceso: new Date('2024-10-28 00:00:00'),
    imagen_perfil: "https:\/\/example.com\/perfil\/ana.jpg",
    locaciones: [
      {
        nombre: "Trabajo",
        direccion: "Avenida Siempre Viva 742",
        ciudad: "Guadalajara",
        estado: "Jalisco",
        cp: "44100",
        pais: "México",
        telefono: "+52 33 1234 5678",
        fecha_registro: new Date('2024-02-15 00:00:00'),
        estado_locacion: true,
        instrucciones_entrega: "Entregar en recepción",
        preterminada: false
      }
    ]
  },
  {
    _id: 3,
    nombre: "Carlos Méndez",
    correo: "carlos.mendez@example.com",
    contrasena: "CarlosMendez789",
    direccion: "Calle del Sol 456",
    telefono: "+52 81 1234 5678",
    fecha_registro: new Date('2024-03-10 00:00:00'),
    rol: "Administrador",
    estado: "Activo",
    fecha_nacimiento: new Date('1978-02-12'),
    curp: "MECA780212HNLNRR02",
    fecha_ultimo_acceso: new Date('2024-10-30 00:00:00'),
    imagen_perfil: "https:\/\/example.com\/perfil\/carlos.jpg",
    locaciones: [
      {
        nombre: "Departamento",
        direccion: "Calle del Sol 456",
        ciudad: "Monterrey",
        estado: "Nuevo León",
        cp: "64000",
        pais: "México",
        telefono: "+52 81 1234 5678",
        fecha_registro: new Date('2024-03-10 00:00:00'),
        estado_locacion: true,
        instrucciones_entrega: "Llamar al llegar",
        preterminada: false
      }
    ]
  },
  {
    _id: 4,
    nombre: "María López",
    correo: "maria.lopez@example.com",
    contrasena: "MariaLopez456",
    direccion: "Avenida Siempre Viva 742",
    telefono: "+52 33 1234 5678",
    fecha_registro: new Date('2024-02-15 00:00:00'),
    rol: "Cliente",
    estado: "Activo",
    fecha_nacimiento: new Date('1985-08-25'),
    curp: "LOMA850825MJCLMR05",
    fecha_ultimo_acceso: new Date('2024-11-02 00:00:00'),
    imagen_perfil: "https:\/\/example.com\/perfil\/maria.jpg",
    locaciones: [
      {
        nombre: "Departamento",
        direccion: "Avenida Siempre Viva 742",
        ciudad: "Guadalajara",
        estado: "Jalisco",
        cp: "44100",
        pais: "México",
        telefono: "+52 33 1234 5678",
        fecha_registro: new Date('2024-02-15 00:00:00'),
        estado_locacion: true,
        instrucciones_entrega: "Tocar el timbre dos veces",
        preterminada: true
      }
    ]
  },
  {
    _id: 5,
    nombre: "Carlos Ramírez",
    correo: "carlos.ramirez@example.com",
    contrasena: "CarlosR123",
    direccion: "Blvd. de los Insurgentes 200",
    telefono: "+52 664 123 4567",
    fecha_registro: new Date('2024-03-10 00:00:00'),
    rol: "Cliente",
    estado: "Activo",
    fecha_nacimiento: new Date('1978-11-10'),
    curp: "RACA781110HBCMML03",
    fecha_ultimo_acceso: new Date('2024-11-03 00:00:00'),
    imagen_perfil: "https:\/\/example.com\/perfil\/carlos.jpg",
    locaciones: [
      {
        nombre: "Oficina",
        direccion: "Blvd. de los Insurgentes 200",
        ciudad: "Tijuana",
        estado: "Baja California",
        cp: "22000",
        pais: "México",
        telefono: "+52 664 123 4567",
        fecha_registro: new Date('2024-03-10 00:00:00'),
        estado_locacion: true,
        instrucciones_entrega: "Recepción del edificio",
        preterminada: false
      }
    ]
  }
]);