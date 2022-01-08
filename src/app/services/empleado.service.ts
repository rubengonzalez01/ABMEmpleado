import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  listEmpleados: Empleado[] = [
    { nombreCompleto: 'Lucas Martinez', correo: 'lmartinez@gmail.com', telefono: 1155554444, sexo: 'Masculino', fechaIngreso: new Date(), estadoCivil: 'Soltero'},
    { nombreCompleto: 'Rodrigo Aliaga', correo: 'raliaga@gmail.com', telefono: 1155550000, sexo: 'Masculino', fechaIngreso: new Date('2019-05-25'), estadoCivil: 'Soltero'},
    { nombreCompleto: 'Maria Funes', correo: 'mfunes@gmail.com', telefono: 1155553333, sexo: 'Femenino', fechaIngreso: new Date('2020-04-27'), estadoCivil: 'Casada'},
    { nombreCompleto: 'Lucrecia Juarez', correo: 'ljuarez@gmail.com', telefono: 1155552222, sexo: 'Femenino', fechaIngreso: new Date('2020-07-25'), estadoCivil: 'Soltero'},
    { nombreCompleto: 'Federico Gonzalez', correo: 'fgonzalez@gmail.com', telefono: 1155551111, sexo: 'Masculino', fechaIngreso: new Date('2020-02-21'), estadoCivil: 'Soltero'},
    { nombreCompleto: 'Estefamoa Schutz', correo: 'eschutz@gmail.com', telefono: 1155555555, sexo: 'Femenino', fechaIngreso: new Date('2021-03-21'), estadoCivil: 'Soltero'},
    { nombreCompleto: 'Maria Belen Arzu', correo: 'mbarzu@gmail.com', telefono: 1155556666, sexo: 'Femenino', fechaIngreso: new Date('2021-05-02'), estadoCivil: 'Soltero'},
  ];

  constructor() { }

  getEmpleados(){
    return this.listEmpleados.slice();
  }

  eliminarEmpleado(index: number){
    this.listEmpleados.splice(index, 1);
  }

  agregarEmpleado(empleado: Empleado){
    this.listEmpleados.unshift(empleado);
  }

  getEmpleado(index: number){
    return this.listEmpleados[index];
  }

  editEmpleado(empleado: Empleado, idEmpleado: number){
    this.listEmpleados[idEmpleado].nombreCompleto = empleado.nombreCompleto;
    this.listEmpleados[idEmpleado].correo = empleado.correo;
    this.listEmpleados[idEmpleado].telefono = empleado.telefono;
    this.listEmpleados[idEmpleado].fechaIngreso = empleado.fechaIngreso;
    this.listEmpleados[idEmpleado].estadoCivil = empleado.estadoCivil;
    this.listEmpleados[idEmpleado].sexo = empleado.sexo;
  }
}
