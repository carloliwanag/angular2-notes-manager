"use strict";
var router_1 = require('@angular/router');
var index_1 = require('./user-home/index');
var index_2 = require('./login/index');
var index_3 = require('./register/index');
var index_4 = require('./note-detail/index');
var index_5 = require('./home/index');
var index_6 = require('./note-form/index');
var index_7 = require('./_guards/index');
var appRoutes = [
    {
        path: 'user',
        component: index_1.UserHomeComponent,
        canActivate: [index_7.AuthGuard]
    },
    {
        path: 'login',
        component: index_2.LoginComponent
    },
    {
        path: 'register',
        component: index_3.RegisterComponent
    },
    {
        path: '',
        component: index_5.HomeComponent
    },
    {
        path: 'note-detail/:noteId',
        component: index_4.NoteDetailComponent,
        canActivate: [index_7.AuthGuard]
    },
    {
        path: 'note-form/:userId',
        component: index_6.NoteFormComponent,
        canActivate: [index_7.AuthGuard]
    },
    // otherwise redirect to home
    {
        path: '**',
        redirectTo: ''
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map