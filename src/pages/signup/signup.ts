import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CidadeDTO } from '../../models/cidade.dto';
import { EstadoDTO } from '../../models/estado.dto';
import { EstadoService } from '../../services/domain/estado.service';
import { CidadeService } from '../../services/domain/cidade.service';
import { updateDate } from 'ionic-angular/umd/util/datetime-util';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  formGroup: FormGroup;
  estados: EstadoDTO[];
  cidades: CidadeDTO[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public estadoService: EstadoService,
    public cidadeService: CidadeService){

      this.formGroup = this.formBuilder.group({
        nome: ["Fulano", [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
        email: ["exemplo@gmail.com", [Validators.required, Validators.email]],
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

  ionViewDidLoad(){
    this.estadoService.findAll()
    .subscribe(response => {
      this.estados = response;
      this.formGroup.controls.estadoId.setValue(this.estados[0].id);
      this.updateCidades();
    },
      error => {});
  }

  updateCidades(){
    let estado_id = this.formGroup.value.estadoId;
    this.cidadeService.findAll(estado_id)
    .subscribe(response => {
      this.cidades = response;
      this.formGroup.controls.cidadeId.setValue("");
    },
      error => {});
  }

  signupUser(){
    console.log("Enviou o Form!");
  }
}
