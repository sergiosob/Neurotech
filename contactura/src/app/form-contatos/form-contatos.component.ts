
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Contacts } from '../models/contacts';
import { ContatosService } from '../service/contatos/contatos.service';

@Component({
  selector: 'app-form-contatos',
  templateUrl: './form-contatos.component.html',
  styleUrls: ['./form-contatos.component.scss']
})
export class FormContatosComponent implements OnInit {

  formContatos = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required])
  });
  
  contact: Contacts;

  constructor(public contatosService: ContatosService, private router: Router) {}

  ngOnInit(): void {
   // this.formContatos.reset();
    this.contatosService.botaoEdit.subscribe( edit => {
      if (edit !== null){
        //console.log(edit, 'valor do edit');
        this.contact = edit;
        this.formContatos.get('name').setValue(edit.name);
        this.formContatos.get('phone').setValue(edit.phone);
        this.formContatos.get('email').setValue(edit.email);
      //}else{
      //  this.formContatos.reset();
      }
    });
   }

   
  savec(){('form');
    if (this.formContatos.valid){
      if (this.formContatos.valid){
        if (this.contact){
          this.edit(this.contact);
        }else{
          this.create();
        }
      }
      Swal.fire({
        icon:'success',
        title: 'Eeeeeba..',
        text: 'Contato criado com sucesso!',
        timer: 3000
      });
      this.formContatos.reset();
      this.router.navigate(['/lista-contatos']);
    }else{    
      Swal.fire({
      icon:'error',
      title: 'Oooops..',
      text: 'Cadastro não realizado, preencha corretamente todos os campos',
      timer: 3000
    });
   }
  }

  edit(contact: Contacts){
    contact.name =  this.formContatos.get('name').value;
    contact.phone = this.formContatos.get('phone').value;
    contact.email =  this.formContatos.get('email').value;
    this.contatosService.updateContact(contact).subscribe(
      data => {
        Swal.fire({
          icon: 'success',
          title: 'Eeeeeba..',
          text: 'Contato editado com sucesso!'
        });
        this.router.navigate(['/lista-contatos']);
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
    this.contatosService.createContacts(this.formContatos.value).subscribe(
      data => {
        Swal.fire({
          icon: 'success',
          title: 'Eeeeeba..',
          text: 'Contato criado com sucesso!'
        });
        this.router.navigate(['/lista-contatos']);
        },
        error => {
          Swal.fire({
            icon: 'error',
            title: 'Ooops..',
            text: 'Erro ao criar contato!'
          });
        }
    );
  }
  }