use('Furniview');

const can_proveedores = db.Proveedores.find().count();
if (can_proveedores != 0)
    console.log('Proveedores: ' + can_proveedores + ' registros');

const can_carrito = db.Carrito.find().count();
if (can_carrito != 0)
    console.log('Carrito: ' + can_carrito + ' registros');

const can_categorias = db.Categorias.find().count();
if (can_categorias != 0)
    console.log('Categorias: ' + can_categorias + ' registros');

const can_envios = db.Envios.find().count();
if (can_envios != 0)
    console.log('Envios: ' + can_envios + ' registros');

const can_favoritos = db.Favoritos.find().count();
if (can_favoritos != 0)
    console.log('Favoritos: ' + can_favoritos + ' registros');

const can_historial = db.Historial_Busqueda.find().count();
if (can_historial != 0)
    console.log('Historial: ' + can_historial + ' registros');

const can_pagos = db.Pagos.find().count();
if (can_pagos != 0)
    console.log('Pagos: ' + can_pagos + ' registros');

const can_tickets = db.Tickets_Soporte.find().count();
if (can_tickets != 0)
    console.log('Tickets: ' + can_tickets + ' registros');

const can_categoria_tickets = db.Categoria_Tickets.find().count();
if (can_categoria_tickets != 0)
    console.log('Categoria Tickets: ' + can_categoria_tickets + ' registros');

const can_ofertas = db.Ofertas.find().count();
if (can_ofertas != 0)
    console.log('Ofertas: ' + can_ofertas + ' registros');

const can_productos = db.Productos.find().count();
if (can_productos != 0)
    console.log('Productos: ' + can_productos + ' registros');

const can_devoluciones = db.Devoluciones.find().count();
if (can_devoluciones != 0)
    console.log('Devoluciones: ' + can_devoluciones + ' registros');

const can_resenas = db.Resenas.find().count();
if (can_resenas != 0)
    console.log('Resenas: ' + can_resenas + ' registros');

const can_usuarios = db.Usuarios.find().count();
if (can_usuarios != 0)
    console.log('Usuarios: ' + can_usuarios + ' registros');

db.getCollectionNames()