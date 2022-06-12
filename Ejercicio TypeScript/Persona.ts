import { Telefono } from "./Telefono"
import { Mail } from "./Mail"
import { Direccion } from "./Direccion"

export class Persona {
    private nombre: string;
    private apellidos: string;
    private edad: number;
    private dni: string;
    private cumpleanos: Date;
    private colorFavorito: string;
    private sexo: string;
    private direcciones: Array<Direccion>;
    private mails: Array<Mail>;
    private telefonos: Array<Telefono>;
    private notas: Array<string>;

    constructor(
        nombre: string,
        apellidos: string,
        edad: number,
        dni: string,
        cumpleanos: Date,
        colorFavorito: string,
        sexo: string,
        direcciones?: Array<Direccion>,
        mails?: Array<Mail>,
        telefonos?: Array<Telefono>,
        notas?: Array<string>) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.dni = dni;
        this.cumpleanos = cumpleanos;
        this.colorFavorito = colorFavorito;
        this.sexo = sexo;
        this.direcciones = direcciones ? direcciones : new Array<Direccion>();
        this.mails = mails ? mails : new Array<Mail>();
        this.telefonos = telefonos ? telefonos : new Array<Telefono>()
        this.notas = notas ? notas : new Array<string>()
        }

        public getNombre(): string {
            return this.nombre;
        }
        
        public setNombre(nombre: string): void {
            this.nombre = nombre;
        }
        
        public getApellidos(): string {
            return this.apellidos;
        }
        
        public setApellidos(apellidos: string): void {
            this.apellidos = apellidos;
        }
        
        public getEdad(): number {
            return this.edad;
        }
        
        public setEdad(edad: number): void {
            this.edad = edad;
        }
        
        public getDni(): string {
            return this.dni;
        }
        
        public setDni(dni: string): void {
            this.dni = dni;
        }
        
        public getCumpleanos(): Date {
            return this.cumpleanos;
        }
        
        public setCumpleanos(cumpleanos: Date): void {
            this.cumpleanos = cumpleanos;
        }
        
        public getColorFavorito(): string {
            return this.colorFavorito;
        }
        
        public setColorFavorito(colorFavorito: string): void {
            this.colorFavorito = colorFavorito;
        }
        
        public getSexo(): string {
            return this.sexo;
        }
        
        public setSexo(sexo: string): void {
            this.sexo = sexo;
        }
        
        public getDirecciones(): Array<Direccion> {
            return this.direcciones;
        }
        
        public setDirecciones(direcciones: Array<Direccion>): void {
            this.direcciones = direcciones;
        }
        
        public getMails(): Array<Mail> {
            return this.mails;
        }
        
        public setMails(mails: Array<Mail>): void {
            this.mails = mails;
        }
        
        public getTelefonos(): Array<Telefono> {
            return this.telefonos;
        }
        
        public setTelefonos(telefonos: Array<Telefono>): void {
            this.telefonos = telefonos;
        }
        
        public getNotas(): Array<string> {
            return this.notas;
        }
        
        public setNotas(notas: Array<string>): void {
            this.notas = notas;
        }
        
        public addDireccion(direccion:Direccion):void {
            this.direcciones.push(direccion)
        }

        public addMail(mail:Mail):void {
            this.mails.push(mail)
        }

        public addTelefono(telefono:Telefono):void {
            this.telefonos.push(telefono)
        }
         
}