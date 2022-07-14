import { Component, OnInit} from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import {Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from 'src/app/app.component';
import { IUsuario } from 'src/app/interface/IUsuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit{
  public user: IUsuario;
  public userInfo = {
    Rut_cliente: '',
    Telefono: 0,
    Direccion: '',
    Correo: ''
  };

  public date = new Date();
  public now = this.date.toLocaleDateString();

  constructor(
    public service: UserService,
    public alertCtrl: AlertController,
    public router: Router,
    public appComponent: AppComponent
  ) {}

   
  public userRut: string = localStorage.getItem('currentUser');

  ngOnInit() {
    this.service.getUser(this.userRut).then((res) => {
      this.userInfo = res.client[0];
      console.log(this.userInfo);
      
      this.user = res.client[0];
    });
  }

  async deleteUser() {
    const alert = await this.alertCtrl.create({
      header: 'Eliminar Usuario',
      cssClass: 'delete-alert',
      message: 'Esta accion es permanente e irrevocable, piensalo bien...',
      buttons: [
        {
          text: 'Eliminar',
          cssClass: 'boton-eliminar',
          handler: () => {
            this.service.deleteUser(this.user.Rut_cliente).subscribe((res) => {
              console.log(res);
              this.router.navigateByUrl('/');
            });
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
        },
      ],
    });
    await alert.present();
  }

  async updateUser() {
    this.alertCtrl
      .create({
        header: 'Modificar Datos',
        cssClass: 'modify-alert',
        message: 'En esta ventana podras modificar los datos que desees.',
        inputs: [
          {
            name: 'correo',
            placeholder: 'Correo: ' + this.user.Correo,
          }
        ],
        buttons: [
          {
            text: 'Confirmar',
            cssClass: 'boton-modificar',
            handler: (res) => {

              if (res.correo == '') {
                res.correo = this.user.Correo;
              } else {
                res.correo;
              }

              var newData = {
                Rut: this.user.Rut_cliente,
                Direccion: this.user.Direccion,
                Telefono: this.user.Telefono,
                Correo: res.correo,
              };

              this.service.updateUser(newData).subscribe((data) => {
                this.ngOnInit();
              });
            },
          },
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'cancelar-modificar',
          },
        ],
      })
      .then((alert) => alert.present());
  }

  async logOut() {
    const alert = await this.alertCtrl.create({
      header: 'Cerrar sesion',
      cssClass: 'delete-alert',
      message:
        'Al confirmar, cerraras tu sesion y volveras a la pantalla de login',
      buttons: [
        {
          text: 'Confirmar',
          cssClass: 'boton-eliminar',
          handler: () => {
            localStorage.removeItem('currentUser');
            this.router.navigate(['']).then(() => {
              window.location.reload();
            });
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
        },
      ],
    });
    await alert.present();
  } 

}
