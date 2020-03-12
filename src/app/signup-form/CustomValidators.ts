import { ValidationErrors, AbstractControl } from '@angular/forms';

export class CustomValidator {
    static containsNoSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as String).indexOf(" ") >= 0)
            return { NoSpace: true }
        return null
    }
}