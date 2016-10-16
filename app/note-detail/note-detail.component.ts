import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NoteService, AlertService } from '../_services/index';
import { Note } from '../_models/note';
@Component({
  moduleId: module.id,
  selector: 'note-detail',
  templateUrl: 'note-detail.component.html'
})
export class NoteDetailComponent implements OnInit {

  note: Note;

  constructor(
    private location: Location,
    private router: Router,
    private route: ActivatedRoute,
    private noteService: NoteService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let nId = params['noteId'];
      this.noteService.getByNoteId(nId).subscribe(
        note => {
          this.note = note.note;
        }
      );
    });
  }

  editNote(note: Note) {
    this.noteService.update(note).subscribe(
      data => {
        this.alertService.success(data.message, true);
        let link = ['/user'];
        this.router.navigate(link);
      },
      error => {
        this.alertService.error(error);
        let link = ['/home'];
        this.router.navigate(link);
      }
    );
  }

  delete(note: Note) {
    this.noteService.delete(note.id).subscribe(
      data => {
        this.alertService.success(data.message, true);
        let link = ['/user'];
        this.router.navigate(link);
      },
      error => {
        this.alertService.error(error);
        let link = ['/home'];
        this.router.navigate(link);
      }
    );
  }

  goBack(): void {
    this.location.back();
  }
}