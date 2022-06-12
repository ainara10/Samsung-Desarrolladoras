import { Telefono } from "./Telefono"
import { Mail } from "./Mail"
import { Direccion } from "./Direccion"
import { Persona } from "./Persona"

function mostrarPersonas(personasArray: Array<Persona>): void {
    for (const persona of personasArray) {
        console.log(`Persona: ${persona.getNombre()} `);
        console.log(persona.toString());
    }
}

let personasArray: Array<Persona> = [];

// Crear 3 registros de persona
let persona1 = new Persona('Ainara', 'Pérez', 33, '456258753L', new Date("1989-04-30"), 'blanco', 'mujer', [new Direccion('Gran Vía', 1, 2, 'B', 48003, 'Bilbao', 'Vizcaya')], [new Mail('personal', 'aperez@gmail.com')], [new Telefono('móvil', 654625852)]);
let persona2 = new Persona('Ana', 'López', 50, '785213521D', new Date("1965-12-21"), 'verde', 'mujer', [new Direccion('Castellana', 10, 1, 'A', 48050, 'Durango', 'Vizcaya')], [new Mail('personal', 'alopez@gmail.com')], [new Telefono('móvil', 654632685)]);
let persona3 = new Persona('Pepe', 'Martínez', 65, '632145201A', new Date("1977-12-15"), 'azul', 'hombre', [new Direccion('Gabriel Aresti', 1, 2, 'C', 48023, 'Lekeitio', 'Vizcaya')], [new Mail('personal', 'pepemtnez@hotmail.com')], [new Telefono('móvil', 695624152)]);

// Registramos
personasArray.push(persona1, persona2, persona3);

// Mostramos personas
mostrarPersonas(personasArray);

// Buscar persona por su DNI para modificar
personasArray.filter(persona => persona.getDni() === '785213521D')
    .map((persona) => {
        persona.addDireccion(new Direccion('Alameda San Mamés', 45, 1, 'A', 48003, 'Bilbao', 'Vizcaya'));
        persona.addMail(new Mail('trabajo', 'ana-lopez@gmail.com'));
        persona.addTelefono(new Telefono('fijo', 944444252));
        persona.addTelefono(new Telefono('trabajo', 621654687));
        persona.setNotas(['Cambio de vivienda']);
    });

// Mostramos de nuevo
mostrarPersonas(personasArray);