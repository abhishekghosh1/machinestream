import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class MachineGuardService implements CanActivate {

  constructor(private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const id = route.url[1].path;
    if (!id || id.length < 1) {
      alert('Invalid machine Id');
      this._router.navigate(['/machines']);
      return false;
    }
    return true;
  }
}
