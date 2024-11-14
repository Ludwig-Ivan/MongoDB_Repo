-- Transaccion 1
-- Guardar Resena de producto
begin transaction
update Resenas set calificacion = 5 where Resenas.id=1
update Productos set valoracion_promedio = 4.5 where Productos.id=15
commit

select * from Resenas where Resenas.id = 1
select * from Productos where Productos.id = 15

-- Transaccion 2
-- Insertar o eliminar el carrito cambia el peso del carrito
begin transaction

DELETE FROM Carrito_Producto WHERE id_carrito = 1 AND id_producto = 1;
update Carrito set total = (select coalesce(SUM(subtotal),0) FROM Carrito_Producto WHERE Carrito_Producto.id_carrito = 1) where Carrito.id = 1;

commit

select * from Carrito where Carrito.id = 1
select * from Carrito_Producto where Carrito_Producto.id_carrito = 1

-- Transaccion 3
-- Cambiar el total de carrito cambiando el peso del envio
begin transaction

update Envios set peso = (select coalesce(sum(Productos.peso * Carrito_Producto.cantidad),0) from Carrito_Producto join Productos on Carrito_Producto.id_producto = Productos.id where Carrito_Producto.id_carrito = 1) where id_carrito = 1

commit

select * from Envios where id_carrito = 1

-- Transaccion 4
-- Agregar o eliminar en carrito y cambiar el total de pago

-- Transaccion 5
-- Agregar o eliminar devoluciones cambiando el total de devoluciones