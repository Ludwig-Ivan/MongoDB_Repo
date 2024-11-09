use('Furniview');

db.Categorias.insertMany([
    {
        _id: 1,
        nombre: 'Mesas',
        descripcion: 'Categoria para juntar todos los productos que son variantes de mesas',
        estado: true,
        fecha_creacion: new Date('2024-11-07 23:05:35'),
        imagen_url: ' https:\/\/image.com'
    },
    {
        _id: 2,
        nombre: 'Sillas',
        descripcion: 'Categoria para juntar todos los productos que son variantes de sillas',
        estado: false,
        fecha_creacion: new Date('2024-11-07 23:05:35'),
        imagen_url: 'https:\/\/image.com',
        id_categoria_padre: 1
    },
    {
        _id: 3,
        nombre: 'Comedor',
        descripcion: 'Categoria para juntar todos los productos que son variantes de comedor',
        estado: true,
        fecha_creacion: new Date('2024-11-07 23:05:35'),
        imagen_url: 'https:\/\/image.com'
    },
    {
        _id: 4,
        nombre: 'Bancos',
        descripcion: 'Categoria para juntar todos los productos que son variantes de Bancos',
        estado: true,
        fecha_creacion: new Date('2024-11-07 23:05:35'),
        imagen_url: 'https:\/\/image.com',
        id_categoria_padre: 3
    },
    {
        _id: 5,
        nombre: 'Puertas',
        descripcion: 'Categoria para juntar todos los productos que son variantes de Puertas',
        estado: false,
        fecha_creacion: new Date('2024-11-07 23:05:35'),
        imagen_url: 'https:\/\/image.com'
    }
]);