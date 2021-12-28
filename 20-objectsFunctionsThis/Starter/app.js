console.log(this);//window --> Global Object

function a() {
  console.log(this); //window --> Global Object
  this.newVariable = 'hello';
}

var b = function() {
  console.log(this); //window --> Global Object
}

//2 Contextos de ejecución separados apuntando al mismo espacio
//El obketo global GO --> window
a();
console.log(newVariable);// 'hello'
b();

var c = {
  name: 'The c object',
  log: function() {
    c.name = 'Updated c object';
    console.log(this);//{name: 'Updated c object', log: ƒ}
    // cuando se usa this dentro de un objeto
    // la referencia de this se vuelve el objeto
    // que lo contiene

    var setName = function(newName) {
      this.name = newName; //--> apunta al this del GO creando window.name y no a c.name
    }

    setName('Updated again! The c Object');
    console.log(this);

  }
}

c.log();
// {name: 'The c object', log: ƒ}
// --> c.name = 'Updated c object';
// --> {name: 'Updated c object', log: ƒ}
