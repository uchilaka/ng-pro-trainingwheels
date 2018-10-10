import { Component } from "@angular/core";

import { User } from "./auth-form/auth-form.interface";

import { Choice } from "./auth-form/models/pref.model";

@Component({
  selector: "app-root",
  template: `
    <div>
      <auth-form
        (submitted)="createUser($event)">
        <h3>Create account</h3>
        <pref-options *ngFor="let choice of choices" [option]="choice" (choiceChecked)="onOptIn($event)"></pref-options>
        <button type="submit">
          Register
        </button>
      </auth-form>
      <auth-form
        (submitted)="loginUser($event)">
        <h3>Login</h3>
        <auth-remember (checked)="rememberUser($event)"></auth-remember>
        <button type="submit">
          Submit
        </button>
      </auth-form>
    </div>
  `
})
export class AppComponent {
  rememberMe: boolean = false;
  showMessage: boolean = false;
  public choices: Choice[] = new Array<Choice>();

  constructor() {
    // Create choice(s)
    this.choices = [
      new Choice("Subscribe to our newsletter"),
      new Choice("Receive benefits from our Partners")
    ];
  }

  createUser(user: User): void {
    console.log("Create account", user);
  }

  loginUser(user: User): void {
    console.log("Login", user);
  }

  rememberUser(remember: boolean) {
    this.rememberMe = remember;
    // this.showMessage = this.rememberMe;
  }

  onOptIn(choice: Choice) {
    console.log("Choice: ", choice);
  }
}
