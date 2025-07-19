import { Component } from "@angular/core";
import { Oauth2Service } from "./oauth2.service";

@Component({
  selector: 'app-login',
  template: `<div class="flex h-screen w-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center space-y-6 p-8 rounded-lg shadow-lg bg-white dark:bg-gray-800">
    <h1 class="text-2xl font-semibold text-gray-800 dark:text-gray-100">Welcome Back!</h1>
  </div>
</div>`,
})
export class LoginComponent {
  constructor(private oauth2Service: Oauth2Service) { }
  login() {
    this.oauth2Service.login();
  }
}
