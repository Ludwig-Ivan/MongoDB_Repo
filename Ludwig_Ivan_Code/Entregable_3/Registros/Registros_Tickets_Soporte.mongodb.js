use('Furniview');

db.Tickets_Soporte.insertMany([
    {
        fecha_creacion: new Date(2023, 11, 25, 10, 30, 0),
        estado: 'Abierto',
        prioridad: 'Alta',
        asunto: 'Detalles con una compra no reflejada',
        descripcion: 'El servidor por alguna razón no reflejó un pedido en mi plataforma',
        fecha_resolucion: new Date(2023, 11, 30, 10, 30, 0),
        comentarios: 'Verificar que el dispositivo usado debe estar con conexión a internet',
        adjuntos: ['https://www.google.com/'],
        medio_contacto: 'Chat',
        calificacion: 5,
        categoria: [ObjectId(), ObjectId()],
        id_usuario: ObjectId()
    },
    {
        fecha_creacion: new Date(2023, 8, 12, 15, 45, 0),
        estado: 'Cerrado',
        prioridad: 'Media',
        asunto: 'Problema al cargar imágenes',
        descripcion: 'Las imágenes no se cargan correctamente en la página de productos.',
        fecha_resolucion: new Date(2023, 8, 13, 12, 30, 0),
        comentarios: 'Revisar la conexión de internet y el tamaño de las imágenes',
        adjuntos: ['https://www.imgur.com/'],
        medio_contacto: 'Correo',
        calificacion: 4,
        categoria: [ObjectId(), ObjectId()],
        id_usuario: ObjectId()
    },
    {
        fecha_creacion: new Date(2023, 5, 14, 9, 0, 0),
        estado: 'En Proceso',
        prioridad: 'Baja',
        asunto: 'Pregunta sobre un reembolso',
        descripcion: 'El cliente quiere saber sobre el estado de su reembolso',
        fecha_resolucion: null,
        comentarios: 'Pendiente de revisión del equipo de finanzas',
        adjuntos: [],
        medio_contacto: 'Teléfono',
        calificacion: 3,
        categoria: [ObjectId(), ObjectId()],
        id_usuario: ObjectId()
    },
    {
        fecha_creacion: new Date(2023, 10, 2, 14, 30, 0),
        estado: 'Abierto',
        prioridad: 'Alta',
        asunto: 'Pedido cancelado sin aviso',
        descripcion: 'El pedido se canceló sin que el cliente fuera notificado',
        fecha_resolucion: new Date(2023, 10, 5, 11, 45, 0),
        comentarios: 'Ajustar notificaciones de cancelación automática',
        adjuntos: [],
        medio_contacto: 'Chat',
        calificacion: 5,
        categoria: [ObjectId(), ObjectId()],
        id_usuario: ObjectId()
    },
    {
        fecha_creacion: new Date(2023, 7, 25, 10, 30, 0),
        estado: 'Cerrado',
        prioridad: 'Alta',
        asunto: 'Factura no emitida correctamente',
        descripcion: 'El sistema no generó la factura automáticamente',
        fecha_resolucion: new Date(2023, 7, 26, 9, 30, 0),
        comentarios: 'Confirmar emisión manual si el error persiste',
        adjuntos: ['https://www.facturaejemplo.com/'],
        medio_contacto: 'Correo',
        calificacion: 5,
        categoria: [ObjectId(), ObjectId()],
        id_usuario: ObjectId()
    },
    {
        fecha_creacion: new Date(2023, 6, 15, 8, 30, 0),
        estado: 'En Proceso',
        prioridad: 'Media',
        asunto: 'Dudas sobre términos y condiciones',
        descripcion: 'El cliente necesita aclaraciones en los términos de servicio',
        fecha_resolucion: null,
        comentarios: 'Enviar documento con términos actualizados',
        adjuntos: [],
        medio_contacto: 'Teléfono',
        calificacion: 4,
        categoria: [ObjectId(), ObjectId()],
        id_usuario: ObjectId()
    },
    {
        fecha_creacion: new Date(2023, 4, 10, 11, 20, 0),
        estado: 'Cerrado',
        prioridad: 'Alta',
        asunto: 'Aplicación móvil no responde',
        descripcion: 'El cliente reporta que la app móvil no carga',
        fecha_resolucion: new Date(2023, 4, 11, 13, 15, 0),
        comentarios: 'Revisar la última actualización de la app',
        adjuntos: ['https://www.soporteapp.com/'],
        medio_contacto: 'Chat',
        calificacion: 4,
        categoria: [ObjectId(), ObjectId()],
        id_usuario: ObjectId()
    },
    {
        fecha_creacion: new Date(2023, 11, 1, 17, 0, 0),
        estado: 'Abierto',
        prioridad: 'Baja',
        asunto: 'Solicitud de información sobre envíos',
        descripcion: 'El cliente tiene dudas sobre los plazos de entrega',
        fecha_resolucion: null,
        comentarios: 'Enviar email con detalles de la política de envíos',
        adjuntos: [],
        medio_contacto: 'Correo',
        calificacion: 3,
        categoria: [ObjectId(), ObjectId()],
        id_usuario: ObjectId()
    },
    {
        fecha_creacion: new Date(2023, 2, 5, 14, 10, 0),
        estado: 'Cerrado',
        prioridad: 'Media',
        asunto: 'Problema con el código de descuento',
        descripcion: 'El código no fue aceptado durante la compra',
        fecha_resolucion: new Date(2023, 2, 6, 9, 50, 0),
        comentarios: 'Validar códigos manualmente si el problema persiste',
        adjuntos: [],
        medio_contacto: 'Teléfono',
        calificacion: 4,
        categoria: [ObjectId(), ObjectId()],
        id_usuario: ObjectId()
    },
    {
        fecha_creacion: new Date(2023, 9, 10, 18, 30, 0),
        estado: 'En Proceso',
        prioridad: 'Alta',
        asunto: 'Consulta sobre métodos de pago',
        descripcion: 'Cliente solicita opciones de pago adicionales',
        fecha_resolucion: null,
        comentarios: 'Evaluar la integración de nuevos métodos de pago',
        adjuntos: ['https://www.metodospago.com/'],
        medio_contacto: 'Chat',
        calificacion: 4,
        categoria: [ObjectId(), ObjectId()],
        id_usuario: ObjectId()
    },
    {
        fecha_creacion: new Date(2023, 3, 12, 13, 0, 0),
        estado: 'Abierto',
        prioridad: 'Baja',
        asunto: 'Problema menor con la búsqueda de productos',
        descripcion: 'El cliente reporta resultados irrelevantes en las búsquedas',
        fecha_resolucion: new Date(2023, 3, 14, 11, 0, 0),
        comentarios: 'Optimizar motor de búsqueda',
        adjuntos: [],
        medio_contacto: 'Correo',
        calificacion: 3,
        categoria: [ObjectId(), ObjectId()],
        id_usuario: ObjectId()
    },
    {
        fecha_creacion: new Date(2023, 11, 25, 10, 30, 0),
        estado: 'Abierto',
        prioridad: 'Alta',
        asunto: 'Detalles con una compra no reflejada',
        descripcion: 'El servidor por alguna razón no reflejó un pedido en mi plataforma',
        fecha_resolucion: new Date(2023, 11, 30, 10, 30, 0),
        comentarios: 'Verificar que el dispositivo usado debe estar con conexión a internet',
        adjuntos: ['https://www.google.com/'],
        medio_contacto: 'Chat',
        calificacion: 5,
        categoria: [ObjectId(), ObjectId()],
        id_usuario: ObjectId()
    },
    {
        fecha_creacion: new Date(2023, 8, 12, 15, 45, 0),
        estado: 'Cerrado',
        prioridad: 'Media',
        asunto: 'Problema al cargar imágenes',
        descripcion: 'Las imágenes no se cargan correctamente en la página de productos.',
        fecha_resolucion: new Date(2023, 8, 13, 12, 30, 0),
        comentarios: 'Revisar la conexión de internet y el tamaño de las imágenes',
        adjuntos: ['https://www.imgur.com/'],
        medio_contacto: 'Correo',
        calificacion: 4,
        categoria: [ObjectId(), ObjectId()],
        id_usuario: ObjectId()
    },
    {
        fecha_creacion: new Date(2023, 5, 14, 9, 0, 0),
        estado: 'En Proceso',
        prioridad: 'Baja',
        asunto: 'Pregunta sobre un reembolso',
        descripcion: 'El cliente quiere saber sobre el estado de su reembolso',
        fecha_resolucion: null,
        comentarios: 'Pendiente de revisión del equipo de finanzas',
        adjuntos: [],
        medio_contacto: 'Teléfono',
        calificacion: 3,
        categoria: [ObjectId(), ObjectId()],
        id_usuario: ObjectId()
    },
    {
        fecha_creacion: new Date(2023, 10, 2, 14, 30, 0),
        estado: 'Abierto',
        prioridad: 'Alta',
        asunto: 'Pedido cancelado sin aviso',
        descripcion: 'El pedido se canceló sin que el cliente fuera notificado',
        fecha_resolucion: new Date(2023, 10, 5, 11, 45, 0),
        comentarios: 'Ajustar notificaciones de cancelación automática',
        adjuntos: [],
        medio_contacto: 'Chat',
        calificacion: 5,
        categoria: [ObjectId(), ObjectId()],
        id_usuario: ObjectId()
    },
    {
        fecha_creacion: new Date(2023, 7, 25, 10, 30, 0),
        estado: 'Cerrado',
        prioridad: 'Alta',
        asunto: 'Factura no emitida correctamente',
        descripcion: 'El sistema no generó la factura automáticamente',
        fecha_resolucion: new Date(2023, 7, 26, 9, 30, 0),
        comentarios: 'Confirmar emisión manual si el error persiste',
        adjuntos: ['https://www.facturaejemplo.com/'],
        medio_contacto: 'Correo',
        calificacion: 5,
        categoria: [ObjectId(), ObjectId()],
        id_usuario: ObjectId()
    },
    {
        fecha_creacion: new Date(2023, 6, 15, 8, 30, 0),
        estado: 'En Proceso',
        prioridad: 'Media',
        asunto: 'Dudas sobre términos y condiciones',
        descripcion: 'El cliente necesita aclaraciones en los términos de servicio',
        fecha_resolucion: null,
        comentarios: 'Enviar documento con términos actualizados',
        adjuntos: [],
        medio_contacto: 'Teléfono',
        calificacion: 4,
        categoria: [ObjectId(), ObjectId()],
        id_usuario: ObjectId()
    },
    {
        fecha_creacion: new Date(2023, 4, 10, 11, 20, 0),
        estado: 'Cerrado',
        prioridad: 'Alta',
        asunto: 'Aplicación móvil no responde',
        descripcion: 'El cliente reporta que la app móvil no carga',
        fecha_resolucion: new Date(2023, 4, 11, 13, 15, 0),
        comentarios: 'Revisar la última actualización de la app',
        adjuntos: ['https://www.soporteapp.com/'],
        medio_contacto: 'Chat',
        calificacion: 4,
        categoria: [ObjectId(), ObjectId()],
        id_usuario: ObjectId()
    },
    {
        fecha_creacion: new Date(2023, 11, 1, 17, 0, 0),
        estado: 'Abierto',
        prioridad: 'Baja',
        asunto: 'Solicitud de información sobre envíos',
        descripcion: 'El cliente tiene dudas sobre los plazos de entrega',
        fecha_resolucion: null,
        comentarios: 'Enviar email con detalles de la política de envíos',
        adjuntos: [],
        medio_contacto: 'Correo',
        calificacion: 3,
        categoria: [ObjectId(), ObjectId()],
        id_usuario: ObjectId()
    },
    {
        fecha_creacion: new Date(2023, 2, 5, 14, 10, 0),
        estado: 'Cerrado',
        prioridad: 'Media',
        asunto: 'Problema con el código de descuento',
        descripcion: 'El código no fue aceptado durante la compra',
        fecha_resolucion: new Date(2023, 2, 6, 9, 50, 0),
        comentarios: 'Validar códigos manualmente si el problema persiste',
        adjuntos: [],
        medio_contacto: 'Teléfono',
        calificacion: 4,
        categoria: [ObjectId(), ObjectId()],
        id_usuario: ObjectId()
    },
]
);