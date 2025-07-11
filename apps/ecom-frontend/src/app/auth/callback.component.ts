import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
    selector: 'app-callback',
    template: `<p>Authenticating...</p>`,
})
export class CallbackComponent implements OnInit {
    constructor(
        private oidcSecurityService: OidcSecurityService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.oidcSecurityService.checkAuth().subscribe({
            next: (auth) => {
                if (auth.isAuthenticated) {
                    this.router.navigate(['/']);
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
