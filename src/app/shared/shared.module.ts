import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CustomLabelDirective } from "./directives/custom-label.directive";

//directivas se tienen que declarar y exportarlas si se quieren utilizar
@NgModule({
    declarations: [CustomLabelDirective],
    imports: [CommonModule],
    exports: [CustomLabelDirective],
})
export class SharedModule {}
