export default {
    name: 'productos',
    title: 'Productos',
    type: 'document',
    fields: [
        {
            name: 'imagen',
            title: 'Imagen',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                hotspot: true,
            }
        },
        {
            name: 'nombre',
            title: 'Nombre',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'nombre',
                maxLength: 90,
            }
        },
        {
            name: 'precio',
            title: 'Precio',
            type: 'number',
        },
        {
            name: 'detalles',
            title: 'Detalles',
            type: 'string',
        }
    ] 
}
        