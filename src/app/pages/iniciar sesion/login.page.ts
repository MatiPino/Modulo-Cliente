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
  public client: IClient = {
    Contrasena: '',
    Telefono: 0,
    Correo: '',
    Direccion: '',
    Rut_cliente: ''
  };

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
      Correo: this.credentialForm.value.Correo,
      Contrasena: this.credentialForm.value.Contrasena,
    };
    this.clientService.loginCliente(user).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem(
          'currentUser',
          JSON.stringify(res).substring(57, 66)
        );
        if (localStorage.key(0) == 'currentUser') {
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
        console.log(JSON.stringify(res));
      },
      (error) => {
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
    );
    this.credentialForm.reset();
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

}

