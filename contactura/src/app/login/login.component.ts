import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import {Router} from '@angular/router';
import Swal from 'sweetalert2';

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


 
  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  login(){
    
    if (this.loginForm.valid) {
      localStorage.setItem('token', 'fuctura');
      localStorage.setItem('admin', 'true');
      this.router.navigate(['/lista-contatos']); 
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Ooops..',
        text:'Login ou senha inválidos.'
      })
    }
    }
  }

