// this file is to 1) load build-in modules (polyfill,platformBrowserDynamic)
// 2) run the customized module 'AppModule' (which is to specify where are the web components, and how to display )

// import polyfill modules (what is polyfill? see polyfill.ts )
import './polyfills';

// import the module to deal with web component formating (like CSS)
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// bootstrap means formating web components
platformBrowserDynamic().bootstrapModule(AppModule);