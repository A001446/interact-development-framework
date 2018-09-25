IDF is a webpack project designed to bolster JAS/VIVR JavaScript (TypeScript) development.
There is far too much to explain what webpack is.
It is suggested to understand what JS modules are and what purpose webpack serves on your own.
The main idea is that modules can be imported/exported, which gives developers the full power of the NPM Registry!

IDF still registers to extension points as developers are used to doing.
Those points are defined via folder structure convention, with the vast majority of development will go into "src/apps/common".
From there, we go down to "flow/FlowName/PageName.ts" where we can register for the normal events, like "loaded".
All that is required is for designers (in design time) to specify the PageName of: FlowName_PageName.
Once that page is reached in runtime, IDF will call the proper extension point defined in common app or a more specific app, like "agent".
If an extension should run on all pages, place it in the "all-pages" folder.

The framework has had minimal testing in the field and thus has not hit 1.0.
There are many enhancements to take on just with the JavaScript aspect.
Examples: hot module replacement, CI/CD.
IDF can be pushed further to encompass other file types like CSS/SASS, HTML, etc.
IDF currently has 2 opinionated features: the use of TypeScript and VueJS. These can be removed if desired by the project team.

To install dependencies: npm install

For development, build and watch files: npm run build-watch:dev
The bundles can be found in the /dist folder. 
Note: the vendors-bundle should be included prior to the app-bundle on the DOM. This priority can be set using the Interact console.

For production, create a minified/uglified bundles with separate source maps: npm run build
The source maps cannot be deployed to Interact, but can be attached in the Chrome debugger at runtime by specifying a custom URL.
Developers can generate this custom URL by locally serving the dist folder via: npm run server

For multi-developer teams: 
Each team member should get their own app so that they do not overwrite other developers' bundles (extensions) during development.