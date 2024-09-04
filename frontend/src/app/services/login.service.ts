import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-response.type';
import { API_URL } from '../app.api';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) {}

  login(email: string, password: string){
    return this.httpClient.post<LoginResponse>(API_URL + "/login", {email, password}).pipe(
      tap((value) => {
        sessionStorage.setItem("auth-token", value.token)
        sessionStorage.setItem("username", value.name)
      })
    )
  }

  signup(name: string, email: string, password: string){
    return this.httpClient.post<LoginResponse>(API_URL + "/signup", {name, email, password}).pipe(
      tap((value) => {
        sessionStorage.setItem("auth-token", value.token)
        sessionStorage.setItem("username", value.name)
      })
    )
  }
}
