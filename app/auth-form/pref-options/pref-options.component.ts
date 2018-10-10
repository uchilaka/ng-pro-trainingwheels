import { Component, Input, EventEmitter, Output } from "@angular/core";

import { ICheck, Choice } from "../models/pref.model";

@Component({
  selector: "pref-options",
  templateUrl: "pref-options.component.html"
})
export class PrefOptionsComponent {
  @Input()
  public option?: Choice;

  @Output()
  checked: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  choiceChecked: EventEmitter<Choice> = new EventEmitter<Choice>();

  // constructor() {}

  onChecked = (checked: boolean) => this.checked.emit(checked);

  onChoiceChecked(pick: Choice, checked: boolean) {
    pick.checked = checked;
    this.choiceChecked.emit(pick);
  }
}
