import { Injectable } from "@angular/core";
import { AbstractControl, FormGroup, ValidatorFn } from "@angular/forms";


@Injectable({
    providedIn: 'root'
})

export class ValidatorService {
    constructor() {}
    
    MustMatch(firstControl: AbstractControl): ValidatorFn {
        return (
            secondControl: AbstractControl
        ): { [key: string]: boolean } | null => {

            // retourne null si les contrôles ne sont pas encore initialisés
            if (!firstControl && !secondControl) {
                return null;
            }

            // retourne null si un autre validateur a déjà trouvé une erreur sur le matchingControl
            if (secondControl.hasError && !firstControl.hasError) {
                return null;
            }

            // définir une erreur sur matchingControl si la validation échoue
            if (firstControl.value !== secondControl.value) {
                return { mustMatch: true };
            } else {
                return null;
            }
        };
    }

}
/*
export function ConfirmPasswordValidators(controlName: string, matchingControlName: string, controlPass: string){

    return (formGroup: FormGroup) => {

        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        const password = formGroup.controls[controlPass];

        if (matchingControl.errors && !matchingControl.errors.confirmPasswordValidator) {
            return;
        }
        if (control.value !== matchingControl.value && control.value !== password.value && matchingControl.value === password.value) {
            matchingControl.setErrors({ confirmPasswordValidator: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}


export class PasswordValidation{

    static MatchPassword(AC : AbstractControl){
        const password = AC.get('password').value;
        const confirmPassword = AC.get('confirmPassword');
        if (password !== confirmPassword) {
            AC.get('confirmPassword').setErrors({MatchPassword: true})
        }else{
            AC.get('confirmPassword').updateValueAndValidity(
                {onlySelf : true, emitEvent: false}
            );
            return null;
        }
    }
}
*/