import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NoteService} from '../_services/note.service';
import { User, Note } from '../_models/index';


@Component({
  moduleId: module.id,
  selector: 'note-list',
  templateUrl: 'note-list.component.html'
})
export class NoteListComponent implements OnInit {

  @Input()
  user:User;

  notes = [];

  constructor(
    private noteService: NoteService,
    private router: Router  
  ) {}

  ngOnInit() {
    this.getNotes();
  }

  getNotes() {
    this.noteService.getByUserId(this.user.userId).subscribe(
      notes => {
        if (notes && notes.notes) {
          this.notes = notes.notes
        } else {
          this.notes = [];
        }
      }
    );
  }


  gotoDetail(note:Note) {
    let link = ['/note-detail', note.id];
    this.router.navigate(link);
  }
}