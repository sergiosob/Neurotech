import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { User } from '../models/user';
import { UsuariosService } from '../service/usuarios/usuarios.service';

@Component({
  selector: 'app-form-usuarios',
  templateUrl: './form-usuarios.component.html',
  styleUrls: ['./form-usuarios.component.scss']
})
export class FormUsuariosComponent implements OnInit {
  userlist: User[];
  collection = { count: 10, data: [] };
  
  formUsuarios = new FormGroup({
    name: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    admin: new FormControl('', [Validators.required])
  });
  

  constructor(private router: Router, public usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.usuariosService.botaoEdit.subscribe( edit => {
      if (edit !== null){
        console.log(edit, 'valor do edit');
        this.formUsuarios.get('name').setValue(edit.name);
        this.formUsuarios.get('username').setValue(edit.username);
        this.formUsuarios.get('password').setValue(edit.password);
        this.formUsuarios.get('admin').setValue(edit.admin);
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