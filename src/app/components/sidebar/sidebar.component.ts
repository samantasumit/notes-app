import { Component, OnInit, Input } from '@angular/core';
import { INote } from 'src/app/interfaces/common.interface';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input('notes') notes: Array<INote>;

  constructor(private notesService: NotesService) { }

  ngOnInit() {
  }

  selectNote(index: number) {
    this.notesService.selectNote(index);
  }

}
