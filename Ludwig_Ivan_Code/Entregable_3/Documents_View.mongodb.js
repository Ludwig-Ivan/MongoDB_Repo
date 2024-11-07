use('Furniview');

const can_proveedores = db.Proveedores.find().count();
console.log('Proveedores: ' + can_proveedores + ' registros');

const can_carrito = db.Carrito.find().count();
console.log('Carrito: ' + can_carrito + ' registros');

const can_categorias = db.Categorias.find().count();
console.log('Categorias: ' + can_categorias + ' registros');

const can_envios = db.Envios.find().count();
console.log('Envios: ' + can_envios + ' registros');

const can_favoritos = db.Favoritos.find().count();
console.log('Favoritos: ' + can_favoritos + ' registros');

const can_historial = db.Historial_Busqueda.find().count();
console.log('Historial: ' + can_historial + ' registros');

const can_pagos = db.Pagos.find().count();
console.log('Pagos: ' + can_pagos + ' registros');

const can_tickets = db.Tickets_Soporte.find().count();
console.log('Tickets: ' + can_tickets + ' registros');

db.getCollectionNames()