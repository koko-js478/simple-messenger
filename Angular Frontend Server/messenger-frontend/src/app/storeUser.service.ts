
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })
export class StoreuserService {

    crntuserid;

    constructor() { 
        this.crntuserid = -1;
    }

    savecrntuserid(userid) {
        this.crntuserid = userid;
        console.log(this.crntuserid);
    }

    getcrntuserid() {
        console.log(this.crntuserid);
        return this.crntuserid;
    }

}