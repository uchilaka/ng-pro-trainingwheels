import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { AuthFormComponent } from "./auth-form.component";
import { AuthRememberComponent } from "./auth-remember.component";
import { AuthMessageComponent } from "./auth-message.component";
import { PrefOptionsComponent } from "./pref-options/pref-options.component";

@NgModule({
  declarations: [
    AuthFormComponent,
    AuthRememberComponent,
    PrefOptionsComponent,
    AuthMessageComponent
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    AuthFormComponent,
    AuthRememberComponent,
    PrefOptionsComponent,
    AuthMessageComponent
  ]
})
export class AuthFormModule {}
