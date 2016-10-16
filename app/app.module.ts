import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService, GlobalEventsManager, NoteService } from './_services/index';
import { UserHomeComponent } from './user-home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { NoteDetailComponent } from './note-detail/index';
import { HomeComponent } from './home/index';
import { NavigationTopComponent } from './navigation-top/index';
import { NoteListComponent } from './note-list/index';

import { NoteFormComponent } from './note-form/index';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        UserHomeComponent,
        LoginComponent,
        RegisterComponent,
        HomeComponent,
        NavigationTopComponent,
        NoteListComponent,
        NoteFormComponent,
        NoteDetailComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        NoteService,
        BaseRequestOptions,
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        GlobalEventsManager
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }