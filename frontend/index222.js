
const formGet = document.getElementById('getCarrito');
const formPost = document.getElementById('postCarrito');
const formPut = document.getElementById('putCarrito');
const formDelete = document.getElementById('deleteCarrito');

formGet.addEventListener('submit', async (e) => {
  e.preventDefault();
  let message = '';
  const id = e.target.id.value;

  await fetch(`http://127.0.0.1:3000/carrito/${id}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.message) {
        message = data.message;
      } else {
        message = `ID: ${data.id} | Producto: ${data.producto} | Modelo: ${data.modelo} | Cantidad: ${data.cantidad}`;
      }
    });

  document.getElementById('textoGet').innerHTML = message;
});

formPost.addEventListener('submit', async (e) => {
  e.preventDefault();
  let message = '';
  const producto = e.target.producto.value;
  const modelo = e.target.modelo.value;
  const cantidad = e.target.cantidad.value;

  await fetch('http://127.0.0.1:3000/carrito/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ producto, modelo, cantidad }),
  })
    .then((response) => response.json())
    .then((data) => {
      message = data.message;
    });

  document.getElementById('textoPost').innerHTML = message;
});

formPut.addEventListener('submit', async (e) => {
  e.preventDefault();
  let message = '';
  const id = e.target.id.value;
  const producto = e.target.producto.value;
  const modelo = e.target.modelo.value;
  const cantidad = e.target.cantidad.value;

  await fetch(`http://127.0.0.1:3000/carrito/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ producto, modelo, cantidad }),
  })
    .then((response) => response.json())
    .then((data) => {
      message = data.message;
    });

  document.getElementById('textoPut').innerHTML = message;
});

formDelete.addEventListener('submit', async (e) => {
  e.preventDefault();
  let message = '';
  const id = e.target.id.value;

  await fetch(`http://127.0.0.1:3000/carrito/${id}`, {
    method: 'DELETE',
  })
    .then((response) => response.json())
    .then((data) => {
      message = data.message;
    });

  document.getElementById('textoDelete').innerHTML = message;
});
