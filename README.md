Yeymi Johana De Paz Fernandez. DF240080
LINK VIDEO: https://youtu.be/o2_6ILzxyn4?si=xWuR9Ui1wbRdsnTf
CODIGO FUENTE:
[
  {
    "id": 1,
    "nombre": "Laptop",
    "precio": 600,
    "imagen": "https://gadgetscane.com/wp-content/uploads/2021/03/MSI4.jpg"
  },
  {
    "id": 2,
    "nombre": "Teclado Inalámbrico",
    "precio": 80,
    "imagen": "https://pedidos.com/myfotos/xLarge/(X)PF-LOG-POPR.webp"
  },
  {
    "id": 3,
    "nombre": "Mouse Inalámbrico",
    "precio": 40,
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_699254-MCO52626830283_112022-O.webp"
  },
  {
    "id": 4,
    "nombre": "Monitor 22 pulgadas",
    "precio": 200,
    "imagen": "https://cdn.awsli.com.br/2500x2500/25/25449/produto/257873519ff4d5da62b.jpg"
  },
  {
    "id": 5,
    "nombre": "Memoria USB 128GB",
    "precio": 30,
    "imagen": "https://img.freepik.com/vector-premium/vector-memoria-electronica-unidad-flash-usb-rosa_394307-1995.jpg?w=2000"
  },
  {
    "id": 6,
    "nombre": "Impresora",
    "precio": 130,
    "imagen": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6367/6367443cv14d.jpg"
  },
  {
    "id": 7,
    "nombre": "Disco duro externo",
    "precio": 80,
    "imagen": "https://imagenes.deltron.com.pe/images/productos/on-line/items/large/ss/dh/ssdhp848t8aa.jpg"
  },
  {
    "id": 8,
    "nombre": "Audífonos Bluetooth",
    "precio": 25,
    "imagen": "https://www.cqnetcr.com/20199-thickbox_default/audifonos-jbl-jr300bt-legendario-bluetooth-rosa.jpg"
  },
  {
    "id": 9,
    "nombre": "Cámara web HD",
    "precio": 60,
    "imagen": "https://img.freepik.com/psd-premium/camara-web-rosa-blanca-ojo-morado_795142-108.jpg"
  },
  {
    "id": 10,
    "nombre": "Tablet 12 pulgadas",
    "precio": 170,
    "imagen": "https://m.media-amazon.com/images/I/71g7k30BklL.jpg"
  },
  {
    "id": 11,
    "nombre": "Iphone 16",
    "precio": 1500,
    "imagen": "https://http2.mlstatic.com/D_NQ_NP_697833-MLU79129664311_092024-O.webp"
  },
  {
    "id": 12,
    "nombre": "Smartwatch",
    "precio": 200,
    "imagen": "https://cdn1.totalcommerce.cloud/laplazamorada/product-image/es/smartwatch-reloj-inteligente-t500-plus-rosa-con-2-pulsos-1.webp"
  },
  {
    "id": 13,
    "nombre": "Bocina Bluetooth",
    "precio": 40,
    "imagen": "https://img.pccomponentes.com/articles/36/361841/1611-jbl-go-3-altavoz-bluetooth-rosa.jpg"
  },
  {
    "id": 14,
    "nombre": "Cargador Portátil",
    "precio": 30,
    "imagen": "https://m.media-amazon.com/images/I/61bXjSi9iOL.jpg"
  },
  {
    "id": 15,
    "nombre": "Cable HDMI",
    "precio": 10,
    "imagen": "https://media.djmania.net/images/VLMP34010P.JPG"
  },
  {
    "id": 16,
    "nombre": "Ipad Air (2020)",
    "precio": 600,
    "imagen": "https://imageservice.asgoodasnew.com/540/17871/622/title-0001.jpg"
  },
  {
    "id": 17,
    "nombre": "Ratón Gaming",
    "precio": 70,
    "imagen": "https://www.coolmod.com/images/product/large/mars-gaming-mmex-raton-gaming-rgb-32000dpi-rosa-raton-001.jpg"
  },
  {
    "id": 18,
    "nombre": "Proyector LED",
    "precio": 300,
    "imagen": "https://i5.walmartimages.com.mx/mg/gm/3pp/asr/05a1fdd8-2b19-42e2-aab6-a7d5dd24d5e4.e6d79a2aea63eac9ed7e1a7b369ceb2e.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff"
  },
  {
    "id": 19,
    "nombre": "Micrófono USB",
    "precio": 130,
    "imagen": "https://m.media-amazon.com/images/I/61V5KhEm+0L._AC_SX466_.jpg"
  }
]

import fs from 'fs';
import path from 'path';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'public', 'productos.json');
  const jsonData = fs.readFileSync(filePath);
  const productos = JSON.parse(jsonData);

  return {
    props: {
      productos
    }
  };
}

export default function Home({ productos }) {
  return (
    <div>
      <h1>Tienda de Tecnología</h1>
      <div>
        {productos.map(producto => (
          <div key={producto.id}>
            <img src={producto.imagen} alt={producto.nombre} width="100" />
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <p>${producto.precio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

import { useState } from 'react';

export default function Home({ productos }) {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const eliminarDelCarrito = (id) => {
    if (confirm('¿Estás seguro de que deseas eliminar este producto del carrito?')) {
      setCarrito(carrito.filter(producto => producto.id !== id));
    }
  };

  const vaciarCarrito = () => {
    if (confirm('¿Estás seguro de que deseas vaciar el carrito?')) {
      setCarrito([]);
    }
  };

  return (
    <div>
      <h1>Tienda de Tecnología</h1>
      <div>
        {productos.map(producto => (
          <div key={producto.id}>
            <img src={producto.imagen} alt={producto.nombre} width="100" />
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <p>${producto.precio}</p>
            <button onClick={() => agregarAlCarrito(producto)}>Agregar al Carrito</button>
          </div>
        ))}
      </div>
      <h2>Carrito de Compras</h2>
      <div>
        {carrito.map(producto => (
          <div key={producto.id}>
            <img src={producto.imagen} alt={producto.nombre} width="50" />
            <span>{producto.nombre}</span>
            <button onClick={() => eliminarDelCarrito(producto.id)}>Eliminar</button>
          </div>
        ))}
      </div>
      <button onClick={vaciarCarrito}>Vaciar Carrito</button>
    </div>
  );
}

const generarFactura = () => {
    const factura = carrito.map(producto => ({
      nombre: producto.nombre,
      precio: producto.precio
    }));
    console.log('Factura:', factura);
    alert('Compra realizada con éxito. Revisa la consola para ver la factura.');
    setCarrito([]);
  };
  
  return (
    <div>
      {/* ... */}
      <button onClick={generarFactura}>Comprar</button>
    </div>
  );
