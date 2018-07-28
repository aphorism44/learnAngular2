import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from '../user.service';
import { User } from '../User';

import 'rxjs/Rx';

//https://angular.io/tutorial/toh-pt6

@Component({
  selector: 'app-http-mock',
  templateUrl: './http-mock.component.html',
  styleUrls: ['./http-mock.component.css'],
  providers: [UserService]
})
export class HttpMockComponent implements OnInit {
  users = [];
  selectedUser;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  selectUser(user) {
    this.selectedUser = user;
  }

  getUsers() {
    this.userService.getUsers()
      .subscribe(us => this.users = us);
  }


  createUser(userName: string, email: string) {
    this.selectedUser = null;
    let newUser = {
      'userName': userName.trim()
      , 'email': email.trim()
    };
    if (!newUser.userName || !newUser.email)
      return;

    this.userService.createUser(newUser as User)
      .subscribe(newUser => {this.users.push(newUser);
      });
  }

  updateUser(user) {
    this.userService.updateUser(user)
      .subscribe(() => this.getUsers());
  }

  deleteUser(userId) {
    this.userService.deleteUser(userId)
      .subscribe(() => this.getUsers()  );
  }


}
