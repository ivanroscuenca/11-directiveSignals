import { Directive, ElementRef, Input, OnInit } from "@angular/core";
import { ValidationErrors } from "@angular/forms";

@Directive({
    selector: "[customLabel]",
})
export class CustomLabelDirective implements OnInit {
    private htmlElement?: ElementRef<HTMLElement>;

    //variables privadas se suele utilizar guión bajo
    private _color: string = "red";
    private _errors?: ValidationErrors | null;

    @Input()
    set color(value: string) {
        this._color = value;
        this.setStyle();
    }

    @Input()
    set errors(value: ValidationErrors | null | undefined) {
        this._errors = value;
        this.setErrorMessage();
        return;
    }

    constructor(private el: ElementRef) {
        this.htmlElement = el;
    }
    ngOnInit(): void {
        console.log("Directiva ngOnInit");
        this.setStyle();
    }

    setStyle() {
        if (!this.htmlElement) return;

        this.htmlElement!.nativeElement.style.color = this._color;
    }

    setErrorMessage() {
        if (!this.htmlElement) return;
        if (!this._errors) {
            this.htmlElement.nativeElement.innerText = "";
        }

        const errors = Object.keys(this._errors as object);
        if (errors.includes("required")) {
            this.htmlElement.nativeElement.innerText =
                "Este campo es requerido";
            return;
        }

        if (errors.includes("minlength")) {
            const current = this._errors!["minlength"]["actualLength"];

            this.htmlElement.nativeElement.innerText = `Tiene ${current} caracteres, necesita un mínimo de 6 caracteres`;
            return;
        }

        if (errors.includes("email")) {
            this.htmlElement.nativeElement.innerText = "El email es incorrecto";
            return;
        }
    }
}
