import { Component } from "@angular/core";

import { User } from "./auth-form/auth-form.interface";

@Component({
  selector: "app-root",
  template: `
    <div>
      <auth-form
        (submitted)="createUser($event)">
        <h3>Create account</h3>
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
  rememberMe: boolean;

  createUser(user: User): void {
    console.log("Create account", user);
  }

  loginUser(user: User): void {
    console.log("Login", user);
  }

  rememberUser(remember: boolean) {
    this.rememberMe = remember;
  }
}
