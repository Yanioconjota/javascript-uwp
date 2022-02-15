(function (global, $) {
  var Greetr = function (firstname, lastname, language) {
    //Devuelvo un function constructor con el operador new para asegurarme que al invocar Greetr no tenga que usarlo de nuevo
    return new Greetr.init(firstname, lastname, language);
  };

  //En el prototype guardo todos los métodos que voy a usar en el framework
  Greetr.prototype = {};

  //Esta es la verdadera función y asigno valores por defecto
  Greetr.init = function (firstname, lastname, language) {
    //utilizo la var self guardar el this que apunta al objeto creado con el operador new
    var self = this;
    self.firstname = firstname || "";
    self.lastname = lastname || "";
    self.language = language || "en";
  };

  //Todos los objetos creados con init apuntan al prototype de Greetr
  Greetr.init.prototype = Greetr.prototype;

  //global es el parámetro que recibe window, nuestro global object. Establesco un alias para invocar a Greetr, global.Greetr = global.G$ apuntan a la función que ejecutamos al principio de la iife
  global.Greetr = global.G$ = Greetr;

  console.log(Greetr);
})(window, jQuery);