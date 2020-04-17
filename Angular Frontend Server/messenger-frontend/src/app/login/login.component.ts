import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
    selector: 'login-component',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [UserService]
})
export class LoginComponent implements OnInit {
    input;

    constructor(
        private userService: UserService
    ) {}

    ngOnInit(){
        this.input = {
            username: '',
            password: '',
        };
    }

    loginNewUser(){
        this.userService.loginUser(this.input).subscribe(
            response => {
                alert('User ' + this.input.username + ' has been logged in')
            },
            error => console.log('error', error)
        );
    }

}