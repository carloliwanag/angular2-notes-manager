import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { User } from '../_models/index';
import { UserService } from '../_services/index';
import { GlobalEventsManager } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'user-home.component.html'
})

export class UserHomeComponent implements OnInit {
    currentUser: User;

    constructor(
        private userService: UserService, 
        private gem: GlobalEventsManager,
        private router: Router) {
            // this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        var user = localStorage.getItem('currentUser');
        var emit = false;
        if (user) {
            emit = true;
            this.currentUser = JSON.parse(user);  
        } 
        this.gem.showNavBar.emit(emit);
    }

    createNote() {
        let link = ['/note-form', this.currentUser.userId];
        this.router.navigate(link);
    }
}