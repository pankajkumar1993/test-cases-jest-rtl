// Configures if the built-in HTML language suggests HTML5 tags, properties and values.
"html.suggest.html5": true




{
    "workbench.colorTheme": "Default Dark+",
    "editor.unicodeHighlight.allowedLocales": {
        "es": true
    },
    "workbench.editor.untitled.hint": "hidden",
    "window.zoomLevel": 1,
    "editor.unicodeHighlight.ambiguousCharacters": false,
    "gitlens.advanced.messages": {
        "suppressGitDisabledWarning": true
    },
    "css.lint.unknownProperties": "ignore",
    "css.lint.unknownAtRules": "ignore",
    "editor.formatOnSave": true,
    "typescript.updateImportsOnFileMove.enabled": "always",
    "workbench.startupEditor": "none",
    "javascript.updateImportsOnFileMove.enabled": "always",
    "git.autofetch": true,
    "html.suggest.html5": true,
    "emmet.includeLanguages": {
        "javascript": "javascriptreact",
        "razor": "html",
        "vue-html": "html",
        "html": "html"
    },
    "files.associations": {
        "*.html": "html",
        "*.js": "html",
        "*.jsx": "html",
        "*.tsx": "html",
    }
}


Emmet: Include Languages
Enable Emmet abbreviations in languages that are not supported by default. Add a mapping here between the language and Emmet supported language. For example: {"vue-html": "html", "javascript": "javascriptreact"}

Files: Associations
Configure glob patterns of file associations to languages (for example "*.extension": "html"). Patterns will match on the absolute path of a file if they contain a path separator and will match on the name of the file otherwise. These have precedence over the default associations of the languages installed.
