/* this file is to 
 1) load build-in modules (NgModule,BrowserModule)
 2) run the customized module AppComponent (which is to specify the web components to obtain, and how to display it)
*/

// import the angular modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { appRoutingModule } from './app.routing';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';

// check app.component.ts, in which there is a class 'AppComponent' that is ready to be imported here.
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';

import { AlertComponent } from './_components';

/* decorate @NgModule, import the broswermodule (enable browsing in different browers like Chrome, firefox, etc), 
 and declare AppComponent so that it can be used by all components and templates, 
 and bootstrap the AppComponent (what the heck is that? bootstrap is a pack of solution for CSS formating...
 https://angular.io/guide/bootstrapping, and  https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)
 */
@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        AlertComponent    
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        // provider used to create fake backend

        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

// make the class AppModule ready to be imported by other modules
export class AppModule { }
