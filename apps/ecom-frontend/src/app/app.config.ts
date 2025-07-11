import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideQueryClient, QueryClient } from '@tanstack/angular-query-experimental';
import { AbstractSecurityStorage, authInterceptor, LogLevel, provideAuth } from 'angular-auth-oidc-client';
import { provideNgxStripe } from 'ngx-stripe';
import { environment } from '../environments/environment';
import { appRoutes } from './app.routes';
import { SsrStorageService } from './auth/ssr-storage.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes, withComponentInputBinding()),
    provideHttpClient(withFetch(), withInterceptors([authInterceptor()])),
    provideAuth({
      config: {
        authority: environment.kinde.authority,
        redirectUrl: environment.kinde.redirectUrl,
        postLogoutRedirectUri: environment.kinde.postLogoutRedirectUri,
        clientId: environment.kinde.clientId,
        scope: 'openid profile email',
        silentRenew: false,
        useRefreshToken: false,
        responseType: 'code',
        // silentRenew: true,
        // useRefreshToken: true,
        logLevel: LogLevel.Warn,
        secureRoutes: [environment.apiUrl],
        customParamsAuthRequest: {
          audience: environment.kinde.audience,
          // prompt: 'login',
        },
      },
    }),
    { provide: AbstractSecurityStorage, useClass: SsrStorageService },
    provideQueryClient(new QueryClient()),
    provideNgxStripe(environment.stripePublishableKey),
  ],
};