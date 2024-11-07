use('Furniview');

db.Categorias.insertMany([
    {
        _id: ObjectId('000000000000000000000000'),
        nombre: 'Mesas',
        descripcion: 'Categoria para juntar todos los productos que son variantes de mesas',
        estado: true,
        fecha_creacion: new Date(),
        imagen_url: null,
        id_categoria_padre: null,
    },
    {
        _id: ObjectId('000000000000000000000001'),
        nombre: 'Sillas',
        descripcion: 'Categoria para juntar todos los productos que son variantes de sillas',
        estado: false,
        fecha_creacion: new Date(),
        imagen_url: null,
        id_categoria_padre: ObjectId('000000000000000000000000'),
    },
    {
        _id: ObjectId('000000000000000000000002'),
        nombre: 'Comedor',
        descripcion: 'Categoria para juntar todos los productos que son variantes de comedor',
        estado: true,
        fecha_creacion: new Date(),
        imagen_url: null,
        id_categoria_padre: null,
    },
    {
        _id: ObjectId('000000000000000000000003'),
        nombre: 'Bancos',
        descripcion: 'Categoria para juntar todos los productos que son variantes de Bancos',
        estado: true,
        fecha_creacion: new Date(),
        imagen_url: null,
        id_categoria_padre: ObjectId('000000000000000000000002'),
    },
    {
        _id: ObjectId('000000000000000000000004'),
        nombre: 'Puertas',
        descripcion: 'Categoria para juntar todos los productos que son variantes de Puertas',
        estado: false,
        fecha_creacion: new Date(),
        imagen_url: null,
        id_categoria_padre: null,
    },
]);