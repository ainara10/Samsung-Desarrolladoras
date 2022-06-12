import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Persona } from '../../interfaces/persona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})

export class PersonaComponent implements OnInit {

  do: String = "insert"
  position: any = 0

  contactos: Array<Persona> = []

  contacto: Persona = {
        nombre: "",
        apellidos: "",
        edad: "",
        dni: "",
        cumpleanyos: "",
        colorFavorito: "",
        sexo: "",
        notas: ""
  }

  coloresFavoritos = [
    { id: 1, value: 'Rojo' },
    { id: 2, value: 'Azul' },
    { id: 3, value: 'Amarillo' },
    { id: 4, value: 'Verde' },
    { id: 5, value: 'Rosa' },
    { id: 6, value: 'Negro' },
    { id: 7, value: 'Morado' },
    { id: 8, value: 'Marrón' }
  ];


  constructor() { }

  ngOnInit(): void {}

  add( form : NgForm ){
    if( this.do === 'insert' ){

      let fechaCumple  = new Date(this.contacto.cumpleanyos);
      let dia = fechaCumple.getDay();
      let mes = fechaCumple.getMonth();
      let anyo = fechaCumple.getFullYear();
      let edadN = parseInt(this.contacto.edad)
      let name = this.contacto.nombre;
      let surnames = this.contacto.apellidos;
      let favouriteColour = this.contacto.colorFavorito;

      this.contacto.cumpleanyos = `${dia}/${mes}/${anyo}`

      if(edadN > 0 && edadN <= 125){
      this.contactos.push( this.contacto )
      }

      this.contacto = {
        nombre: "",
        apellidos: "",
        edad: "",
        dni: "",
        cumpleanyos: new Date(),
        colorFavorito: "",
        sexo: "",
        notas: ""
      }

    }else{
      this.contactos[ this.position ] = this.contacto
      this.do = 'insert'
    }
    form.resetForm()
  }

  delete( delPosition : number )    : void {
    this.contactos.splice( delPosition , 1 )
  }
  update( upPosition : number ) : void {
    this.contacto  = this.contactos[ upPosition ];
    this.do   = 'update'
    this.position = upPosition
  }
}
