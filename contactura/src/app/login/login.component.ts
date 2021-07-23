import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import {Router} from '@angular/router';

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

  //playAudio(){
  //  let audio = new Audio();
  //  audio.src = "../../../assets/audio/Vivaldi4seasons.mp3";
  // audio.load();
  // audio.play();
  //}
 
  constructor(private router: Router) { }

  ngOnInit() {
    //this.playAudio();
  }

  login(){
    if (this.loginForm.valid) {
      localStorage.setItem('token', 'fuctura');
      this.router.navigate(['/lista-contatos']);
   
    }
  }
}
