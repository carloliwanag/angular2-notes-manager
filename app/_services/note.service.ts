import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Note } from '../_models/note';

@Injectable()
export class NoteService {
  constructor(private http: Http) {}

  getByUserId(userId:number) {
    return this.http.get('http://localhost:3020/api/notes/user/' + userId).map((response : Response) => {
      if (response) {
        var notes = response.json();
        return notes;
      }
    });
  }

  getByNoteId(noteId:number) {
    return this.http.get('http://localhost:3020/api/notes/' + noteId).map((response: Response) => response.json());
  }

  create(note: Note) {
    return this.http.post('http://localhost:3020/api/notes', note).map((response: Response) => response.json());
  }

  update(note: Note) {
    return this.http.put('http://localhost:3020/api/notes/' + note.id, note).map((response: Response) => response.json());
  }

  delete(noteId) {
    return this.http.delete('http://localhost:3020/api/notes/' + noteId).map((response: Response) => response.json());
  }



  
}
