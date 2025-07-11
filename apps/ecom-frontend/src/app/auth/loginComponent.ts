import { Component } from "@angular/core";
import { Oauth2Service } from "./oauth2.service";

@Component({
  selector: 'app-login',
  template: `<p>Please click login to continue</p>
             <button (click)="login()">Login</button>`,
})
export class LoginComponent {
  constructor(private oauth2Service: Oauth2Service) {}
  login() {
    this.oauth2Service.login();
  }
}
