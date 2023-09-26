import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, map, tap } from "rxjs";
import { SingleUserResponse, User } from "../interfaces/user-request.interface";

@Injectable({
    providedIn: "root",
})
export class UsersServiceService {
    //inyectamos http con inject( se puede usar en el constructor) pero es maś claro esta manera
    private http = inject(HttpClient);
    // para este ejemplo usaremos reqres (Test your front-end against a real API)
    private baseUrl = "https://reqres.in/api/users";

    //metodo obtener user por id
    getUserById(id: number): Observable<User> {
        return this.http.get<SingleUserResponse>(`${this.baseUrl}/${id}`).pipe(
            map((response) => response.data),
            tap(console.log)
        );
    }
}
