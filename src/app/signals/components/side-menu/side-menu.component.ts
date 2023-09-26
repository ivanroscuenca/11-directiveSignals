import { Component, signal } from "@angular/core";

interface MenuItem {
    title: string;
    route: string;
}

@Component({
    selector: "side-menu",
    templateUrl: "./side-menu.component.html",
    styleUrls: ["./side-menu.component.css"],
})
export class SideMenuComponent {
    //metodo con signal

    public menuItems = signal<MenuItem[]>([
        { title: "Contador", route: "counter" },
        { title: "Usuario", route: "user-info" },
        { title: "Actualizaciones", route: "properties" },
    ]);

    //metodo tradicional
    // public menuItems: MenuItem[] = [
    //     { title: "Contador", route: "counter" },
    //     { title: "Usuario", route: "user-info" },
    //     { title: "Actualizaciones", route: "properties" },
    // ];
}
