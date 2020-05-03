import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  formGroup: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder) {

      this.formGroup = this.formBuilder.group({
        nome: ["Treinamento", [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
        email: ["treinamento@gmail.com", [Validators.required, Validators.email]],
        tipo: ["1", [Validators.required]],
        cpfOuCnpj: ["09618319944", [Validators.required, Validators.minLength(11), Validators.maxLength(14)]],
        senha: ["123", [Validators.required]],
        logradouro: ["Rua Mão", [Validators.required]],
        numero: ["99", [Validators.required]],
        complemento: ["Casa", []],
        bairro: ["Vila Village", []],
        cep: ["83326-500", [Validators.required]],
        telefone1: ["99998888", [Validators.required]],
        telefone2: ["", []],
        telefone3: ["", []],
        estadoId: [null, [Validators.required]],
        cidadeId: [null, [Validators.required]]
      })
  }

  signupUser(){
    console.log("Enviou o Form!");
  }
}
