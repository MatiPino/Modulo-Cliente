import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IUsuario } from 'src/app/interface/IUsuario';
import { RegisterService } from 'src/app/service/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  public estado_nroDocumento: boolean = false;
  public tipoContrasenia = 'password';

  registerForm: FormGroup = new FormGroup({
    Contrasena: new FormControl('', [Validators.required, Validators.minLength(8)]),
    Telefono: new FormControl('', [Validators.required]),
    Correo: new FormControl('', [Validators.required, Validators.email]),
    Direccion: new FormControl('', [Validators.required]),
    Rut_cliente: new FormControl('', [Validators.required, Validators.maxLength(9)]),
  });

  constructor(private servicio: RegisterService, private router: Router) {}

  ngOnInit() {}

  public mostrarContrasenia() {
    this.tipoContrasenia =
      this.tipoContrasenia == 'password' ? 'text' : 'password';

  }

  public sigPagina(clase: string) {
    let pagina = document.getElementsByClassName(clase)[0];

    if (clase == 'formularioUno') {
      let sigFormulario = document.getElementsByClassName(
        'formularioTres oculta'
      )[0];
      sigFormulario.className = sigFormulario.className.split(' ')[0];
    } else if (clase == 'formularioTres') {
      let sigFormulario = document.getElementsByClassName(
        'formularioCuatro oculta'
      )[0];
      sigFormulario.className = sigFormulario.className.split(' ')[0];
    } else if (clase == 'formularioCuatro') {
      console.log('formulario 4');
      return;
    }

    pagina.className = pagina.className + ' oculta';
  }

  public antPagina(clase: string) {
    let pagina = document.getElementsByClassName(clase)[0];

    if (clase == 'formularioTres') {
      let paginaAnterior = document.getElementsByClassName('formularioUno')[0];
      paginaAnterior.className = paginaAnterior.className.split(' ')[0];
    } else if (clase == 'formularioCuatro') {
      let paginaAnterior = document.getElementsByClassName(
        'formularioTres oculta'
      )[0];
      paginaAnterior.className = paginaAnterior.className.split(' ')[0];
    }

    pagina.className = pagina.className + ' oculta';
  }

  public validarPagina2() {
    let llaves = Object.keys(this.registerForm.value).filter((m) => {
      return m != 'Contrasena';
    });

    for (let i = 0; i < llaves.length; i++) {
      if (this.registerForm.get(llaves[i]).status === 'INVALID') {
        return true;
      }
    }
    return false;
  }

  public onSubmit(e) {
    let nuevoUsuario: IUsuario = {
      Contrasena: this.registerForm.value.Contrasena,
      Telefono: this.registerForm.value.Telefono,
      Correo: this.registerForm.value.Correo,
      Direccion: this.registerForm.value.Direccion,
      Rut_cliente: this.registerForm.value.Rut_cliente,
    };
    

    this.servicio.postUsuario(nuevoUsuario).subscribe((data) => {
      return;
    });
    this.goHome();
  }

  goHome() {
    this.router.navigateByUrl('');
  }
}