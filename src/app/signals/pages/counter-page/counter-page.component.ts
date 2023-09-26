import { Component, computed, signal } from "@angular/core";

@Component({
    templateUrl: "./counter-page.component.html",
    styleUrls: ["./counter-page.component.css"],
})
export class CounterPageComponent {
    public counter = signal(10);
    //signal computada, solo lectura
    public squareCounted = computed(() => this.counter() * this.counter());
    decrease() {
        this.counter.set(this.counter() - 1);
    }
    increase() {
        this.counter.set(this.counter() + 1);
    }
}
