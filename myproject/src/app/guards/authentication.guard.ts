import { LoginService } from './../services/login.service';
import { Injectable, Injector } from '@angular/core';
import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivateChild
} from '@angular/router';

@Injectable()
export class AuthenticationGuard implements CanActivate, CanActivateChild {
    loginService: LoginService;

    constructor(private router: Router, private injector: Injector) {
        this.loginService = this.injector.get(LoginService);
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.loginService.userUID) {
            return true;
        } else {
            this.router.navigate(['/login']);
        }
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.loginService.userUID) {
            return true;
        } else {
            this.router.navigate(['/login']);
        }
    }
}
