import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsuariosService } from '../service/usuarios/usuarios.service';

@Component({
  selector: 'app-form-usuarios',
  templateUrl: './form-usuarios.component.html',
  styleUrls: ['./form-usuarios.component.scss']
})
export class FormUsuariosComponent implements OnInit {

  
  formUsuarios = new FormGroup({
    id: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    admin: new FormControl('', [Validators.requiredTrue])
  });
  

  constructor(public usuariosService: UsuariosService, private router: Router) {}

  ngOnInit(): void {
    this.formUsuarios.reset();
    this.usuariosService.botaoEdit.subscribe( edit => {
      if (edit !== null){
        console.log(edit, 'valor do edit');
        this.formUsuarios.get('email').setValue(edit.email);
        this.formUsuarios.get('name').setValue(edit.name);     
        this.formUsuarios.get('password').setValue(edit.password);
        this.formUsuarios.get('admin').setValue(edit.admin);
      }else{
        this.formUsuarios.reset();
      }
    });
   }

   
  saveu(){('form');
    if (this.formUsuarios.valid){
      Swal.fire({
        icon:'success',
        title: 'Eeeeeba..',
        text: 'Usuário criado com sucesso!',
        timer: 3000
      });
      this.formUsuarios.reset();
      this.router.navigate(['/lista-usuarios']);
    }else{    
      Swal.fire({
      icon:'error',
      title: 'Oooops..',
      text: 'Cadastro não realizado, preencha corretamente todos os campos',
      timer: 3000
    });
   }
  }

}