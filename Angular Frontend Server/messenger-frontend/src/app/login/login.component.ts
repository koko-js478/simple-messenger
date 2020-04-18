import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

import { Router } from '@angular/router';
import { StoreuserService } from '../storeUser.service';

@Component({
    selector: 'login-component',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [UserService]
})
export class LoginComponent implements OnInit {
    input;
    userdata;

    constructor(
        private router: Router,
        private userService: UserService,
        private storeUserService: StoreuserService
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
                this.userdata = response;
                this.storeUserService.savecrntuserid(this.userdata.user_id);

                alert('User ' + this.input.username + ' has been logged in')
                this.router.navigate(['/users', this.userdata.user_id]);
            },
            error => console.log('error', error)
        );        
    }

}