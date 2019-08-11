import * as vscode from "vscode";

export const Key = "numericMacro";
export const ExtensionKey = `extension.${Key}`;
export type ExtensionCallback = (
  textEditor: vscode.TextEditor,
  edit: vscode.TextEditorEdit
) => void;
