import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import { Authentication } from '../models/user';
import { UsuariosService } from '../service/usuarios/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
  });

  authentication: Authentication;
 
  constructor(private router: Router, public usuariosService: UsuariosService ) { }

  ngOnInit(): void {
    console.log('Deu Ruim');
  }


  login(){  
    if (this.loginForm.valid) {
      this.authentication = this.loginForm.value;
      this.usuariosService.authentication(this.authentication).subscribe(
        data => {
          console.log(data);
          localStorage.setItem('token', data.token);
          localStorage.setItem('admin', data.admin);
          localStorage.setItem('username', this.authentication.username);
          localStorage.setItem('password', this.authentication.password);
          let userAutenticado = true;
          this.router.navigate(['/lista-contatos']); 
       }
      );
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Ooops..',
        text:'Login ou senha inválidos.'
      });
    }
  }
}

