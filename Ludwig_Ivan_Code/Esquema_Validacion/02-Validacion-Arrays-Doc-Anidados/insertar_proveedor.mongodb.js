//? Usamos la base de datos Furniview
use('Furniview');

//? Seleccionamos la collecion Proveedores y insertamos el siguiente documento
db.Proveedores.insertOne(
    {
        nombre: 'Ludwig Ivan Ortiz Sierra',
        contacto_nombre: 'Ludwig Ivan',
        //? Telefono acepta un arreglo con maximo 3 items| minimo 1
        telefono: ['353-101-8343'],
        email: 'ivansierras11@gmail.com',
        contrasena: '123456789',
        //? direccion guarde dentro de si un conjunto de datos que lo conforman
        direccion: {
            calle: 'Frank Moreno 4B',
            colonia: 'La muda',
            ciudad: 'Sahuayo',
            estado: 'Michoacan',
            cp: '59023',
        },
        estado_proveedor: true,
        fecha_registro: new Date(),
        fecha_ultima_actualizacion: new Date(),
        website: 'www.google.com',
        tipo: 'Fabricante',
    }
)