import { Injectable } from '@angular/core';
import { INote } from '../interfaces/common.interface';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  notes: Array<INote>;
  selectedNote: INote;

  constructor() {
    this.notes = [];
  }

  addNote(): number {
    const note: INote = {
      title: '',
      data: '',
      lastUpdated: new Date()
    };
    this.notes.push(note);
    const currentIndex = this.notes.length - 1
    this.selectedNote = this.notes[currentIndex];
    return currentIndex;
  }

  editNote(index: number, title: string, data: string) {
    if (this.notes[index]) {
      const note = this.notes[index];
      note.title = title;
      note.data = data;
    }
  }

  selectNote(index: number) {
    if (this.notes[index]) {
      this.selectedNote = this.notes[index];
    }
  }

  deleteNote(index: number) {
    if (this.notes[index]) {
      this.notes.splice(index, 1);
    }
  }
}
