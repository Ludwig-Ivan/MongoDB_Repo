use('Furniview');

db.Categorias.insertMany([
    {
        nombre: 'Mesas',
        descripcion: 'Categoria para juntar todos los productos que son variantes de mesas',
        estado: true,
        fecha_creacion: new Date(),
        imagen_url: null,
        id_categoria_padre: null,
    },
    {
        nombre: 'Sillas',
        descripcion: 'Categoria para juntar todos los productos que son variantes de sillas',
        estado: false,
        fecha_creacion: new Date(),
        imagen_url: null,
        id_categoria_padre: ObjectId(),
    },
    {
        nombre: 'Comedor',
        descripcion: 'Categoria para juntar todos los productos que son variantes de comedor',
        estado: true,
        fecha_creacion: new Date(),
        imagen_url: null,
        id_categoria_padre: null,
    },
    {
        nombre: 'Bancos',
        descripcion: 'Categoria para juntar todos los productos que son variantes de Bancos',
        estado: true,
        fecha_creacion: new Date(),
        imagen_url: null,
        id_categoria_padre: ObjectId(),
    },
    {
        nombre: 'Puertas',
        descripcion: 'Categoria para juntar todos los productos que son variantes de Puertas',
        estado: false,
        fecha_creacion: new Date(),
        imagen_url: null,
        id_categoria_padre: null,
    },
]);