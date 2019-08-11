import * as vscode from "vscode";
import commands from "./commands";

export const activate = (context: vscode.ExtensionContext) => {
  Object.keys(commands)
    .map(key =>
      vscode.commands.registerTextEditorCommand(key, commands[key].execute)
    )
    .forEach(item => context.subscriptions.push(item));
};

export const deactivate = (context: vscode.ExtensionContext) => {};
