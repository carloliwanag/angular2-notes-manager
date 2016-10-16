import { Component, OnInit } from '@angular/core';

import { GlobalEventsManager } from '../_services/index';

@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private gem: GlobalEventsManager) {

  }

  ngOnInit() {
    var user = localStorage.getItem('currentUser');
    var emit = false;
    if (user) {
      emit = true; 
    }
    this.gem.showNavBar.emit(emit);
  }
}