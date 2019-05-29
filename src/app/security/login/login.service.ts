import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { MEAT_API } from '../../app.api'
import { User } from './user.model'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/do'

@Injectable()
export class LoginService {

  user: User

  constructor(private http: HttpClient){}

  login(email: string, password: string): Observable<any> {
    return this.http.post<User>(`${MEAT_API}/login`, {email: email, password: password})
                                .do(user => this.user = user)
  }

  isLogged(): boolean {
    return this.user !== undefined
  }
}
