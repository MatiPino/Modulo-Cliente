import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/service/cliente.service';
import { IClient } from 'src/app/interface/ICliente';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { IonModal } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild(IonModal) modal: IonModal;
  credentialForm: FormGroup;
  public client: IClient;

  public c_password: '';

  private clientService: ClienteService;

  constructor(
    private fb: FormBuilder,
    service: ClienteService,
    private router: Router,
    private alertCtrl: AlertController,
    private http: HttpClient
  ) {
    this.clientService = service;
  }

  private status: boolean = false;

  goRegister() {
    this.router.navigateByUrl('/registro');
  }

  ngOnInit() {
    this.credentialForm = this.fb.group({
      Correo: [''],
      Contrasena: [''],
    });
  }

  async login() {
    const user = {
      correo: this.credentialForm.value.Correo,
      password: this.credentialForm.value.Contrasena,
    };

    var res:any = await this.clientService.loginCliente(user).toPromise();

    if(!res){
      this.alertCtrl
      .create({
        header: 'Error al iniciar sesión',
        buttons: [
          {
            text: 'Continuar',
          },
        ],
      })
      .then((alert) => alert.present());
    }

    localStorage.setItem('currentUser', res.data.Rut_cliente);

    if (localStorage.getItem('currentUser')) {
      this.alertCtrl
        .create({
          header: 'Inicio de sesión exitoso',
          buttons: [
            {
              text: 'Continuar',
              handler: () => {
                this.router.navigate(['/tabs/principal']).then(() => {
                  window.location.reload();
                });
              },
            },
          ],
        })
        .then((alert) => alert.present());
    }

    this.credentialForm.reset();
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

}