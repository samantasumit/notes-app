import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private notesService: NotesService) { }

  ngOnInit() {
  }

  createNote() {
    const index = this.notesService.addNote();
  }

}
