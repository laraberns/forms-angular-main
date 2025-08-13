import { Directive } from "@angular/core";
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from "@angular/forms";

@Directive({
  selector: "[maiorIdadeValidator]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MaiorIdadeDirective,
      multi: true,
    },
  ],
})
export class MaiorIdadeDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const dataNascimento = new Date(control.value);

    const hoje = new Date();
    const data18Anos = new Date(
      dataNascimento.getFullYear() + 18,
      dataNascimento.getMonth(),
      dataNascimento.getDate()
    );

    return hoje >= data18Anos ? null : { maiorIdadeValidator: true };
  }
}
