import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {InfoUtente, Utente} from "../utenti";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = 'https://randomuser.me/api?results=50';

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<Utente[]> {
    return this.http.get(this.url).pipe(
      map((n: InfoUtente) => {return n.results;})
    );
  }

}
