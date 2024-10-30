use('Furniview');

const can_proveedores = db.Proveedores.find().count();
console.log('Proveedores: ' + can_proveedores + ' registros');
//db.Proveedores.deleteMany({});

const can_carrito = db.Carrito.find().count();
console.log('Carrito: ' + can_carrito + ' registros');
//db.Carrito.deleteMany({});

const can_categorias = db.Categorias.find().count();
console.log('Categorias: ' + can_categorias + ' registros');
//db.Categorias.deleteMany({});

const can_envios = db.Envios.find().count();
console.log('Envios: ' + can_envios + ' registros');
//db.Envios.deleteMany({});

const can_favoritos = db.Favoritos.find().count();
console.log('Favoritos: ' + can_favoritos + ' registros');
//db.Favoritos.deleteMany({});

const can_historial = db.Historial_Busqueda.find().count();
console.log('Historial: ' + can_historial + ' registros');
//db.Historial_Busqueda.deleteMany({});

const can_pagos = db.Pagos.find().count();
console.log('Pagos: ' + can_pagos + ' registros');
//db.Pagos.deleteMany({});

const can_tickets = db.Tickets_Soporte.find().count();
console.log('Tickets: ' + can_tickets + ' registros');
//db.Tickets_Soporte.deleteMany({});

db.getCollectionNames()