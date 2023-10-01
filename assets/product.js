const productos = [];
class producto {
  constructor(id, nombre, descripcion, precio, cantidad, imgUrl) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.cantidad = cantidad;
    this.imgUrl = imgUrl;
  }
}

const crearProductos = (id, nombre, descricpion, precio, cantidad, imgUrl) => {
  let productoUnitario = new producto(
    id,
    nombre,
    descricpion,
    precio,
    cantidad,
    imgUrl
  );
  productos.push(productoUnitario);
};
// bolso presia
crearProductos(
  1,
  "Persia",
  "Bolso de una tira , con bordados rojos",
  120,
  1,
  "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1963&q=80"
);

// bolso Monica
crearProductos(
  2,
  "Monica",
  "Bolso de dos tiras , con bordados violetas",
  150,
  1,
  "https://images.unsplash.com/photo-1612902456551-333ac5afa26e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80"
);
//   Bolso pestico
crearProductos(
  3,
  "Pestico",
  "Mochila de doble posicion de guardado y cierre",
  350,
  1,
  "https://images.unsplash.com/photo-1597633244018-0201d0158aab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80"
);
//   monedero cactus
crearProductos(
  4,
  "Cactus",
  "Monedero chico , de polietirenos simple , con tiras",
  50,
  1,
  "https://images.unsplash.com/photo-1585488433963-2e35fb083e52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
);
//   cartera carisma
crearProductos(
  5,
  "Carisma",
  "Cartera de cuero , de gran capacidad",
  542,
  1,
  "https://images.unsplash.com/photo-1614179689702-355944cd0918?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80"
);
console.table(productos);
