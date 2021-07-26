import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  usersList: User[];
  collection = { count: 10, data: [] };

  constructor() { }

  ngOnInit(): void {
    this.populateUsers();
  }
//metodo para preencher os usuarios com dados mocados

populateUsers() {
  for (let i = 0; i < this.collection.count; i++) {
    this.collection.data.push({
      name: 'nome' + i,
      username: 'username' + i,
      password: 'password' + i,
      admin: 'F'
    });
  }

  this.usersList = this.collection.data;
  console.log(this.usersList);
}
}


