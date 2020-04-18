
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })
export class StoreuserService {

    crntuserid;
    crnttokenkey;

    constructor() { 
        this.crntuserid = -1;
        this.crnttokenkey = "";
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