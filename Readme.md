Based on instructions in F:\Personal\Dropbox\English Writing\MyBlog at wordpress\Angular to set up a website with log in register.docx
A. Create the Base Project Structure
This part is to create the basic structure, and a home page (index.html) with one line ‘Hello Angular 8!’
The tutorial of this part can be found at https://jasonwatmore.com/post/2019/04/24/angular-7-tutorial-part-2-create-base-project-structure-webpack-config. 

1. Create package.json
•	In vscode, and under the project root, create a new file (by hitting the new file button) and name it ‘package.json’. The full contents of package.json can be found at ‘https://jasonwatmore.com/post/2019/06/10/angular-8-user-registration-and-login-example-tutorial#package-json’. 
•	In VSCode, and in the file of package.json, paste { "name": " a8login_sbs ",    "version": "1.0.0" }. 
Question: do I have to sue the same name as the folder name (a8login_stepbystep)?As a test, I'll put a different name here

2. Install Angular 8 Dependencies. 
•	In the node js command window, type:
npm install -save @angular/common@8 @angular/compiler@8 @angular/core@8 @angular/forms@8 @angular/platform-browser@8 @angular/platform-browser-dynamic@8 @angular/router@8 core-js@3 rxjs@6 zone.js@latest
•	These are dependent packages that are required for angular to build the structure. Description of these package files can be found at the part 2 tutorial web page (as stated in the beginning of part A). After downloading and installing these files, the names and versions of the packages will be added automatically into package.json. 
•	Questions: 1) why not developing a batch file to return such npm install command? 2) how to check and update to the most recent version of packages (like for zone.js@0, how to detect whether there is a version 0.1.x and install that version)
Answer: 2) use @latest to install the latest package

3. Install Angular 8 Develop Dependencies. 
•	In the node js command window, type:
npm install --save-dev @types/node@12 angular2-template-loader@0 html-webpack-plugin@3 raw-loader@3 ts-loader@6 typescript@3 webpack@4 webpack-cli@3 webpack-dev-server@3
•	Again, the names and versions of these development packages are added to package.json.
•	To note, the list I have here is different from Jason’s example. Jason’s file mentioned css-loader 2.2.1, html-loader 0.5.5, less 3.0.4, less-loader 0.23.1. These packages are not installed by the commands above. 
(The list of development packages in Jason’s example: https://jasonwatmore.com/post/2019/06/10/angular-8-user-registration-and-login-example-tutorial#tsconfig-json) 
•	So the following are installed again via node js command lines:
npm install --save-dev css-loader@latest html-loader@0 less@3 less-loader@latest. Consequently, I have newer css-loader, less, and less-loader than the versions in Jason’s file. 
•	Learning: one can re-install with new versions by repeat the same commands above with new specification of versions (e.g., instead of raw-loader@3, use raw-loader@latest). Such commands will install the new versions, overwriting the old ones. The file package.json will be renewed with added packages, or new versions. 
•	The latest packages can be found at https://www.npmjs.com/
•	After installation, new folders are created under the root folder. These are for corresponding package files. 

There are a couple of warnings:
- npm WARN rollback Rolling back node-pre-gyp@0.14.0 failed (this is probably harmless): EPERM: operation not permitted, lstat 'C:\Users\Z70\Angular 8 projects\a8login_stepbystep\node_modules\fsevents\node_modules'
Actions: do nothing

npm WARN @angular/core@8.2.14 requires a peer of zone.js@~0.9.1 but none is installed. You must install peer dependencies yourself.
Action: reinstall (rollback to )zone.js@~0.9.1 by the following command:
npm install --save-dev zone.js@~0.9.1

npm WARN a8login_sbs@1.0.0 No repository field.
npm WARN a8login_sbs@1.0.0 No license field.
Action: do nothing for now. These are for setting git URL and license, will do it later.

npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.11 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.11: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
Action: do nothing, cannot see how it is harmful for now.


4. Reinstall the dependencies. 
•	Now that the dependencies in 2 and 3 (for Angular 8, and for development) are specified in package.json. One can always type ‘nmp install’ in node.js command (under the folder ‘mya8login_stepbystep’’) to re-install all the packages. 

5. Create tsconfig.json (https://jasonwatmore.com/post/2019/06/10/angular-8-user-registration-and-login-example-tutorial#tsconfig-json)
•	In VSCode, under ‘mya8login’’, Create a file ‘tsconfig.json’.  In the file, paste:
{
    "compilerOptions": {
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
        "target": "ES5",
        "baseUrl": "src",
        "paths": {
            "@/*": [
                "app/*"
            ]
        }
    }
}
•	The details of each compiler can be found at https://jasonwatmore.com/post/2019/04/24/angular-7-tutorial-part-2-create-base-project-structure-webpack-config.

6. Create Webpack 4 Config
•	In VSCode, under the project root folder, Create a file ‘webpack.config.js’.  In the file, paste the code from the Webpack 4 Config part of https://jasonwatmore.com/post/2019/06/10/angular-8-user-registration-and-login-example-tutorial#tsconfig-json
•	Description on the code can be found at the corresponding section of https://jasonwatmore.com/post/2019/04/24/angular-7-tutorial-part-2-create-base-project-structure-webpack-config

7. Create src, and app folder
•	In VSCode, under the project root, create a folder ‘src’, within it, create a folder ‘app’.
•	The structure of folders can be found in the section ‘Angular 8 Tutorial Project Structure’ in the web page https://jasonwatmore.com/post/2019/06/10/angular-8-user-registration-and-login-example-tutorial#tsconfig-json

8. Create Angular App Component template
•	In VSCode, and under the folder ‘app’, create a file ‘app.component.html’
•	In this file, paste the code 
<h1>Hello Angular 8!</h1>
•	Note that the code in the following page is not suitable here. That code will be added in the future. (https://jasonwatmore.com/post/2019/06/10/angular-8-user-registration-and-login-example-tutorial#tsconfig-json)

9. Create Angular App Component
•	In VSCode, and under the folder ‘app’, create a file ‘app.component.ts’
•	In this file, paste the code as specified
•	Note that the code in the following page is not suitable here. That code will be added in the future. Same for  the following steps 10 and 11 (https://jasonwatmore.com/post/2019/06/10/angular-8-user-registration-and-login-example-tutorial#tsconfig-json)

10. Create Angular App Module
•	In VSCode, and under the folder ‘app’, create a file ‘app.module.ts’
•	In this file, paste the code from the corresponding part from https://jasonwatmore.com/post/2019/04/24/angular-7-tutorial-part-2-create-base-project-structure-webpack-config

11. Create Angular Polyfills File
•	In VSCode, and under the folder ‘src’, create a file ‘polyfills.ts’
•	In this file, paste the code from the corresponding part from https://jasonwatmore.com/post/2019/04/24/angular-7-tutorial-part-2-create-base-project-structure-webpack-config

12. Create Angular Main (Bootstrap/Launch) File
•	In VSCode, and under the folder ‘src’, create a file ‘main.ts’
•	In this file, paste the code from the corresponding part from https://jasonwatmore.com/post/2019/06/10/angular-8-user-registration-and-login-example-tutorial#tsconfig-json

13. Create Angular Main Index Html File
•	In VSCode, and under the folder ‘src’, create a file ‘index.html’
•	In this file, paste the code from the corresponding part from https://jasonwatmore.com/post/2019/06/10/angular-8-user-registration-and-login-example-tutorial#tsconfig-json

14. Add start script to package.json
•	In VSCode, and in package.json, paste the code from the corresponding lines in package.json from https://jasonwatmore.com/post/2019/06/10/angular-8-user-registration-and-login-example-tutorial#tsconfig-json 

15. Start the application
•	In node.js command window and under the project root, type npm start

B. Add routing & multiple pages
This part is to add ‘home, login, and register’ into the top banner of the page. 
Tutorial of this part is available at https://jasonwatmore.com/post/2019/04/29/angular-7-tutorial-part-3-add-routing-multiple-pages
1. Create Home Page Component & Template
•	In VSCODe, and under app, create a folder ‘home’. Inside ‘home’, create a file ‘home.component.html’. 
•	In this file, paste the code from the corresponding part from https://jasonwatmore.com/post/2019/04/29/angular-7-tutorial-part-3-add-routing-multiple-pages
•	Inside ‘home’, create a file ‘home.component.ts. 
•	In this file, paste the code from the corresponding part from https://jasonwatmore.com/post/2019/04/29/angular-7-tutorial-part-3-add-routing-multiple-pages
•	Inside ‘home’, create a file ‘index.ts. 
•	In this file, paste the code from the corresponding part from https://jasonwatmore.com/post/2019/04/29/angular-7-tutorial-part-3-add-routing-multiple-pages
2. Login Page Component & Template
•	In VSCODe, and under app, create a folder ‘login’. Inside ‘login’, create a file ‘login.component.html’. 
•	In this file, paste the code from the corresponding part from https://jasonwatmore.com/post/2019/04/29/angular-7-tutorial-part-3-add-routing-multiple-pages
•	Inside ‘login’, create a file ‘login.component.ts. 
•	In this file, paste the code from the corresponding part from https://jasonwatmore.com/post/2019/04/29/angular-7-tutorial-part-3-add-routing-multiple-pages
•	Inside ‘login’, create a file ‘index.ts. 
•	In this file, paste the code from the corresponding part from https://jasonwatmore.com/post/2019/04/29/angular-7-tutorial-part-3-add-routing-multiple-pages
3. Register Page Component & Template
•	In VSCODe, and under app, create a folder ‘register’. Inside ‘register’, create a file ‘register.component.html’. 
•	In this file, paste the code from the corresponding part from https://jasonwatmore.com/post/2019/04/29/angular-7-tutorial-part-3-add-routing-multiple-pages
•	Inside ‘register’, create a file ‘register.component.ts. 
•	In this file, paste the code from the corresponding part from https://jasonwatmore.com/post/2019/04/29/angular-7-tutorial-part-3-add-routing-multiple-pages
•	Inside ‘register’, create a file ‘index.ts. 
•	In this file, paste the code from the corresponding part from https://jasonwatmore.com/post/2019/04/29/angular-7-tutorial-part-3-add-routing-multiple-pages
4. Add Components to App Module
•	In /src/app/app.module.ts, make changes according to the corresponding part from https://jasonwatmore.com/post/2019/04/29/angular-7-tutorial-part-3-add-routing-multiple-pages. Basically, it is to add the specification for home, login, and register, as have been done in step 1 to 3.
5. Configure App Routing Module
•	Question: what is routing…
•	In VSCODe, and under app, create a file ‘app.routing.ts’
•	In this file, paste the code from the corresponding part from https://jasonwatmore.com/post/2019/04/29/angular-7-tutorial-part-3-add-routing-multiple-pages
6. Add App Routing Module to App Module
•	In /src/app/app.module.ts, make changes according to the corresponding part from https://jasonwatmore.com/post/2019/04/29/angular-7-tutorial-part-3-add-routing-multiple-pages. Basically, it is to add the specification for home, login, and register, as have been done in step 5.
7. Add Router Outlet and Navigation to App Component
•	In /src/app/app/component.html, replace the <h1>Hello Angular 8!</h1> message with the corresponding part from https://jasonwatmore.com/post/2019/04/29/angular-7-tutorial-part-3-add-routing-multiple-pages
8. Update Webpack Dev Server Config
•	Add code to webpack.config.js to prevent 404 errors corresponding part from https://jasonwatmore.com/post/2019/04/29/angular-7-tutorial-part-3-add-routing-multiple-pages
•	Note that this part is different from the above source, the correct code can be found in https://jasonwatmore.com/post/2019/06/10/angular-8-user-registration-and-login-example-tutorial#tsconfig-json

9. In node.js command window, under the folder C:\Users\Z70\Angular 8 projects\mya8login_stepbystep, type nmp start to launch the application.

****************************************************
C. Login Form, Authentication Service & Route Guard
****************************************************

This part is to create the login form. With the link to the register form (the register form is not developed yet). 
The tutorial of this part can be found at https://jasonwatmore.com/post/2019/05/17/angular-7-tutorial-part-4-login-form-authentication-service-route-guard. 

1. Create Fake Backend
1.1 Create Helpers Folder
•	In VSCode, and under app, create a folder ‘_helpers’.
1.2 Create Fake Backend Http Interceptor
•	In _helpers, create a file ‘fake-backend.ts’.
•	In this file, paste the code from the corresponding part from https://jasonwatmore.com/post/2019/05/17/angular-7-tutorial-part-4-login-form-authentication-service-route-guard
1.3 Create Barrel File in Helpers Folder
•	In _helpers, create a file ‘index.ts’.
•	In this file, paste the code from the corresponding part from https://jasonwatmore.com/post/2019/05/17/angular-7-tutorial-part-4-login-form-authentication-service-route-guard
1.4 Add Fake Backend to App Module
•	In /src/app/app.module.ts, make changes according to the corresponding part from https://jasonwatmore.com/post/2019/05/17/angular-7-tutorial-part-4-login-form-authentication-service-route-guard
2. Create Global Config Object
2.1
•	Add code to webpack.config.js from the corresponding part from https://jasonwatmore.com/post/2019/04/29/angular-7-tutorial-part-3-add-routing-multiple-pages. 
•	Note that this part is different from the above source, the correct code can be found in https://jasonwatmore.com/post/2019/06/10/angular-8-user-registration-and-login-example-tutorial#tsconfig-json
2.2 Create Custom Typings File
•	In _/src, create a file ‘typings.d.ts’.
•	In this file, paste the code from the corresponding part from https://jasonwatmore.com/post/2019/05/17/angular-7-tutorial-part-4-login-form-authentication-service-route-guard
3. Create Authentication Service
3.1 Create Services Folder
•	In VSCode, and under app, create a folder ‘_services’. 
3.2 Create Authentication Service
•	In _services, create a file ‘authentication.service.ts’.
•	In this file, paste the code from the corresponding part from https://jasonwatmore.com/post/2019/05/17/angular-7-tutorial-part-4-login-form-authentication-service-route-guard
3.3 Create Barrel File in Services Folder
•	In _ services, create a file ‘index.ts’.
•	In this file, paste the code from the corresponding part from https://jasonwatmore.com/post/2019/05/17/angular-7-tutorial-part-4-login-form-authentication-service-route-guard
4. Import ReactiveFormsModule and HttpClientModule into App Module
•	In /src/app/app.module.ts, make changes according to the corresponding part from https://jasonwatmore.com/post/2019/05/17/angular-7-tutorial-part-4-login-form-authentication-service-route-guard
5. Add Form Logic to Login Component
•	In /src/app/login/login.component.ts, make changes according to the corresponding part from https://jasonwatmore.com/post/2019/05/17/angular-7-tutorial-part-4-login-form-authentication-service-route-guard
6. Add Form HTML to Login Component Template
•	In /src/app/login/login.component.html, make changes according to the corresponding part from https://jasonwatmore.com/post/2019/05/17/angular-7-tutorial-part-4-login-form-authentication-service-route-guard
7. Add Logout and Show/Hide Nav to App Component
7.1 Add Logic to App Component
•	In /src/app/app.component.ts, make changes according to the corresponding part from https://jasonwatmore.com/post/2019/05/17/angular-7-tutorial-part-4-login-form-authentication-service-route-guard
7.2 Update Nav in App Component Template
•	In /src/app/app.component.html, make changes according to the corresponding part from https://jasonwatmore.com/post/2019/05/17/angular-7-tutorial-part-4-login-form-authentication-service-route-guard
8. Create Route Guard
8.1 Create Auth Guard
•	In _helpers, create a file ‘auth.guard.ts’.
•	In this file, paste the code from the corresponding part from https://jasonwatmore.com/post/2019/05/17/angular-7-tutorial-part-4-login-form-authentication-service-route-guard
8.2 Add Auth Guard to Helpers Barrel File
•	In /src/app/_helpers/index.ts, make changes according to the corresponding part from https://jasonwatmore.com/post/2019/05/17/angular-7-tutorial-part-4-login-form-authentication-service-route-guard
8.3 Add Auth Guard to Home Page Route
•	In /src/app/app.routing.ts, make changes according to the corresponding part from https://jasonwatmore.com/post/2019/05/17/angular-7-tutorial-part-4-login-form-authentication-service-route-guard
9. Create JWT Interceptor
9.1 Create Angular 8 JWT Interceptor (Note that the tutorial said Create Angular 7 JWT Interceptor)
•	In _helpers, create a file ‘jwt.interceptor.ts’.
•	In this file, paste the code from the corresponding part from https://jasonwatmore.com/post/2019/05/17/angular-7-tutorial-part-4-login-form-authentication-service-route-guard
9.2 Add JWT Interceptor to Barrel File
•	In /src/app/_helpers/index.ts, make changes according to the corresponding part from https://jasonwatmore.com/post/2019/05/17/angular-7-tutorial-part-4-login-form-authentication-service-route-guard
10. Create Error Interceptor
10.1 Create Angular 8 Error Interceptor
•	In _helpers, create a file ‘error.interceptor.ts’.
•	In this file, paste the code from the corresponding part from https://jasonwatmore.com/post/2019/05/17/angular-7-tutorial-part-4-login-form-authentication-service-route-guard
10.2 Add Error Interceptor to Barrel File
•	In /src/app/_helpers/index.ts, make changes according to the corresponding part from https://jasonwatmore.com/post/2019/05/17/angular-7-tutorial-part-4-login-form-authentication-service-route-guard
11. Add HTTP Interceptors to App Module
•	In /src/app/app.module.ts, make changes according to the corresponding part from https://jasonwatmore.com/post/2019/05/17/angular-7-tutorial-part-4-login-form-authentication-service-route-guard
12. In node.js command window, under the folder C:\Users\Z70\Angular 8 projects\mya8login, type nmp start to launch the application.

***********************************
D. Registration Form & User Service
***********************************
This part is to make the registration form
The tutorial of this part can be found at https://jasonwatmore.com/post/2019/05/22/angular-7-tutorial-part-5-registration-form-user-service
1. Add Register Route to Fake Backend
1.1 Update Fake Backend
•	In /src/app/_helpers/fake-backend.ts, make changes according to the corresponding part from https://jasonwatmore.com/post/2019/05/22/angular-7-tutorial-part-5-registration-form-user-service
2. Create User Service
2.1 Create User Service
•	In _ services, create a file ‘user.service.ts’.
•	In this file, paste the code from the corresponding part from https://jasonwatmore.com/post/2019/05/22/angular-7-tutorial-part-5-registration-form-user-service
2.2 Add User Service to Services Barrel File
•	In /src/app/_services/index.ts, make changes according to the corresponding part from https://jasonwatmore.com/post/2019/05/22/angular-7-tutorial-part-5-registration-form-user-service
3. Add Form Logic to Register Component
3.1 Update Register Component
•	In /src/app/register/register.component.ts, make changes according to the corresponding part from https://jasonwatmore.com/post/2019/05/22/angular-7-tutorial-part-5-registration-form-user-service
4. Add Form HTML to Register Component Template
4.1 Update Register Component Template
•	In /src/app/register/register.component.html, make changes according to the corresponding part from https://jasonwatmore.com/post/2019/05/22/angular-7-tutorial-part-5-registration-form-user-service
5. Add Success Alert To Login Component
5.1 Update Login Component
•	In /src/app/login/login.component.ts, make changes according to the corresponding part from https://jasonwatmore.com/post/2019/05/22/angular-7-tutorial-part-5-registration-form-user-service
5.2 Update Login Component Template
•	In /src/app/login/login.component.html, make changes according to the corresponding part from https://jasonwatmore.com/post/2019/05/22/angular-7-tutorial-part-5-registration-form-user-service
6. In node.js command window, under the folder C:\Users\Z70\Angular 8 projects\mya8login, type nmp start to launch the application.

***********************************
E. Home Page & Alert Component
***********************************
This part is to complete the homepage. After log  in, show the existing users, and allow to delete them.
The tutorial of this part can be found at https://jasonwatmore.com/post/2019/05/31/angular-7-tutorial-part-6-home-page-alert-component.
1. Add "Get Users" and "Delete User" Routes to Fake Backend
1.1 Update Fake Backend
•	In /src/app/_helpers/fake-backend.ts, make changes according to the corresponding part from https://jasonwatmore.com/post/2019/05/31/angular-7-tutorial-part-6-home-page-alert-component. 
2. Add Logic to Home Component
2.1 Update Home Component
•	In /src/app/home/home.component.ts, make changes according to the corresponding part from https://jasonwatmore.com/post/2019/05/31/angular-7-tutorial-part-6-home-page-alert-component.
3. Add HTML to Home Component Template
•	In /src/app/home/home.component.html, make changes according to the corresponding part from https://jasonwatmore.com/post/2019/05/31/angular-7-tutorial-part-6-home-page-alert-component.
4. Create Alert Service
4.1 Create Alert Service
•	In _services, create a file ‘alert.service.ts.ts’.
•	In this file, paste the code from the corresponding part from https://jasonwatmore.com/post/2019/05/31/angular-7-tutorial-part-6-home-page-alert-component.
4.2 Add Alert Service to Services Barrel File
•	In /src/app/_services/index.ts, make changes according to the corresponding part from https://jasonwatmore.com/post/2019/05/31/angular-7-tutorial-part-6-home-page-alert-component.
5. Create Alert Component & Template
5.1 Create Components Folder
•	In /src/app, create a folder named _components.
5.2 Create Alert Component
•	In _components, create a file ‘alert.component.ts’.
•	In this file, paste the code from the corresponding part from https://jasonwatmore.com/post/2019/05/31/angular-7-tutorial-part-6-home-page-alert-component.
5.3 Create Alert Component Template
•	In _components, create a file ‘alert.component.html’.
•	In this file, paste the code from the corresponding part from https://jasonwatmore.com/post/2019/05/31/angular-7-tutorial-part-6-home-page-alert-component.
5.4 Create Barrel File in Components Folder
•	In _components, create a file ‘index.ts’.
•	In this file, paste the code from the corresponding part from https://jasonwatmore.com/post/2019/05/31/angular-7-tutorial-part-6-home-page-alert-component.
5.5 Add Alert Component to App Module
•	In /src/app/app.module.ts, make changes according to the corresponding part from https://jasonwatmore.com/post/2019/05/31/angular-7-tutorial-part-6-home-page-alert-component.
5.6 Add Alert Component to App Component Template
•	In /src/app/app.component.html, make changes according to the corresponding part from https://jasonwatmore.com/post/2019/05/31/angular-7-tutorial-part-6-home-page-alert-component.
6. Refactor Login Component to use Alert Service
6.1 Refactor Login Component Logic
•	In /src/app/login/login.component.ts, make changes according to the corresponding part from https://jasonwatmore.com/post/2019/05/31/angular-7-tutorial-part-6-home-page-alert-component.
6.2 Remove Alert HTML from Login Component Template
•	In /src/app/login/login.component.html, make changes according to the corresponding part from https://jasonwatmore.com/post/2019/05/31/angular-7-tutorial-part-6-home-page-alert-component.
7. Refactor Register Component to use Alert Service
7.1 Refactor Register Component Logic
•	In /src/app/register/register.component.ts, make changes according to the corresponding part from https://jasonwatmore.com/post/2019/05/31/angular-7-tutorial-part-6-home-page-alert-component.
7.2 Remove Alert HTML from Register Component Template
•	In /src/app/register/register.component.html, make changes according to the corresponding part from https://jasonwatmore.com/post/2019/05/31/angular-7-tutorial-part-6-home-page-alert-component.
8. In node.js command window, under the folder C:\Users\Z70\Angular 8 projects\mya8login, type nmp start to launch the application.
