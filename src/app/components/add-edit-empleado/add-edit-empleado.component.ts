import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-add-edit-empleado',
  templateUrl: './add-edit-empleado.component.html',
  styleUrls: ['./add-edit-empleado.component.css'],
  providers: [{
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'primary' },
}]
})
export class AddEditEmpleadoComponent implements OnInit {
  estadosCiviles: any[] = ['Soltero', 'Casado', 'Divorciado'];
  myForm: FormGroup;
  idEmpleado: any;
  accion = 'Crear';

  constructor(private fb: FormBuilder, 
              private _empleadoService: EmpleadoService,
              private route: Router,
              private _snackBar: MatSnackBar,
              private aRoute: ActivatedRoute) {
    this.myForm = this.fb.group({
      nombreCompleto: ['', [Validators.required, Validators.maxLength(20)]],
      correo: ['', [Validators.required, Validators.email]],
      fechaIngreso: ['', Validators.required],
      telefono: ['', Validators.required],
      estadoCivil: ['', Validators.required],  
      sexo: ['', Validators.required],  
    })
    this.idEmpleado = this.aRoute.snapshot.params['id'];
   }

  ngOnInit(): void {
    if(this.idEmpleado !== undefined){
      this.accion = 'Editar';
      this.esEditar();
    }
  }

  guardarEmpleado(){    
    const empleado: Empleado = {
      nombreCompleto: this.myForm.get('nombreCompleto')?.value,
      correo: this.myForm.get('correo')?.value,
      fechaIngreso: this.myForm.get('fechaIngreso')?.value,
      telefono: this.myForm.get('nombreCompleto')?.value,
      estadoCivil: this.myForm.get('estadoCivil')?.value,
      sexo: this.myForm.get('sexo')?.value,
    }

    if(this.idEmpleado !== undefined){
      this.editarEmpleado(empleado);
    } else{
      this.agregarEmpleado(empleado)
    }
    

    this.route.navigate(['/']);
   
  }

  agregarEmpleado(empleado: Empleado){
    this._empleadoService.agregarEmpleado(empleado);
    this._snackBar.open('El empleado fue registrado con exito!', '', { duration: 3000 });
  }

  editarEmpleado(empleado: Empleado){
    this._empleadoService.editEmpleado(empleado, this.idEmpleado);
    this._snackBar.open('El empleado fue actualizado con exito!', '', { duration: 3000 });
  }

  esEditar(){
    const empleado: Empleado = this._empleadoService.getEmpleado(this.idEmpleado);
    
    this.myForm.patchValue({
      nombreCompleto: empleado.nombreCompleto,
      correo: empleado.correo,
      fechaIngreso: empleado.fechaIngreso,
      telefono: empleado.telefono,
      estadoCivil: empleado.estadoCivil,
      sexo: empleado.sexo,
    })
  }

}
