import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { BaseResponse } from '../models/base-response';
import { Token } from '../models/token';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url: string = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  public get isAuthenticated(): boolean {
    const token = localStorage.getItem("token");
    if (!token) {
      return false;
    }
    return true;
  }

  public login(body: any): Observable<BaseResponse<Token>> {
    return this.http.post(this.url + "login", body).pipe(map((response: BaseResponse<Token>) => response));
  }
}
