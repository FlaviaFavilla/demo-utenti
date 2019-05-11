import { Component, OnInit } from '@angular/core';
import {Utente} from "../../utenti";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-lista-utenti',
  templateUrl: './lista-utenti.component.html',
  styleUrls: ['./lista-utenti.component.scss']
})
export class ListaUtentiComponent implements OnInit {

  users : Utente[];
//  public users : Utente[] = this.userService.getUsers().subscribe( next => {
 //   console.log('ok' , next);
//  });


  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe( next => {
      this.users = next;
      console.log(next)
    });
  }

}
