import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { GlobalEventsManager, AuthenticationService } from '../_services/index';


@Component({
  moduleId: module.id,
  selector: 'top-navigation',
  templateUrl: 'navigation-top.component.html'
})
export class NavigationTopComponent implements OnInit{

  private showNavBar: boolean = false;

  constructor(private gem: GlobalEventsManager, private authService: AuthenticationService, private router: Router) {
    
  }

  ngOnInit() {
    this.gem.showNavBar.subscribe(mode => {
      this.showNavBar = mode;
    });
  }

  logout() {
    this.authService.logout();
    let link = ['/'];
    this.router.navigate(link);
  }

}

