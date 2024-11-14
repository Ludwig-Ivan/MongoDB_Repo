-- | Transaccion 1 | --
-- Cambiar el peso de producto, cambia el peso de envios
begin transaction
update Productos set peso=40 where Productos.id=5
update Envios set peso+=40 where Envios.id_carrito=2
commit

rollback

select * from Productos where Productos.id=5
select * from Envios where Envios.id_carrito=2

-- | Transaccion 2 | --
-- Cambia el stock de producto cada que se agrega a carrito
begin transaction
insert into Carrito_Producto (cantidad, subtotal,id_carrito, id_producto) values (1,180,2,5);
update Productos set stock-=1 where Productos.id=5

commit

rollback

select * from Productos where Productos.id=5
select * from Carrito_Producto where id_carrito=2 and id_producto=5 and subtotal=180 and cantidad=1

-- | Transaccion 3 | --
-- Cambia el stock de producto cada que se devuelve un producto
begin transaction
insert into Devoluciones_Carrito (cantidad,subtotal,id_devolucion,id_producto) values (2,360,3,5);
update Productos set stock+=2 where Productos.id=5

commit

rollback

select * from Productos where Productos.id=5
select * from Devoluciones_Carrito where id_devolucion=3 and id_producto=5 and subtotal=360 and cantidad=2

-- | Transaccion 4 | --
-- Cada que se consume una oferta se cambia su uso
begin transaction
update Ofertas set usos_actuales+=1 where id=5;

commit 

rollback

select * from Ofertas where id=5

-- | Transaccion 5 | --
-- Agregacion de producto a favoritos
begin transaction
insert into Favoritos (id_usuario,id_producto) values (2,5)

commit

rollback

select * from Favoritos where id_usuario=2 and id_producto=5