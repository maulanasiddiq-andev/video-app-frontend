import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public get isAuthenticated(): boolean {
    const token = localStorage.getItem("token");
    if (!token) {
      return false;
    }
    return true;
  }
}
