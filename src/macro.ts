import * as vscode from "vscode";
import Editor from "./editor";

export default class Macro {
  add: number;
  isGlobalReplacement: boolean;

  constructor(add: number, isGlobalReplacement: boolean) {
    this.add = add;
    this.isGlobalReplacement = isGlobalReplacement;
  }

  execute = (textEditor: vscode.TextEditor, edit: vscode.TextEditorEdit) => {
    const editor = new Editor(this, textEditor, edit);
    editor.execute();
  };

  replaceDocument = () => {};
}
