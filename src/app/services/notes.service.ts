import { Injectable } from '@angular/core';
import { INote } from '../interfaces/common.interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  static id = new Date().getTime();
  searchTextSubject: Subject<string>;
  notes: Array<INote>;
  selectedNote: INote;
  isSidebarExpanded: boolean;

  constructor() {
    this.isSidebarExpanded = false;
    this.searchTextSubject = new Subject();
    this.notes = [];
    this.getNotesFromStorage();
    if (this.notes.length == 0) {
      // this.addNote();
    } else if (!this.selectedNote) {
      this.selectedNote = this.notes[0] || null;
    }
  }

  addNote() {
    const note: INote = {
      id: NotesService.id++,
      title: '',
      data: '',
      lastUpdated: new Date()
    };
    this.notes.unshift(note);
    this.addNotesToStorage(this.notes);
    this.selectedNote = this.notes[0];
  }

  addNotesToStorage(notes: Array<INote>) {
    try {
      localStorage.setItem('notes', JSON.stringify(notes));
    } catch (e) {
      console.warn(e);
    }
  }

  getNotesFromStorage() {
    try {
      const notes = JSON.parse(localStorage.getItem('notes'));
      if (typeof notes === 'object' && Array.isArray(notes)) {
        this.notes = notes;
      }
    } catch (e) {
      console.warn(e);
    }
  }

  editNote(index: number, title: string, data: string) {
    if (this.notes[index]) {
      const note = this.notes[index];
      note.title = title;
      note.data = data;
      note.lastUpdated = new Date();
      this.addNotesToStorage(this.notes);
    }
  }

  updateNoteTime() {
    if (this.selectedNote) {
      this.selectedNote.lastUpdated = new Date();
      this.addNotesToStorage(this.notes);
    }
  }

  selectNote(index: number) {
    if (this.notes[index]) {
      this.selectedNote = this.notes[index];
    }
  }

  findNoteIndex(id: number): number {
    let index = 0;
    for (let note of this.notes) {
      if (note.id === id) {
        return index;
      }
      index++;
    }
    return -1;
  }

  deleteNote(selectedNote: INote) {
    if (selectedNote) {
      const index = this.findNoteIndex(selectedNote.id);
      if (index != -1) {
        this.notes.splice(index, 1);
        this.selectedNote = this.notes[0] || null;;
        this.addNotesToStorage(this.notes);

      }
    }
  }

  toggleSidebar() {
    this.isSidebarExpanded = !this.isSidebarExpanded;
  }
}
