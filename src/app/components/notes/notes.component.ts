import { Component, OnInit, Input } from '@angular/core';
import { INote } from 'src/app/interfaces/common.interface';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  @Input('note') note: INote;

  constructor() { }

  ngOnInit() {
  }

}
