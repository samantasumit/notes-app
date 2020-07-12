import { Component } from '@angular/core';
import { NotesService } from './services/notes.service';
import { INote } from './interfaces/common.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(public notesService: NotesService) {

  }
}
