const usuarioEl = document.getElementById('input-usuario');
const passwordEl = document.getElementById('input-password');
const mensajeEl = document.getElementById('mensaje')

function loginUsuario() {
  let usuario = usuarioEl.value;
  let password = passwordEl.value;

  if (usuario === 'claudio' && password === '1234') {
    mensajeEl.innerHTML = 'usuario logueado correctamente';

    const loginForm = document.getElementById('login-form');
    const corchazoForm = document.getElementById('corchazo-form');
    
    setTimeout(() => {
      usuarioEl.value = '';
      passwordEl.value = '';
      mensajeEl.innerHTML = '';

      loginForm.setAttribute('class', 'hidden');
      corchazoForm.setAttribute('class', 'visible');

    }, 1000);

  } else {
    mensajeEl.innerHTML = 'usuario y/o password incorrectos';

    setTimeout(() => {
      usuarioEl.value = ''
      passwordEl.value = ''
      mensajeEl.innerHTML = ''
    }, 1000);

  };

  

};

function calcularTotal() {
  const vinosCant = document.getElementById('input-vino').value;
  const cervezasCant = document.getElementById('input-cerveza').value;
  const fernetCant = document.getElementById('input-fernet').value;

  const subtotal = (vinosCant * 1200) + (cervezasCant * 200) + (fernetCant * 1900);

  document.getElementById('subtotal').innerHTML = subtotal;

  const promo = calcularPromo(subtotal);

  let total;

  if (promo) {
    total = subtotal - (subtotal * 15 / 100);
    document.getElementById('mensaje-bebidas').innerHTML = 'Se aplica la promo con un 15% de descuento';
  } else {
    total = subtotal;
    document.getElementById('mensaje-bebidas').innerHTML = 'El total no alcanza para aplicar la promo';
  };

  document.getElementById('total').innerHTML = total
}

function calcularPromo(total) {
  if (total > 15000) { return true } else { return false };
}