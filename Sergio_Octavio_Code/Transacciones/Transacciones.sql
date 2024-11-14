-- Transaccion 1
-- Guardar Resena de producto
begin transaction
update Resenas set calificacion = 5 where Resenas.id=1
update Productos set valoracion_promedio = 4.5 where Productos.id=15
commit

select * from Resenas where Resenas.id = 1
select * from Productos where Productos.id = 15

-- Transaccion 2
-- Eliminar el carrito cambia el subtotal y total del carrito
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
-- Cambiar en carrito y cambia el total de pago
begin transaction

update Pagos set monto_total = (select coalesce(sum(subtotal), 0) from Carrito_Producto where id_carrito = 1) where id_carrito = 1;

commit

select * from Pagos where Pagos.id_carrito = 1

-- Transaccion 5
-- Agregar devoluciones cambia el total de devoluciones
begin transaction

insert into Devoluciones_Carrito (cantidad, subtotal, id_devolucion, id_producto) values (1, 100, 1, 15);
update Devoluciones set total = (select coalesce(sum(subtotal), 0) from Devoluciones_Carrito where id_devolucion = 1) where id = 1;

commit

select * from Devoluciones where Devoluciones.id_carrito = 1