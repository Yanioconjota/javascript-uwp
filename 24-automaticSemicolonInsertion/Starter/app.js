function getPersonWrong() {
  return //inserta automáticamente ";" en el return
  {
    firstname: 'Homero'
  }
}

console.log(getPersonWrong());// undefined

function getPersonOk() {
  return {
    firstname: 'Homero'
  }
}

console.log(getPersonOk());//{firstname: 'Homero'}
