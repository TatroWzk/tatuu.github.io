const formGet = document.getElementById('getUsuario');
const formPost = document.getElementById('postUsuario');
const formPut = document.getElementById('putUsuario');
const formDelete = document.getElementById('deleteUsuario');

formGet.addEventListener('submit', async (e) => {
  e.preventDefault();
  let message = '';
  const id = e.target.id.value;

  await fetch(`http://127.0.0.1:3000/user/${id}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.message) {
        message = data.message;
      } else {
        message = `Numero de pedido: ${data.id} | Producto: ${data.producto} | Cantidad: ${data.cantidad}`;
      }
    });

  document.getElementById('textoGet').innerHTML = message;
});

formPost.addEventListener('submit', async (e) => {
  e.preventDefault();
  let message = '';
  const producto_ = e.target.producto_.value;
  const cantidad_ = e.target.cantidad_.value;

  await fetch('http://127.0.0.1:3000/user/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ producto: producto_, cantidad: cantidad_ }),
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
  const producto_ = e.target.producto_.value;
  const cantidad_ = e.target.cantidad_.value;

  await fetch(`http://127.0.0.1:3000/user/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ producto: producto_, cantidad: cantidad_ }),
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

  await fetch(`http://127.0.0.1:3000/user/${id}`, {
    method: 'DELETE',
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.message) {
        message = data.message;
      } else {
        message = `ID: ${data.id} | Producto: ${data.producto} | cantidad: ${data.cantidad}`;
      }
    });

  document.getElementById('textoDelete').innerHTML = message;
});