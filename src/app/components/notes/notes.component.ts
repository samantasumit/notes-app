import { Component, OnInit, Input } from '@angular/core';
import { INote } from 'src/app/interfaces/common.interface';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  @Input('note') note: INote;

  constructor(public notesService: NotesService) { }

  ngOnInit() {
  }

  updateNoteTime() {
    this.notesService.updateNoteTime();
  }

}
