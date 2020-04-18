import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, provideRoutes, Router } from '@angular/router';

import { UserService } from '../user.service';
import { StoreuserService } from '../storeUser.service';

@Component({
    selector: 'user-profile-component',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.css'],
    providers: [UserService]
})
export class UserProfileComponent implements OnInit {
    usercurrentId;
    users;
    crntauthenticuser;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private userService: UserService,
        private storeuserService: StoreuserService,
    ) { 
        this.crntauthenticuser = this.storeuserService.getcrntuserid();
    }

    ngOnInit(){
        this.users = this.userService.getallUsers();
        
        console.log(this.crntauthenticuser);
        this.route.paramMap.subscribe(params => {
            this.usercurrentId = params.get('userId');
            if(this.crntauthenticuser != this.usercurrentId){
                this.router.navigate(['/login']);
            }
          });        
    }
}