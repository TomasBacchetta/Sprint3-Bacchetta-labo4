import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './Services/login.service';
import { LoginComponent } from './Vistas/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'Sprint3';

  constructor(
    public loginService : LoginService,
    private router : Router

    ){

  }

  

  unLogin() {
    this.loginService.desloguearUsuario();
    this.router.navigateByUrl("");

  }
}
