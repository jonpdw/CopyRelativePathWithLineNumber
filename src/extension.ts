import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.copyRelativePathWithLineNumber', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('No active text editor found.');
            return;
        }

        const document = editor.document;
        const lineNumber = editor.selection.active.line + 1;
        const workspaceFolder = vscode.workspace.getWorkspaceFolder(document.uri);
        if (!workspaceFolder) {
            vscode.window.showErrorMessage('No workspace folder found.');
            return;
        }

        const relativePath = vscode.workspace.asRelativePath(document.uri, false);
        const modifiedRelativePath = relativePath.replace('@', ' ');
        const pathWithLineNumber = `${modifiedRelativePath}:${lineNumber}`;

        await vscode.env.clipboard.writeText(pathWithLineNumber);
        vscode.window.showInformationMessage(`Copied to clipboard: ${pathWithLineNumber}`);
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}