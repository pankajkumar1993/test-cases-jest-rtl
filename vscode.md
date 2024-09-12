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
Configure glob patterns of file associations to languages (for example "*.extension": "html"). Patterns will match on the absolute path of a file if they contain a path separator and will match on the name of the file otherwise. These have precedence over the default associations of the languages installed.
