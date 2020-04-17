import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, provideRoutes } from '@angular/router';

import { UserService } from '../user.service';

@Component({
    selector: 'user-profile-component',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.css'],
    providers: [UserService]
})
export class UserProfileComponent implements OnInit {
    usercurrentId;
    users;

    constructor(
        private route: ActivatedRoute,
        private userService: UserService,
    ) { }

    ngOnInit(){
        this.users = this.userService.getallUsers();
        this.route.paramMap.subscribe(params => {
            this.usercurrentId = params.get('userId');
          });
    }
}