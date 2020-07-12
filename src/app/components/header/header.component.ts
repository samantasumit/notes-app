import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { INote } from 'src/app/interfaces/common.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchText: string;

  constructor(public notesService: NotesService) { }

  ngOnInit() {
  }

  createNote() {
    const index = this.notesService.addNote();
  }

  searchNotes() {
    setTimeout(()  => {
      this.notesService.searchTextSubject.next(this.searchText);
    });
  }

  deleteNote(selectedNote: INote) {
    this.notesService.deleteNote(selectedNote);
  }

  toggleSidebar() {
    this.notesService.toggleSidebar();
  }

}
