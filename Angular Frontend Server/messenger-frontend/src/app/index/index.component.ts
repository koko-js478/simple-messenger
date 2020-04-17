import { Component, OnInit } from '@angular/core';

@Component({
selector: 'index-component',
templateUrl: './index.component.html',
styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

    constructor() {
    }

    ngOnInit(){

    }
    
    signup() {
        window.alert('The user has been signed up!');
    }
}