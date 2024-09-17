// Configures if the built-in HTML language suggests HTML5 tags, properties and values.
"html.suggest.html5": true

{
"workbench.startupEditor": "newUntitledFile",
"[html]": {
"editor.defaultFormatter": "vscode.html-language-features"
},
"explorer.confirmDelete": false,
"git.enableSmartCommit": true,
"editor.minimap.enabled": false,
"breadcrumbs.enabled": true,
"editor.renderWhitespace": "all",
"editor.linkedEditing": true,
"workbench.iconTheme": "symbols",
"security.workspace.trust.untrustedFiles": "open",
"editor.accessibilitySupport": "off",
"git.openRepositoryInParentFolders": "never",
"[vue]": {
"editor.defaultFormatter": "esbenp.prettier-vscode"
},
"emmet.includeLanguages": {
"vue-html": "html",
"javascript": "javascriptreact",
"typescript": "typescriptreact"
},
"javascript.updateImportsOnFileMove.enabled": "always",
"typescript.updateImportsOnFileMove.enabled": "always",
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.tabSize": 2,
"[typescriptreact]": {
"editor.defaultFormatter": "vscode.typescript-language-features"
},
"[scss]": {
"editor.defaultFormatter": "vscode.css-language-features"
},
"[javascript]": {
"editor.defaultFormatter": "vscode.typescript-language-features"
},
"[json]": {
"editor.defaultFormatter": "vscode.json-language-features"
},
"[css]": {
"editor.defaultFormatter": "vscode.css-language-features"
},
"[jsonc]": {
"editor.defaultFormatter": "vscode.json-language-features"
},
"git.confirmSync": false,
"[typescript]": {
"editor.defaultFormatter": "vscode.typescript-language-features"
},
"tabnine.experimentalAutoImports": true,
"css.lint.unknownAtRules": "ignore",
"liveServer.settings.donotShowInfoMsg": true,
"css.lint.unknownProperties": "ignore",
"editor.wordWrap": "on",
"editor.fontSize": 16,
"[astro]": {
"editor.defaultFormatter": "astro-build.astro-vscode"
},
"[javascriptreact]": {
"editor.defaultFormatter": "vscode.typescript-language-features"
},
"less.lint.unknownAtRules": "ignore",
"scss.lint.unknownAtRules": "ignore",
"scss.lint.unknownProperties": "ignore",
"workbench.productIconTheme": "fluent-icons",
"symbols.hidesExplorerArrows": false,
"liveSassCompile.settings.formats": [
{
"format": "expanded",
"extensionName": ".css",
"savePath": "/dist/css",
"savePathReplacementPairs": null
}
],
"terminal.integrated.env.windows": {},
"console-ninja.featureSet": "Community",
"workbench.colorTheme": "Ayu Mirage",
"[markdown]": {
"editor.defaultFormatter": "DavidAnson.vscode-markdownlint"
},
"files.refactoring.autoSave": false
}

Emmet: Include Languages
Enable Emmet abbreviations in languages that are not supported by default. Add a mapping here between the language and Emmet supported language. For example: {"vue-html": "html", "javascript": "javascriptreact"}

Files: Associations
Configure glob patterns of file associations to languages (for example "\*.extension": "html"). Patterns will match on the absolute path of a file if they contain a path separator and will match on the name of the file otherwise. These have precedence over the default associations of the languages installed.

import React, { useEffect, useState } from 'react';
import { Virtuoso } from 'react-virtuoso';
import ReactDOM from 'react-dom/client';

const App = () => {
const [pokemon, setPokemon] = useState([]);

useEffect(() => {
async function fetchPokemon() {
const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
const data = await response.json();
setPokemon(data.results);
};
fetchPokemon();
}, []);

return (
<div>
<h1>Virtualized Pokémon List</h1>
<Virtuoso
style={{ height: '600px' }}
totalCount={pokemon.length}
itemContent={(index) => {
const poke = pokemon[index];
return (
<div key={poke.name} style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
{index + 1}. {poke.name}
</div>
);
}}
/>
</div>
);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
Configure glob patterns of file associations to languages (for example "\*.extension": "html"). Patterns will match on the absolute path of a file if they contain a path separator and will match on the name of the file otherwise. These have precedence over the default associations of the languages installed.

{
"File Header Comment": {
"prefix": "fileheader",
"body": [
"/**",
" * @file ${TM_DIRECTORY}/${TM_FILENAME}",
" * @author ZCO Engineer",
" * @date $CURRENT_DATE, $CURRENT_MONTH, $CURRENT_YEAR",
" * @brief ${TM_FILENAME_BASE} component",
" */"
],
"description": "File header comment snippet for DeliveryLoad component"
}
}

<section className="py-5">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <div className="image">
          <img src="" alt="" />
        </div>
      </div>
      <div className="col-md-6">
        <h1></h1>
        <p></p>
        <button></button>
      </div>
    </div>
  </div>
</section>

create fir global

scripts": {
"build": "webpack --config config/webpack-production.js --env ENV_SOURCE=deploy",
"start": "webpack-dev-server --config config/webpack-development.js",
"test": "react-scripts test",
"test:all": "react-scripts test --watchAll=false -u",
"eject": "react-scripts eject",
"lint": "tsc --noEmit && eslint --fix \"./src/**/\*.{js,jsx,ts,tsx}\"",
"format": "prettier --write \"./src/**/\*.{js,jsx,ts,tsx,json,css,scss,md}\""
},
