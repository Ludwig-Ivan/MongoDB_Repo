use('Furniview');

db.Proveedores.insertOne(
    {
        nombre: 'Ludwig Ivan Ortiz Sierra',
        contacto_nombre: 'Ludwig Ivan',
        telefono: '353-101-8343',
        email: 'ivansierras11@gmail.com',
        contrasena: '123456789',
        direccion: 'Frank Moreno 4B, La Muda',
        ciudad: 'Sahuayo',
        estado: 'Michoacan',
        cp: '59023',
        estado_proveedor: true,
        fecha_registro: new Date(),
        fecha_ultima_actualizacion: new Date(),
        website: 'www.google.com',
        tipo: 'Fabricante',
    }
)