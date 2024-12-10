use Furniview

-- | Proceso Almacenado de Agregacion a Carrito | ---
-- Autor: Ludwig Ivan Ortiz Sierra
-- Fecha: 08/12/24
---------------------------------------------------------------

-- El usuario debe poder generar un compra con de los productos que selecciono y agregue a carrito previamente. ---
-- 1. Verificar que el usuario exista
-- 2. Verificar que el producto exista
-- 3. Verificar si el usuario tiene un carrito pendiente
-- 4. Crear un carrito si no existe uno pendiente
-- 5. Verificar si el producto ya esta en el carrito
-- 6. Agregar el producto al carrito si no esta
-- 7. Calcular y actualizar el total del carrito

CREATE PROCEDURE GenerarCompra( 
    @_UsuarioId INT,
    @_ProductoId INT,
    @_Cantidad INT
)AS BEGIN
    SET NOCOUNT ON;

    -- 1. Verificar que el usuario exista
    IF NOT EXISTS (SELECT 1 FROM Usuarios WHERE id = @_UsuarioId)
    BEGIN
        RAISERROR ('El usuario no existe.', 16, 1);
        RETURN;
    END;

    -- 2. Verificar que el producto exista
    IF NOT EXISTS (SELECT 1 FROM Productos WHERE id = @_ProductoId)
    BEGIN
        RAISERROR ('El producto no existe.', 16, 1);
        RETURN;
    END;

    -- 3. Verificar si el usuario tiene un carrito pendiente
    DECLARE @_CarritoId INT;

    SELECT TOP 1 @_CarritoId = id
    FROM Carrito
    WHERE id_usuario = @_UsuarioId AND Estado = 'Pendiente';

    -- 4. Crear un carrito si no existe uno pendiente
    IF @_CarritoId IS NULL
    BEGIN
        INSERT INTO Carrito (id_usuario, fecha_creacion, estado, total)
        VALUES (@_UsuarioId, GETDATE(), 'Pendiente', 0);

        SET @_CarritoId = SCOPE_IDENTITY();
    END;

    -- 5. Verificar si el producto ya esta en el carrito
    DECLARE @_CarritoProductoId INT;

    SELECT @_CarritoProductoId = id
    FROM Carrito_Producto
    WHERE id_carrito = @_CarritoId AND id_producto = @_ProductoId;

    IF @_CarritoProductoId IS NULL
    BEGIN
        -- 6. Agregar el producto al carrito si no esta
        DECLARE @Precio DECIMAL(18, 2), @Oferta DECIMAL(5, 2) = 0;
        SELECT @Precio = Precio
        FROM Productos
        WHERE id = @_ProductoId;

        DECLARE @Subtotal DECIMAL(18, 2) = @_Cantidad * @Precio /* (1 - @Oferta / 100); */

        INSERT INTO Carrito_Producto (id_carrito, id_producto, cantidad, subtotal)
        VALUES (@_CarritoId, @_ProductoId, @_Cantidad, @Subtotal);
    END
    ELSE
    BEGIN
        -- Actualizar la cantidad y subtotal si ya existe en el carrito
        UPDATE Carrito_Producto
        SET Cantidad = Cantidad + @_Cantidad,
            Subtotal = Subtotal + (@_Cantidad * (SELECT Precio FROM Productos WHERE id = @_ProductoId))
        WHERE id = @_CarritoProductoId;
    END;

    -- 7. Calcular y actualizar el total del carrito
    DECLARE @NuevoTotal DECIMAL(18, 2);
    SELECT @NuevoTotal = SUM(subtotal)
    FROM Carrito_Producto
    WHERE id_carrito = @_CarritoId;

    UPDATE Carrito
    SET Total = @NuevoTotal
    WHERE id = @_CarritoId;

    PRINT 'Producto agregado al carrito exitosamente.';
END;

select * from Usuarios where id=1
select * from Productos where id=2
select  * from Carrito where id_usuario=1
select * from Carrito_Producto where id_carrito=11

begin Transaction
execute GenerarCompra 1,2,1

commit

rollback