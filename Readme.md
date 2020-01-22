Based on instructions in F:\Personal\Dropbox\English Writing\MyBlog at wordpress\Angular to set up a website with log in register.docx
A. Create the Base Project Structure
This part is to create the basic structure, and a home page (index.html) with one line ‘Hello Angular 8!’
The tutorial of this part can be found at https://jasonwatmore.com/post/2019/04/24/angular-7-tutorial-part-2-create-base-project-structure-webpack-config. 

1. Create package.json
•	In vscode, and under the folder my8login, create a new file (by hitting the new file button) and name it ‘package.json’. The full contents of package.json can be found at ‘https://jasonwatmore.com/post/2019/06/10/angular-8-user-registration-and-login-example-tutorial#package-json’. 
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
•	Now that the dependencies in 2 and 3 (for Angular 8, and for development) are specified in package.json. One can always type ‘nmp install’ in node.js command (under the folder ‘mya8login’’) to re-install all the packages. 

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
•	In VSCode, under ‘mya8login’’, Create a file ‘webpack.config.js’.  In the file, paste the code from the Webpack 4 Config part of https://jasonwatmore.com/post/2019/06/10/angular-8-user-registration-and-login-example-tutorial#tsconfig-json
•	Description on the code can be found at the corresponding section of https://jasonwatmore.com/post/2019/04/24/angular-7-tutorial-part-2-create-base-project-structure-webpack-config


