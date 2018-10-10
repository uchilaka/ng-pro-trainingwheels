import {
  Component,
  Output,
  EventEmitter,
  AfterContentInit,
  ContentChildren,
  ContentChild,
  QueryList
} from "@angular/core";

import { User } from "./auth-form.interface";
import { AuthRememberComponent } from "./auth-remember.component";
import { PrefOptionsComponent } from "./pref-options/pref-options.component";

@Component({
  selector: "auth-form",
  templateUrl: "auth-form.component.html"
})
export class AuthFormComponent implements AfterContentInit {
  showMessage: boolean;

  @ContentChildren(PrefOptionsComponent)
  optIns: QueryList<PrefOptionsComponent>;

  @ContentChild(AuthRememberComponent)
  remember: AuthRememberComponent;

  @Output()
  submitted: EventEmitter<User> = new EventEmitter<User>();

  ngAfterContentInit() {
    console.log(this.optIns);
    if (this.optIns) {
      this.optIns.forEach(item => {
        item.checked.subscribe(
          (checked: boolean) => (this.showMessage = checked)
        );
      });
    }
    if (this.remember) {
      console.log(this.remember);
      this.remember.checked.subscribe(
        (checked: boolean) => (this.showMessage = checked)
      );
    }
  }

  onSubmit(value: User) {
    this.submitted.emit(value);
  }
}
