import { Component } from "@angular/core";

@Component({
  selector: "auth-message",
  template: `
    <div>
      You will be logged in for {{ days }} day(s)
    </div>
  `
})
export class AuthMessageComponent {
  days: number = 7;
}
