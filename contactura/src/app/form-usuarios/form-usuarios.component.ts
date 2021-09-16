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

  
  formUsuarios = new FormGroup({
    id: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    admin: new FormControl('', [Validators.requiredTrue])
  });
  
  usuario: User;
  constructor(public usuariosService: UsuariosService, private router: Router) {}

  ngOnInit(): void {
    this.formUsuarios.reset();
    this.usuariosService.botaoEdit.subscribe( edit => {
      if (edit !== null){
        console.log(edit, 'valor do edit');
        this.formUsuarios.get('name').setValue(edit.name);     
        this.formUsuarios.get('password').setValue(edit.password);
        this.formUsuarios.get('admin').setValue(edit.admin);
      }else{
        this.formUsuarios.reset();
      }
    });
   }

   
  saveu(){
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


edit(usuarios: User){
 usuarios.name =  this.formUsuarios.get('name').value;
 usuarios.password = this.formUsuarios.get('password').value;
 usuarios.admin =  this.formUsuarios.get('admin').value;
  this.usuariosService.updateUsuarios(usuarios).subscribe(
    data => {
      Swal.fire({
        icon: 'success',
        title: 'Eeeeeba..',
        text: 'Contato editado com sucesso!'
      });
      this.router.navigate(['/lista-usuarios']);
      },
      error => {
        Swal.fire({
          icon: 'error',
          title: 'Ooops..',
          text: 'Erro ao editar contato!'
        });
      }
  );
}

create(){
  this.usuariosService.createUser(this.formUsuarios.value).subscribe(
    data => {
      Swal.fire({
        icon: 'success',
        title: 'Eeeeeba..',
        text: 'Usuário criado com sucesso!'
      });
      this.router.navigate(['/lista-usuarios']);
      },
      error => {
        Swal.fire({
          icon: 'error',
          title: 'Ooops..',
          text: 'Erro ao criar usuario!'
        });
      }
  );
}
}
