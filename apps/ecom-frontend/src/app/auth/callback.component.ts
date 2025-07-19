import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { take } from 'rxjs';

@Component({
  selector: 'app-callback',
  template: `<div class="flex h-screen w-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center space-y-4">
    <div class="animate-spin rounded-full h-12 w-12 border-t-4 border-primary border-solid"></div>
    <p class="text-gray-700 dark:text-gray-300 text-lg font-medium">Authenticating, please wait...</p>
  </div>
  </div>`,
})
export class CallbackComponent implements OnInit {
  constructor(
    private oidcSecurityService: OidcSecurityService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.oidcSecurityService
      .checkAuth()
      .pipe(take(1))
      .subscribe({
        next: (auth) => {
          if (auth.isAuthenticated) {
            this.router.navigate(['/'], { replaceUrl: true });
          } else {
            this.router.navigate(['/login']);
          }
        },
        error: () => {
          this.router.navigate(['/login']);
        },
      });
  }
}
