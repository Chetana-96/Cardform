import { Injectable } from '@angular/core';
import { RouterStateSnapshot, Router, ActivatedRouteSnapshot } from '@angular/router';
import { UserdataService } from './userdisplay/userdata.service';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class UserguardService {

  constructor(private userData:UserdataService, private router:Router) { }
}


canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return isUserLoggedIn(state.url);
  }
canLoad(route:Route){
    return this.isUserLoggedIn(route.path);
  }
isUserLoggedIn(url:string):=boolean{
    if(this.userData.isLoggedIn){
      return true;
    }
    this.userData.redirectURL=url;
    this.route.navigate(['/login']);
    return false;
  }
