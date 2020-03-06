// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand('extension.spongebobify', function () {
    // The code you place here will be executed every time your command is executed
    // current editor
    const editor = vscode.window.activeTextEditor;
    var textRange = new vscode.Range(
      editor.selection.start.line,
      editor.selection.start.character,
      editor.selection.end.line,
      editor.selection.end.character
    );
    var selectedText = editor.document.getText(textRange);
    editor.edit(function(range) {
      range.replace(textRange, spongebobify(selectedText));
    });
  });

  context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

function spongebobify(text) {
  return text.split('')
             .map((char) => (Math.random() > 0.4) ? char.toLocaleUpperCase() : char.toLocaleLowerCase())
             .join('');
}
module.exports = {
  activate,
  deactivate
}
