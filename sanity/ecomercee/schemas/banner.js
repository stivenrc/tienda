export default {
    name: 'banner',
    title: 'Banner',
    type: 'document',
    fields: [
      {
        name: 'imagen',
        title: 'Imagen',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'buttonText',
        title: 'ButtonText',
        type: 'string',
      },
{
        name: 'descripcion',
        title: 'Descripcion',
        type: 'text',
      },
      {
        name: 'smallText',
        title: 'SmallText',
        type: 'string',
      },
      {
        name: 'midText',
        title: 'MidText',
        type: 'string',
      },
{
        name: 'textoLargo1',
        title: 'TextoLargo1',
        type: 'string',
      },
      {
        name: 'textoLargo2',
        title: 'TextoLargo2',
        type: 'string',
      },
      {
        name: 'descuento',
        title: 'Descuento',
        type: 'string',
      },
      {
        name: 'TiempoVenta',
        title: 'TiempoVenta',
        type: 'string',
      },
    ],
  };