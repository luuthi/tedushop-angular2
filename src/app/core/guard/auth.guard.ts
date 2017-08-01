import {Injectable} from '@angular/core';
import {Router,CanActivate,RouterStateSnapshot,ActivatedRouteSnapshot} from '@angular/router';
import {SystemConstants} from '../common/system.constants';
import {UrlConstants} from '../common/url.constants';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private _router : Router){

    }
    canActivate(activeedRoute : ActivatedRouteSnapshot, _routeState : RouterStateSnapshot){
        if(localStorage.getItem(SystemConstants.CURRENT_USER)){
            return true;
        } else {
            this._router.navigate([UrlConstants.LOGIN],{queryParams : {
                returnUrl : _routeState.url
            }})
            return false;
        }
    }
}