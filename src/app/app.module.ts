import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NotesComponent } from './components/notes/notes.component';
import { HeaderComponent } from './components/header/header.component';
import { OrderByPipe } from './pipes/order-by.pipe';
import { SearchTextPipe } from './pipes/search-text.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NotesComponent,
    HeaderComponent,
    OrderByPipe,
    SearchTextPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
