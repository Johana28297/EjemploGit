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