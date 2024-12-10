use Furniview

-- | Proceso Almacenado de Devolucion de compra | ---
-- Autor: Sergio Octavio Cervantes Mujica
-- Fecha: 09/12/24
---------------------------------------------------------------

-- El usuario debe poder realizar una devolucion de un compra con los productos que selecciono de una venta anterior. ---
-- 1. Verificar que el usuario exista
-- 2. Verificar que el producto exista
-- 3. Verificar si el usuario compro ese producto en carrito.
-- 4. Realizar devolucion en la tabla devolucion y devolucion carrito multiplicando la cantidad de productos devueltos por el precio unitario.
-- 5. Generar un descuento del 10% en su siguiente compra a ese usuario.


CREATE PROCEDURE DevolverProducto20
    @ID_USUARIO INT,
    @ID_PRODUCTO INT,
    @ID_CARRITO INT,
    @FECHA DATE,
    @MOTIVO VARCHAR(255),
    @CANTIDAD_DEVUELTA INT,
    @FECHA_INICIO DATE,
    @FECHA_FIN DATE,
    @CODIGO_PROMOCIONAL VARCHAR(50)
AS
BEGIN
    -- 1. Verificar que el usuario exista
    IF NOT EXISTS (SELECT 1 FROM Usuarios WHERE id = @ID_USUARIO)
    BEGIN
        PRINT 'El usuario no existe';
        RETURN;
    END

    -- 2. Verificar que el producto exista
    IF NOT EXISTS (SELECT 1 FROM Productos WHERE id = @ID_PRODUCTO)
    BEGIN
        PRINT 'El producto no existe';
        RETURN;
    END

    -- 3. Verificar si el usuario compró ese producto en carrito
    IF NOT EXISTS (SELECT 1 FROM Carrito_Producto 
                   WHERE id_carrito = @ID_CARRITO 
                   AND id_producto = @ID_PRODUCTO)
    BEGIN
        PRINT 'El usuario no compró este producto';
        RETURN;
    END

    -- 4. Realizar la devolución en la tabla Devoluciones y Devoluciones_Carrito
    DECLARE @PRECIO_PRODUCTO DECIMAL(10, 2);
    DECLARE @SUBTOTAL DECIMAL(10, 2);
    SELECT @PRECIO_PRODUCTO = precio 
    FROM Productos 
    WHERE id = @ID_PRODUCTO;
    
    SET @SUBTOTAL = @PRECIO_PRODUCTO * @CANTIDAD_DEVUELTA;

    -- Verificar que el subtotal sea mayor o igual a 0
    IF @SUBTOTAL < 0
    BEGIN
        PRINT 'El subtotal no puede ser negativo';
        RETURN;
    END

    -- Realizar devolución en la tabla Devoluciones
    DECLARE @ID_DEVOLUCION INT;
    DECLARE @DEVOLUCION_IDS TABLE (ID INT);

    INSERT INTO Devoluciones (fecha, motivo, estado, total, id_usuario, id_carrito)
    OUTPUT INSERTED.id INTO @DEVOLUCION_IDS
    VALUES (@FECHA, @MOTIVO, 'Pendiente', @SUBTOTAL, @ID_USUARIO, @ID_CARRITO);

    SELECT @ID_DEVOLUCION = ID FROM @DEVOLUCION_IDS;

    -- Registrar la devolución en Devoluciones_Carrito
    INSERT INTO Devoluciones_Carrito (cantidad, subtotal, id_devolucion, id_producto)
    VALUES (@CANTIDAD_DEVUELTA, @SUBTOTAL, @ID_DEVOLUCION, @ID_PRODUCTO);

    -- 5. Generar un descuento del 10% en su siguiente compra
    DECLARE @ID_PROVEEDOR INT;
    SELECT @ID_PROVEEDOR = id_proveedor 
    FROM Productos 
    WHERE id = @ID_PRODUCTO;

    IF @FECHA_INICIO IS NULL OR @FECHA_FIN IS NULL
    BEGIN
        PRINT 'Las fechas de inicio y fin no pueden ser NULL';
        RETURN;
    END

    INSERT INTO Ofertas (nombre, descripcion, tipo, valor, fecha_inicio, fecha_fin, estado, codigo_promocional, condiciones_aplicacion, limite_uso, usos_actuales, id_usuario, id_proveedor)
    VALUES ('Descuento 10%', 'Descuento del 10% en la siguiente compra', 'Porcentual', 10, @FECHA_INICIO, @FECHA_FIN, 'Activa', @CODIGO_PROMOCIONAL, 'Aplicable en la siguiente compra', 1, 0, @ID_USUARIO, @ID_PROVEEDOR);

    PRINT 'Devolución y descuento procesados exitosamente';
END;

BEGIN TRANSACTION

	EXECUTE DevolverProducto 2, 6, 2, '2024-12-09', 'Prueba', 1, '2024-12-10', '2025-01-10', '123';

	SELECT * FROM Usuarios
	SELECT * FROM Carrito WHERE id_usuario = 2
	SELECT * FROM Carrito_Producto WHERE id_carrito = 2
	SELECT * FROM Productos WHERE id = 6
	SELECT * FROM Devoluciones
	SELECT * FROM Devoluciones_Carrito

	COMMIT

ROLLBACK