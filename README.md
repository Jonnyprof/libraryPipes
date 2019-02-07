# PipesLibrary

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.0.

## About the project
This project contains:
1. An apps folder with an example-app using all de libraries.
2. A libs folder containing 3 basic libraries.
   - icons: Component library that renders a smiley.
   - uppercasePipe: Pipe library that transform the text to uppercase.
   - complexComponents: Component library that uses icons and uppercasePipe. The errors occurs when compiling this library when uppercasePipe is using yarn workspaces (symlink).
3. Yarn workspaces in package.json
   - "dist/libs/*"
   
Build folders are dist/{apps|libs}/{name}

## How to reproduce the yarn workspaces error
1. Clone this project
2. Install dependencies. `yarn install`
   - If you build the project now, it will use npm libraries and will work. `yarn build example-app`
   - If you build the libraries now, it will use npm libraries and will work. `yarn build:libs`
3. Build the libraries `yarn build:libs`
4. Use yarn workspaces. This will create a symlink from node_modules folder to our libraries dist folder. `yarn install`
   - node_modules/@example-lib/icons will link to dist/libs/icons
   - node_modules/@example-lib/uppercase-pipe will link to dist/libs/uppercase-pipe
   - node_modules/@example-lib/complex-components will link to dist/libs/complex-components
5. Build the libraries `yarn build:libs`. This will throw `Cannot read property 'type' of null`

### About the error
The errors throws when compiling one library that contains a pipe *from another library* placed in yarn workspace.
There are no errors if the other library is different than pipe (component, directive, etc).

I guess the error is related with getting summary from summaryCache, because sometimes it looks for `node_modules/@example-lib/uppercase-pipe` and other for `dist/libs/uppercase-pipe`.

In file [compiler](https://github.com/angular/angular/blob/master/packages/compiler/src/aot/compiler.ts#L657) line 657:
```
const pipes = ngModule.transitiveModule.pipes.map(
    pipe => this._metadataResolver.getPipeSummary(pipe.reference));
```
The map function returns null.

In file [template_parser](https://github.com/angular/angular/blob/master/packages/compiler/src/template_parser/template_parser.ts#L138) line 138:
```
const uniqPipes = removeSummaryDuplicates(pipes);
```
crashes because the pipe is null.

## Workaround
To avoid this error you have to deploy the libraries containing pipes before build the libraries and exclude this libraries from yarn workspaces, which is annoying when developing libraries.

## Logs
I've committed logs files that I've used to try to figure out why the error happens. I've just console.trace in _loadSummary function in compiler.umd.js file:
```
        CompileMetadataResolver.prototype._loadSummary = function (type, kind) {
            var typeSummary = this._summaryCache.get(type);
            console.trace('GETTING _loadSummary', type, typeSummary)
            if (!typeSummary) {
                var summary = this._summaryResolver.resolveSummary(type);
                typeSummary = summary ? summary.type : null;
                this._summaryCache.set(type, typeSummary || null);
              console.trace('SETTING _loadSummary', type, typeSummary)
            }
            return typeSummary && typeSummary.summaryKind === kind ? typeSummary : null;
        };
```
