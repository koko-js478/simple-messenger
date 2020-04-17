import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
    selector: 'signup-component',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css'],
    providers: [UserService]
})

export class SignupComponent implements OnInit {
    register;

    constructor(
        private userService: UserService
    ) {}

    ngOnInit(){
        this.register = {
            username: '',
            password: '',
        };
    }
    
    registerNewUser(){
        this.userService.registerUser(this.register).subscribe(
            response => {
                alert('User' + this.register.username + ' has been created')
            },
            error => console.log('error', error)
        );
    }
}