let resultado = document.getElementById('resultado');
resultado.value = '0';

function agregarValor(valor) {
  if (resultado.value === '0') {
    resultado.value = '';
  }
  resultado.value += valor;
}

function calcularResultado() {
  try {
    resultado.value = eval(resultado.value);
  } catch (error) {
    resultado.value = 'Error';
  }
}

function limpiarResultado() {
  resultado.value = '0';
}

document.addEventListener('keydown', function(event) {
  limpiarResultado();
});
