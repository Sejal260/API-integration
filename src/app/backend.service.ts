import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { coronaData} from "./coronaData";
import {Router} from "@angular/router"

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private signinUrl = "https://ionic-server-app.herokuapp.com/trainee/register";
  private loginUrl = "https://ionic-server-app.herokuapp.com/trainee/login";
  private coronaUrl = "https://coronavirus-19-api.herokuapp.com/countries";
  signin: any;


  constructor(private http:HttpClient,private _router:Router) { }
  public register(formData): Observable<any> {
    return this.http
      .post(this.signinUrl, formData, { observe: "response" })
      .pipe(catchError(this.handleError));
  }

  public login(formData):Observable<any>{
    return this.http
    .post(this.loginUrl, formData, { observe: "response" })
    .pipe(catchError(this.handleError));
  }

  public getData():Observable<coronaData[]>
  {
    return this.http.get<coronaData[]>(this.coronaUrl);
  }
  loggedIn(){
    return !!localStorage.getItem('token')
  }
  loggedOut(){
  localStorage.removeItem('token')
  this._router.navigate(['/login'])
  }

  public handleError(error: HttpErrorResponse) {
    return error.status.toString();
  }
}
