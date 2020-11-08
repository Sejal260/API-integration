import { Injectable } from '@angular/core';
import { CanActivate,Router} from '@angular/router';
import { BackendService } from './backend.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _router:Router,private service:BackendService){}
  canActivate():boolean{
    if (this.service.loggedIn()){
      return true
    }else{
      this._router.navigate(['/login'])
      return false
    } 
  }
}
