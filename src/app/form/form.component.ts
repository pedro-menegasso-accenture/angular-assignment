import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/models/user';
import { FormService } from './form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  cadastroForm: FormGroup;


  constructor(
    private construirForm: FormBuilder,
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
