import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FaConfig, FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faCircleCheck as farCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { faBars, faBuilding, faCartShopping, faCheck, faCheckCircle, faCircleExclamation, faCircleQuestion, faEnvelopeOpenText, faHeart, faMoon, faScaleBalanced, faSun, faTruckFast, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Oauth2Service } from './auth/oauth2.service';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ToastService } from './shared/toast/toast.service';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    FontAwesomeModule,
    CommonModule,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private faIconLibrary = inject(FaIconLibrary);
  private faConfig = inject(FaConfig);
  private oauth2Service = inject(Oauth2Service);
  toastService = inject(ToastService);
  public title = 'ecom-frontend';
  platformId = inject(PLATFORM_ID);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      // this.oauth2Service.initAuthentication();
    }
    this.oauth2Service.connectedUserQuery = this.oauth2Service.fetch();
  }

  ngOnInit(): void {
    this.initFontAwesome();
  }

  private initFontAwesome() {
    this.faConfig.defaultPrefix = 'fas';
    this.faIconLibrary.addIcons(
      faCartShopping, faTruckFast, faTwitter,
      faYoutube, faFacebook, faUser,
      faXmark, farCircleCheck, faBars,
      faMoon, faSun, faCircleExclamation,
      faCheck, faCheckCircle, faHeart,
      faTwitter, faFacebook, faInstagram,
      faLinkedin, faTruckFast, faCircleQuestion,
      faEnvelopeOpenText, faBuilding, faScaleBalanced
    );
  }
}
