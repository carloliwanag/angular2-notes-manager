import { Routes, RouterModule } from '@angular/router';

import { UserHomeComponent } from './user-home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { NoteDetailComponent } from './note-detail/index';
import { HomeComponent } from './home/index';
import { NoteFormComponent } from './note-form/index';
import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
    { 
        path: 'user', 
        component: UserHomeComponent, 
        canActivate: [AuthGuard] 
    },
    { 
        path: 'login', 
        component: LoginComponent 
    },
    { 
        path: 'register', 
        component: RegisterComponent 
    },
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'note-detail/:noteId',
        component: NoteDetailComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'note-form/:userId',
        component: NoteFormComponent,
        canActivate: [AuthGuard]
    },
    // otherwise redirect to home
    { 
        path: '**', 
        redirectTo: '' 
    }
];

export const routing = RouterModule.forRoot(appRoutes);