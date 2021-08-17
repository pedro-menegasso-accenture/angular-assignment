import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/models/user';
import { FormService } from './form.service';

// Defines the functioning of a form
@Component({
  // html tag for using this
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  // A property for this component, in this case a Form
  cadastroForm: FormGroup;

  // The constructor for this component
  constructor(
    // Responsible for building the form
    private construirForm: FormBuilder,
    // Service that manages the form functioning
    private servirForm: FormService,
    private routes: Router
   ) {
     this.cadastroForm = this.construirForm.group({
      usuarioNome:['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      usuarioSenha:['', [
        Validators.required,
        Validators.minLength(3)
      ]]
     })
    }

  ngOnInit(): void {}

  submit() {
    if(this.cadastroForm.valid && !this.cadastroForm.pending){
      const usuarioNovo = this.cadastroForm.getRawValue() as User;
      this.servirForm.registerUsuario(usuarioNovo).subscribe(
        () => this.routes.navigate(['usersList']),
        (err: Error) => console.log(err)
      )
    }
  }

}
