import * as vscode from "vscode";
import Macro from "./macro";

const regex = /(-?(\d+\.?\d+|\d+))/gi;

interface Match {
  match: string;
  range: vscode.Range;
}

export default class Editor {
  macro: Macro;
  textEditor: vscode.TextEditor;
  edit: vscode.TextEditorEdit;

  constructor(
    macro: Macro,
    textEditor: vscode.TextEditor,
    edit: vscode.TextEditorEdit
  ) {
    this.macro = macro;
    this.textEditor = textEditor;
    this.edit = edit;
  }

  execute = () => {
    this.textEditor.selections.forEach(selection =>
      this.editSelection(selection)
    );
  };

  editSelection = (selection: vscode.Selection) => {
    const range = this.getRangesFromSelection(selection);
    if (!range) {
      return;
    }

    const text = this.textEditor.document.getText(range);
    const replacedText = text.replace(regex, str => {
      const temp = str.split(".");
      return (
        (parseInt(temp[0]) + this.macro.add).toString() +
        (temp[1] ? "." + temp[1] : "")
      );
    });

    this.edit.replace(range, replacedText);
  };

  getRangesFromSelection = (
    selection: vscode.Selection
  ): vscode.Range | null => {
    const { start, end, active, isEmpty } = selection;

    if (isEmpty) {
      const range = this.textEditor.document.getWordRangeAtPosition(active);
      if (range) {
        return range;
      }
    } else {
      return new vscode.Range(selection.start, selection.end);
    }

    return null;
  };
}
