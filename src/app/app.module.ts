import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ViewEventsComponent } from './event/view-events/view-events.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EventComponent } from './event/event.component';
import { EventApiService } from './event-api.service';
import { CreateEventComponent } from './event/create-event/create-event.component';
import { EditEventComponent } from './event/edit-event/edit-event.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewEventsComponent,
    EventComponent,
    CreateEventComponent,
    EditEventComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [EventApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
