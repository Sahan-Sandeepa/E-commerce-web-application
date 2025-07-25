import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ComingSoonGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const currentUrl = state.url;

    if (currentUrl === '/coming-soon') {
      return true;
    }

    const isPageImplemented = false;

    if (!isPageImplemented) {
      this.router.navigate(['/coming-soon']);
      return false;
    }

    return true;
  }
}

