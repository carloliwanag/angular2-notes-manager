import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Note } from '../_models/note';
import { User } from '../_models/user';
import { NoteService, AlertService } from '../_services/index';

@Component({
    moduleId: module.id,
    selector: 'note-form',
    templateUrl: 'note-form.component.html'
})
export class NoteFormComponent implements OnInit {
    private note: Note = new Note();

    private userId: number;

    private loading: boolean = false;
    constructor(
        private noteService: NoteService,
        private alertService: AlertService,
        private router: Router,
        private location: Location,
        private route: ActivatedRoute
    ) { }

    submitRequest(note: Note) {
        note.userId = this.userId;
        this.loading = true;
        this.noteService.create(note)
            .subscribe(
                data => {
                    this.alertService.success("Note was succesfully created", true);
                    let link = ['/user'];
                    this.router.navigate(link);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                }
            );
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let uId = +params['userId'];
            this.userId = uId;
        });
    }

    goBack(): void {
        this.location.back();
    }
}