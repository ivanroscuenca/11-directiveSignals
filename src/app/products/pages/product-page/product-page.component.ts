import { Component, inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    templateUrl: "./product-page.component.html",
    styleUrls: ["./product-page.component.css"],
})
export class ProductPageComponent {
    //crear formulario reactivo : 2 maneras
    //antigua inyección con constructor
    //constructor(private fb:FormBuilder){}

    //nueva forma con inject
    private fb = inject(FormBuilder);

    public color: string = "green";
    public myForm: FormGroup = this.fb.group({
        name: [
            "",
            [Validators.required, Validators.minLength(6), Validators.email],
        ],
    });

    changeColor() {
        const color = "#xxxxxx".replace(/x/g, (y) =>
            ((Math.random() * 16) | 0).toString(16)
        );
        this.color = color;
    }
}
