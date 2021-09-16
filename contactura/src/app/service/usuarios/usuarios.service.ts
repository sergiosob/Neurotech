  
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Authentication, StorageInfo, User } from '../../models/user';
import { environment } from 'src/environments/environment';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private dataEdit = new BehaviorSubject<User>(null);
  botaoEdit = this.dataEdit.asObservable();

  constructor(private http: HttpClient) {
    console.log('Deu Ruim')
   }

    api_url = environment.api_url;
   
  authentication(authentication: Authentication) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(authentication.username + ':' + authentication.password)});
    return this.http.get(this.api_url + 'user/login', {headers}).pipe (
      map(
        authData =>  {
        
         let storageInformation: StorageInfo = {
           admin: authData[1],
           token: authData[0]
         }

         console.log(storageInformation);
         return storageInformation;
        }
      )
    )

      }
  username = localStorage.getItem('username');
  password = localStorage.getItem('password');
    getUsersList(usuarios:User){
      this.dataEdit.next(usuarios);
    }
    getUser(){
      const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(this.username + ':' + this.password)});
      return this.http.get<User[]>(this.api_url + 'user', {headers}).pipe(
        map(
          userData => {
            if (userData){
              return userData;
            }else{
              return [];
            }
          }
        )
      );
    }
  
    createUser(user: User){
      const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(this.username + ':' + this.password)});
      return this.http.post<User>(this.api_url + 'user', user, {headers}).pipe(
        map(
          userData => {
            if (userData){
              return userData;
            }else{
              return [];
            }
          }
        )
      );
    }
  
    deleteUser(id: number){
      const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(this.username + ':' + this.password)});
      return this.http.delete(this.api_url + 'user/' + id, {headers, responseType: 'text' as 'text'}).pipe(
        map(
          userData => {
            return userData;
          }
        )
      );
    }
  
    updateUsuarios(user: User){
      const id = user.id;
      const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(this.username + ':' + this.password)});
      return this.http.put<User>(this.api_url + 'user/' + id, user, {headers}).pipe(
        map(
          userData => {
            if (userData){
              return userData;
            }else{
              return [];
            }
          }
        )
      );
    }
};