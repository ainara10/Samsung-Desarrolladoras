"use strict";
exports.__esModule = true;
var Telefono_1 = require("./Telefono");
var Mail_1 = require("./Mail");
var Direccion_1 = require("./Direccion");
var Persona_1 = require("./Persona");
function mostrarPersonas(personasArray) {
    for (var _i = 0, personasArray_1 = personasArray; _i < personasArray_1.length; _i++) {
        var persona = personasArray_1[_i];
        console.log("Persona: ".concat(persona.getNombre(), " "));
        console.log(persona.toString());
    }
}
var personasArray = [];
// Crear 3 registros de persona
var persona1 = new Persona_1.Persona('Ainara', 'Pérez', 33, '456258753L', new Date("1989-04-30"), 'blanco', 'mujer', [new Direccion_1.Direccion('Gran Vía', 1, 2, 'B', 48003, 'Bilbao', 'Vizcaya')], [new Mail_1.Mail('personal', 'aperez@gmail.com')], [new Telefono_1.Telefono('móvil', 654625852)]);
var persona2 = new Persona_1.Persona('Ana', 'López', 50, '785213521D', new Date("1965-12-21"), 'verde', 'mujer', [new Direccion_1.Direccion('Castellana', 10, 1, 'A', 48050, 'Durango', 'Vizcaya')], [new Mail_1.Mail('personal', 'alopez@gmail.com')], [new Telefono_1.Telefono('móvil', 654632685)]);
var persona3 = new Persona_1.Persona('Pepe', 'Martínez', 65, '632145201A', new Date("1977-12-15"), 'azul', 'hombre', [new Direccion_1.Direccion('Gabriel Aresti', 1, 2, 'C', 48023, 'Lekeitio', 'Vizcaya')], [new Mail_1.Mail('personal', 'pepemtnez@hotmail.com')], [new Telefono_1.Telefono('móvil', 695624152)]);
// Registramos
personasArray.push(persona1, persona2, persona3);
// Mostramos personas
mostrarPersonas(personasArray);
// Buscar persona por su DNI para modificar
personasArray.filter(function (persona) { return persona.getDni() === '785213521D'; })
    .map(function (persona) {
    persona.addDireccion(new Direccion_1.Direccion('Alameda San Mamés', 45, 1, 'A', 48003, 'Bilbao', 'Vizcaya'));
    persona.addMail(new Mail_1.Mail('trabajo', 'ana-lopez@gmail.com'));
    persona.addTelefono(new Telefono_1.Telefono('fijo', 944444252));
    persona.addTelefono(new Telefono_1.Telefono('trabajo', 621654687));
    persona.setNotas(['Cambio de vivienda']);
});
// Mostramos de nuevo
mostrarPersonas(personasArray);
