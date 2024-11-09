use('Furniview');
//? Registros Listos
db.Proveedores.insertMany([
    {
        _id: 1,
        nombre: 'Ludwig Ivan Ortiz Sierra',
        contacto_nombre: 'Ludwig Ivan',
        telefono: '353-101-8343',
        correo: 'ivansierras11@gmail.com',
        contrasena: '123456789',
        direccion: {
            calle: 'Frank Moreno 4B',
            colonia: 'La Muda',
            ciudad: 'Sahuayo',
            estado: 'Michoacan',
            cp: '59023'
        },
        estado_proveedor: true,
        fecha_registro: new Date('2024-11-07 23:01:42'),
        fecha_ultima_actualizacion: new Date('2024-11-07 23:01:42'),
        website: 'https:\/\/github.com\/Ludwig-Ivan',
        tipo: 'Fabricante'
    },
    {
        _id: 2,
        nombre: 'Sergio Octavio Cervantes Mujica',
        contacto_nombre: 'ElSeco',
        telefono: '390-122-1232',
        correo: 'elseco12@gmail.com',
        contrasena: '123456789',
        direccion: {
            calle: 'Frank Esquino 4B',
            colonia: 'La Mocha',
            ciudad: 'Cojumatlan',
            estado: 'Michoacan',
            cp: '59013'
        },
        estado_proveedor: true,
        fecha_registro: new Date('2024-11-07 23:01:42'),
        fecha_ultima_actualizacion: new Date('2024-11-07 23:01:42'),
        website: 'https:\/\/github.com\/',
        tipo: 'Mayorista'
    },
    {
        _id: 3,
        nombre: 'Daniel Villasenor',
        contacto_nombre: 'El Altisimo',
        telefono: '564-234-1234',
        correo: 'villasenor@gmail.com',
        contrasena: '123456789',
        direccion: {
            calle: 'juarez 4B',
            colonia: 'Las Brisas',
            ciudad: 'Sahuayo',
            estado: 'Michoacan',
            cp: '59023'
        },
        estado_proveedor: true,
        fecha_registro: new Date('2024-11-07 23:01:42'),
        fecha_ultima_actualizacion: new Date('2024-11-07 23:01:42'),
        website: 'https:\/\/github.com\/',
        tipo: 'Distribuidor'
    },
    {
        _id: 4,
        nombre: 'Jesus Alfonso Cuevas Avila',
        contacto_nombre: 'Poncho',
        telefono: '938-234-234',
        correo: 'poncho@gmail.com',
        contrasena: '123456789',
        direccion: {
            calle: 'Luis antonio 15B',
            colonia: 'Las Brisas',
            ciudad: 'Sahuayo',
            estado: 'Michoacan',
            cp: '59023'
        },
        estado_proveedor: true,
        fecha_registro: new Date('2024-11-07 23:01:42'),
        fecha_ultima_actualizacion: new Date('2024-11-07 23:01:42'),
        website: 'https:\/\/github.com\/',
        tipo: 'Mayorista'
    },
    {
        _id: 5,
        nombre: 'Emmanuel Saladana Alvarez',
        contacto_nombre: 'Manny',
        telefono: '909-233-3423',
        correo: 'salem@gmail.com',
        contrasena: '123456789',
        direccion: {
            calle: 'sepacho 15B',
            colonia: 'Las risas',
            ciudad: 'tzitzuntzan',
            estado: 'Michoacan',
            cp: '59023'
        },
        estado_proveedor: true,
        fecha_registro: new Date('2024-11-07 23:01:42'),
        fecha_ultima_actualizacion: new Date('2024-11-07 23:01:42'),
        website: 'https:\/\/github.com\/',
        tipo: 'Fabricante'
    }
])