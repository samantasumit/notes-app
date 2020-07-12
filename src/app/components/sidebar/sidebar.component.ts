import { Component, OnInit, Input } from '@angular/core';
import { INote } from 'src/app/interfaces/common.interface';
import { NotesService } from 'src/app/services/notes.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input('notes') notes: Array<INote>;
  searchText: string;
  searchTextSubscription: Subscription;

  constructor(public notesService: NotesService) { }

  ngOnInit() {
    this.searchTextSubscription = this.notesService.searchTextSubject.subscribe((text: string) => {
      this.searchText = text || '';
    });
  }

  selectNote(index: number) {
    this.notesService.selectNote(index);
  }

  ngOnDestroy() {
    if (this.searchTextSubscription) {
      this.searchTextSubscription.unsubscribe();
    }
  }

}
