//; al princpio se agrega por si el código anterior en el html no se cierra propiamente
;(function (global, $) {
  var Greetr = function (firstName, lastName, language) {
    //Devuelvo un function constructor con el operador new para asegurarme que al invocar Greetr no tenga que usarlo de nuevo
    return new Greetr.init(firstName, lastName, language);
  };

  //Variables que no están expuesta pero es accesible a todo el lexical environment de la función a través del closure

  var supportedLangs = ['en', 'es', 'jp'];

  var greetings = {
    en: "Hello",
    es: "Hola",
    jp: "こんにちは - Kon'nichiwa",
  };

  var formalGreetings = {
    en: "Greetings",
    es: "Saludos",
    jp: "ご挨拶 - Go aisatsu",
  };

  var loggedMessages = {
    en: "Logged in",
    es: "Inició sesión",
    jp: "ログイン - Roguin",
  };

  //En el prototype guardo todos los métodos que voy a usar en el framework
  Greetr.prototype = {
    //Devuelve el nombre completo
    fullName: function () {
      return `${this.firstName} ${this.lastName}`;
    },
    //Valida que el lenguaje ingresado sea soportado
    validate: function () {
      if (supportedLangs.indexOf(this.language) === -1) {
        throw "Invalid language";
      }
    },
    //devuelve un saludo informal accesando a la propiedad mediante el parámetro language
    greetings: function () {
      return greetings[this.language] + " " + this.firstName + "!";
    },
    //devuelve un saludo formal accesando a la propiedad mediante el parámetro language y concatena la ejecución del método fullName
    formalGreetings: function () {
      return formalGreetings[this.language] + ", " + this.fullName();
    },
    //es el método que vamos a utilizar y encapsula la lógica anterior
    greet: function (formal) {
      var msg;
      //si es null o undefined será coercionado a false
      if (formal) {
        msg = this.formalGreetings();
      } else {
        msg = this.greetings();
      }
      if (console) {
        console.log(msg);
      }
      //this se refiere al objeto que llama en tiempo de ejecución
      //hace que el método sea encadenable
      return this;
    },
    //si hay una consola muestra un mensaje
    log: function () {
      if (console) {
        console.log(`${loggedMessages[this.language]}: ${this.fullName()}`);
      }
      //hace que el método sea encadenable
      return this;
    },
    //Cambia el idioma en ejecución
    setLang: function (lang) {
      this.language = lang;

      this.validate();

      return this;
    },
    HTMLgreeting: function (selector, formal) {
      //Valida que exista jQuery
      if (!$) {
        throw "jQuery not loaded!";
      }
      //Valida que exista un selector de jQuery válido
      if (!selector) {
        throw "Missing jQuery selector";
      }

      var msg;
      if (formal) {
        msg = this.formalGreetings();
      } else {
        msg = this.greetings();
      }

      //Le asignamos el mensaje al string que recibimos como selector.
      $(selector).html(msg);

      //Hacemos el método encadenable
      return this;
    },
    errMessage: function (selector) {
      //Valida que exista jQuery
      if (!$) {
        throw "jQuery not loaded!";
      }
      //Valida que exista un selector de jQuery válido
      if (!selector) {
        throw "Missing jQuery selector";
      }
      
      msg = "You must type something";
      $(selector).html(msg);
    },
  };

  //Esta es la verdadera función y asigno valores por defecto
  Greetr.init = function (firstName, lastName, language) {
    //utilizo la var self guardar el this que apunta al objeto creado con el operador new
    var self = this;
    self.firstName = firstName || "";
    self.lastName = lastName || "";
    self.language = language || "en";

    self.validate();
  };

  //Todos los objetos creados con init apuntan al prototype de Greetr
  Greetr.init.prototype = Greetr.prototype;

  //global es el parámetro que recibe window, nuestro global object. Establesco un alias para invocar a Greetr, global.Greetr = global.G$ apuntan a la función que ejecutamos al principio de la iife
  global.Greetr = global.G$ = Greetr;
})(window, jQuery);