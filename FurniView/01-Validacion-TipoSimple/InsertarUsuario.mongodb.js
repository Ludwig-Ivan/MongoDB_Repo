//Usamos la base de datos Furniview
use('Furniview');

//Seleccionamos la collecion Usuarios y insertamos el siguiente documento
db.Usuarios.insertOne(
    {
        nombre: 'Ludwig Ivan Ortiz Sierra',
        email: 'ivansierras11@gmail.com',
        contrasena: '123456789',
        direccion: 'Frank Moreno 4B, La Muda',
        telefono: '353-101-8343',
        fecha_registro: new Date(),
        rol: 'Cliente',
        estado: 'Michoacan',
        ciudad: 'Sahuayo',
        fecha_nacimiento: '01/01/2000',
        CURP: '123456789poiuytrewq',
        fecha_ultimo_acceso: new Date(),
        foto_de_perfil: 'www.google.com',
    }
)