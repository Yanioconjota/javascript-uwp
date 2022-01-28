const original = {
  primerNivel: { 
    data: 'Hola',
    segundoNivel: {
      data: 'Howdy',
      tercerNivel: {
        data: 'Hello!'
      }
    }
  }
};

const copia = {...original};

console.log(copia);

copia.primerNivel.segundoNivel.data = 'Adios';
copia.primerNivel.segundoNivel.tercerNivel.data = 'Hos vemos';

console.log('original: ', original);
console.log('copia: ',copia);

//deep copy lodash