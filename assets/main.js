const cardsContainer = document.querySelector(".cards-container");
const cartContainer = document.querySelector(".cart-container");
const cartBtn = document.querySelector("#nav-cart");
const cardProduct = document.querySelector(".card");
const cartContainerListContainer = document.querySelector(
  ".list-elementos-container"
);
const cartTotal = document.querySelector(".cart-total");
const cantProdEnCarrro = document.querySelector(".circle-mensaje");
//mas info container
const masInfoContainer = document.querySelector('.cards-masInfo')
const masInfoBody = document.querySelector('.masInfo-body')

console.log(cardsContainer);

let carrito = [];
let totalCarrito = 0;
// inyectar productos en el html
const cardInyection = (producto) => {
  return `
<div class="card">
<div class="card-header">
<img
  src="${producto.imgUrl}"
  alt=""
  class="img-card"
/>
</div>
<div class="card-body">
<h5 class="card-tittle">${producto.nombre}</h5>
<p class="card-description">
${producto.descripcion}
</p>
<p class="card-price">Price : $ ${producto.precio}</p>
</div>
<div class="card-footer">
<button class="btn-footer card-masInfo" data-id=${producto.id}>Mas info</button>
<button class="btn-footer card-comprar" data-id=${producto.id}>Add to cart</button>
</div>
</div>
`;
};
const renderCarProduct = (arrProductos) => {
  cardsContainer.innerHTML = arrProductos
    .map((product) => cardInyection(product))
    .join(" ");
};
// mostrar y esconder html

console.log(cartContainer);
console.log(cartBtn);
// cambiar el estado del cart container apretando el boton
const containersVisibility = () => {
  cartContainer.classList.toggle("cart-hidden");
  cartContainer.classList.add("cart-show");
};
//agrgar productos a carro

const encontrarId = (e) => {
  if (!e.target.classList.contains("card-comprar")) return;
  const filterId = Number(e.target.dataset.id);
  const prodId = productos.find((prod) => prod.id === filterId);
  const index = carrito.find((prod) => prod.id === prodId);
  //EXISTENCIA DE PRODUCTO
  const existencia = carrito.some((producto) => producto.id === filterId);
  if (existencia) {
    carrito = carrito.map((prod) =>
      prod.id === prodId.id ? { ...prod, cantidad: prod.cantidad + 1 } : prod
    );
  } else {
    carrito = [...carrito, { ...prodId, cantidad: 1 }];
  }
  console.table(carrito);
  renderCartProduct(carrito);
  cantProductos();
  total();
};
//renderizar carrito de compras

const cartInyection = (producto) => {
  return ` <li class="elemento-carro-container">
  <div class="img-cart-container">
    <img
      class="img-cart-element"
      src="${producto.imgUrl}"
      alt=""
    />
  </div>
  <div class="cart-text-container">
    <h4> ${producto.nombre} </h4>
    <p> Precio: $ ${producto.precio}  </p>
    <p> Cantidad : ${producto.cantidad} </p>
  </div>
  <div class="cart-delete-container">
    <img
      class="img-delete-cart-element"
      data-id=${producto.id}
      src="/assets/img/cart-icons/borrar.png"
      alt=""
    />
  </div>
</li>`;
};
const renderCartProduct = (arrProductos) => {
  if (!carrito.length) {
    cartContainerListContainer.innerHTML = `<li class="elemento-carro-container">
    <p>El carrito se encuentra vacio</p>
    </li>`;
  } else {
    cartContainerListContainer.innerHTML = "";
    cartContainerListContainer.innerHTML = arrProductos
      .map((product) => cartInyection(product))
      .join(" ");
  }
};
//cantidad de productos
const cantProductos = () => {
  let totalProductosCarrito = carrito.length;
  cantProdEnCarrro.innerText = totalProductosCarrito;
};

//imprimir total

const total = () => {
  const totlaPagar = carrito.reduce(
    (acc, prod) => acc + prod.precio * prod.cantidad,
    0
  );
  totalCarrito = totlaPagar;
  console.log(totalCarrito);
  cartTotal.innerText = `Total : $ ${totalCarrito}`;
};

//MAS INFO LOGICA Y RENDERIZADO

//mostrar y ocultar mas info
//mostrar mas info desde el card container
const btnMasInfo = (e) => {
  if (!e.target.classList.contains("card-masInfo")) return
  masInfoContainer.classList.toggle("masInfo-hiden");
  masInfoContainer.classList.add("masInfo-show");

}

//cerrar mas info desde close header
const masInfoClose = (e) => {
  if (!e.target.classList.contains("closeHeader")) return
  masInfoContainer.classList.toggle("masInfo-show");
  masInfoContainer.classList.add("masInfo-hiden");
}
//crear el inner HTML de mas info
const masInfoInyection = (producto) => {
  return `
        <div class="imasges-container">
          <div class="img-list">
            <ul class="list-img-div">
              <li class="box-img">
                <img
                  src=" ${producto.imgUrl} "
                  class="image-masInfo-little"
                  alt=""
                  srcset=""
                />
              </li>
              <li class="box-img">
                <img
                  src="${producto.imgUrl}"
                  class="image-masInfo-little"
                  alt=""
                  srcset=""
                />
              </li>
              <li class="box-img">
                <img
                  src="${producto.imgUrl}"
                  class="image-masInfo-little"
                  alt=""
                  srcset=""
                />
              </li>
              <li class="box-img">
                <img
                  src="${producto.imgUrl}"
                  class="image-masInfo-little"
                  alt=""
                  srcset=""
                />
              </li>
            </ul>
          </div>
          <div class="img-princ">
            <img
              src="${producto.imgUrl}"
              alt=""
              class="image-masInfo-princ"
              srcset=""
            />
          </div>
        </div>
        <div class="description-container">
          <div class="description-header">
            <h4>${producto.nombre}</h4>
          </div>
          <div class="description-body">
            <p>
            ${producto.descripcion}
            </p>
            <p>Precio: $ ${producto.precio} </p>
            <p>Cantidad : <span class="add-card-nfo card-info-addd">⬅</span> 0 <span class="add-card-nfo card-info-rest">➡</span></p>
          </div>
          <div class="description-footer">
            <button class="btn-masInfo btn-comprar">Add to cart</button>
            <button class="btn-masInfo btn-descripcion-comprar">Comprar</button>
          </div>
        </div>
  `
}

//buscar el id del prod seleccionado y renderizarlo
const masInfoId = (e) => {
  if (!e.target.classList.contains("card-masInfo")) return;
  const filterId = Number(e.target.dataset.id);
  const prodId = productos.find((prod) => prod.id === filterId);
  console.table(prodId);
  masInfoBody.innerHTML = "";
  masInfoBody.innerHTML = masInfoInyection(prodId)
};


const init = () => {
  renderCarProduct(productos);
  renderCartProduct(carrito);
  cantProductos();
  total();
  cartBtn.addEventListener("click", containersVisibility);
  cardsContainer.addEventListener("click", encontrarId);
  cardsContainer.addEventListener('click', btnMasInfo)
  cardsContainer.addEventListener('click', masInfoId)
  masInfoContainer.addEventListener('click', masInfoClose)
  cardsContainer.addEventListener('click', masInfoId)

};
init();
