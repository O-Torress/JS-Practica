let numeros = [5,2,92,0,3,73,9,6,12];

function contar(array, contador = 0 ) {
  if (contador < array.length) {
    console.log(array[contador]);
    contar(array, contador + 1);
  }
}

contar(numeros);

/*
1) Cuenta desde el ultimo numero de un array hasta el primero
  [5,2,92,0,3,73,9,6,12]
*/